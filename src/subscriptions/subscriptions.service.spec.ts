import { Test } from '@nestjs/testing';
import { TaxSystemCode } from '../enums/taxSystemCode.enum.js';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { FrequencyOfWriteOffs } from './enums/frequencyOfWriteOffs.enum.js';
import { SubscriptionStatus } from './enums/subscriptionStatus.enum.js';
import type { CreateSubscriptionDto } from './interfaces/createSubscription.interface.js';
import type { CreateSubscriptionWithReceiptDto } from './interfaces/createSubscriptionWithReceipt.interface.js';
import type { SetSubscriptionStatusDto } from './interfaces/setSubscriptionStatus.interface.js';
import { SubscriptionsService } from './subscriptions.service.js';

describe('SubscriptionsService', () => {
  let service: SubscriptionsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const customerCode = '300000092';
  const operationId = '48232c9a-ce82-1593-3cb6-5c85a1ffef8f';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        SubscriptionsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(SubscriptionsService);
  });

  it('creates a subscription with the given payload', async () => {
    const dto: CreateSubscriptionDto = {
      Data: {
        customerCode,
        amount: 1234,
        purpose: 'Подписка на услугу',
        Options: { period: FrequencyOfWriteOffs.Month, trancheCount: 12 },
      },
    };
    http.post.mockResolvedValue({});

    await service.createSubscription(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      '/acquiring/v1.0/subscriptions',
      dto,
    );
  });

  it('requests subscription list with required customerCode', async () => {
    http.get.mockResolvedValue({});

    await service.getSubscriptionList({ customerCode });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions?customerCode=${customerCode}`,
    );
  });

  it('appends optional filters to subscription list query', async () => {
    http.get.mockResolvedValue({});

    await service.getSubscriptionList({
      customerCode,
      page: 2,
      perPage: 10,
      recurring: true,
    });

    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions?customerCode=${customerCode}&page=2&perPage=10&recurring=true`,
    );
  });

  it('appends recurring=false when the flag is explicitly false', async () => {
    http.get.mockResolvedValue({});

    await service.getSubscriptionList({ customerCode, recurring: false });

    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions?customerCode=${customerCode}&recurring=false`,
    );
  });

  it('charges a subscription by operation id with an empty body', async () => {
    http.post.mockResolvedValue({});

    await service.chargeSubscription({ operationId });

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions/${operationId}/charge`,
      {},
    );
  });

  it('sets subscription status sending only Data in the body', async () => {
    const dto: SetSubscriptionStatusDto = {
      operationId,
      Data: { status: SubscriptionStatus.Cancelled },
    };
    http.post.mockResolvedValue({});

    await service.setSubscriptionStatus(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions/${operationId}/status`,
      { Data: dto.Data },
    );
  });

  it('requests subscription status by operation id', async () => {
    http.get.mockResolvedValue({});

    await service.getSubscriptionStatus({ operationId });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/acquiring/v1.0/subscriptions/${operationId}/status`,
    );
  });

  it('creates a subscription with receipt', async () => {
    const dto: CreateSubscriptionWithReceiptDto = {
      customerCode,
      amount: 1234,
      purpose: 'Подписка на услугу',
      Options: { period: FrequencyOfWriteOffs.Month },
      taxSystemCode: TaxSystemCode.ONS,
      Client: { email: 'ivanov@mail.com' },
      Items: [{ name: 'Услуга', amount: 1234, quantity: 1 }],
    };
    http.post.mockResolvedValue({});

    await service.createSubscriptionWithReceipt(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      '/acquiring/v1.0/subscriptions_with_receipt',
      dto,
    );
  });
});
