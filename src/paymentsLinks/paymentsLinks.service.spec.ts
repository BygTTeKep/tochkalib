import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { TochkaPaymentStatus } from './enums/paymentStatus.enum.js';
import type { CreatePaymentLinkDto } from './interfaces/createPaymentLink.interface.js';
import type { CapturePaymentDto } from './interfaces/capturePayment.interface.js';
import type { CreatePaymentOperationWithReceiptDto } from './interfaces/createPaymentOperationWithReceipt.interface.js';
import type { GetPaymentRegistryDto } from './interfaces/getPaymentRegistry.interface.js';
import type { RefundPaymentDto } from './interfaces/refundPayment.interface.js';
import { PaymentsLinksService } from './paymentsLinks.service.js';

describe('PaymentsLinksService', () => {
  let service: PaymentsLinksService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const customerCode = '300000092';
  const operationId = '48232c9a-ce82-1593-3cb6-5c85a1ffef8f';
  const merchantId = '200000000001056';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        PaymentsLinksService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(PaymentsLinksService);
  });

  it('requests payment operation list with required customerCode', async () => {
    http.get.mockResolvedValue({});

    await service.getPaymentOperationList({ customerCode });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/payments?customerCode=${customerCode}`,
    );
  });

  it('appends optional filters to payment operation list query', async () => {
    http.get.mockResolvedValue({});

    await service.getPaymentOperationList({
      customerCode,
      fromDate: '2020-01-20',
      toDate: '2020-01-21',
      page: 2,
      perPage: 10,
      status: TochkaPaymentStatus.CREATED,
    });

    expect(http.get).toHaveBeenCalledWith(
      '/acquiring/v1.0/payments?customerCode=300000092&fromDate=2020-01-20&toDate=2020-01-21&page=2&perPage=10&status=CREATED',
    );
  });

  it('creates a payment operation with the given payload', async () => {
    const dto: CreatePaymentLinkDto = {
      customerCode,
      amount: 1234,
      purpose: 'Перевод за оказанные услуги',
      paymentMode: ['sbp', 'card'],
    };
    http.post.mockResolvedValue({});

    await service.createPaymentOperation(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/acquiring/v1.0/payments', dto);
  });

  it('requests payment info by operation id', async () => {
    http.get.mockResolvedValue({});

    await service.getPaymentInfoByOperationId({ operationId });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/payments/${operationId}`,
    );
  });

  it('captures a two-stage payment by operation id', async () => {
    const dto: CapturePaymentDto = { operationId };
    http.post.mockResolvedValue({});

    await service.capturePayment(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/acquiring/v1.0/payments/${operationId}/capture`,
      dto,
    );
  });

  it('refunds a payment by operation id', async () => {
    const dto: RefundPaymentDto = { operationId };
    http.post.mockResolvedValue({});

    await service.refundPaymentOperation(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/acquiring/v1.0/payments/${operationId}/refund`,
      dto,
    );
  });

  it('creates a payment operation with receipt', async () => {
    const dto: CreatePaymentOperationWithReceiptDto = {
      Data: {
        customerCode,
        amount: 1234,
        purpose: 'Перевод за оказанные услуги',
        paymentMode: ['sbp'],
        Client: { email: 'ivanov@mail.com' },
        Items: [{ name: 'Услуга', amount: 1234, quantity: 1 }],
      },
    };
    http.post.mockResolvedValue({});

    await service.createPaymentOperationWithReceipt(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      '/acquiring/v1.0/payments_with_receipt',
      dto,
    );
  });

  it('requests payment registry with required query params', async () => {
    const dto: GetPaymentRegistryDto = {
      customerCode,
      merchantId,
      date: '2020-01-20',
    };
    http.get.mockResolvedValue({});

    await service.getPaymentRegistry(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/registry?customerCode=${customerCode}&merchantId=${merchantId}&date=2020-01-20`,
    );
  });

  it('appends optional paymentId to payment registry query', async () => {
    const paymentId = '6d369b30-4a40-4249-aabb-7fc6b561dc7b';
    http.get.mockResolvedValue({});

    await service.getPaymentRegistry({
      customerCode,
      merchantId,
      date: '2020-01-20',
      paymentId,
    });

    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/registry?customerCode=${customerCode}&merchantId=${merchantId}&date=2020-01-20&paymentId=${paymentId}`,
    );
  });

  it('requests retailers by customer code', async () => {
    http.get.mockResolvedValue({});

    await service.getRetailers({ customerCode });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/retailers?customerCode=${customerCode}`,
    );
  });
});
