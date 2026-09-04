import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import type { GetPaymentsDto } from './interfaces/getPayments.interface.js';
import type { GetRefundDataDto } from './interfaces/getRefundData.interface.js';
import type { StartRefundDataDto } from './interfaces/startRefund.interface.js';
import { RefundsService } from './refunds.service.js';

describe('RefundsService', () => {
  let service: RefundsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const customerCode = '300000092';
  const qrcId = 'AS10007GLJ1216F4905A1MTT3CP7GK3N';
  const requestId = 'openapi-b96d770e-769f-49ce-9630-890e00d47720';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        RefundsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(RefundsService);
  });

  it('requests payments list with required customerCode', async () => {
    const dto: GetPaymentsDto = { customerCode };
    http.get.mockResolvedValue({});

    await service.getPayments(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/get-sbp-payments?customerCode=${customerCode}`,
    );
  });

  it('appends optional filters to payments list query', async () => {
    const dto: GetPaymentsDto = {
      customerCode,
      fromDate: '2020-12-20',
      page: 2,
      perPage: 10,
      qrcId,
      toDate: '2020-12-21',
    };
    http.get.mockResolvedValue({});

    await service.getPayments(dto);

    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/get-sbp-payments?customerCode=${customerCode}&fromDate=2020-12-20&page=2&perPage=10&qrcId=${qrcId}&toDate=2020-12-21`,
    );
  });

  it('starts a refund with the given payload', async () => {
    const dto: StartRefundDataDto = {
      bankCode: '044525104',
      accountCode: '40817810802000000008',
      amount: '10',
      qrcId,
    };
    http.post.mockResolvedValue({});

    await service.startRefund(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/sbp/v1.0/refund', dto);
  });

  it('requests refund data by request id', async () => {
    const dto: GetRefundDataDto = { request_id: requestId };
    http.get.mockResolvedValue({});

    await service.getRefundData(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/refund/${requestId}`);
  });
});
