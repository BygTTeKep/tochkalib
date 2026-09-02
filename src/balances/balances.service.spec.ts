import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { BalancesService } from './balances.service.js';

describe('BalancesService', () => {
  let service: BalancesService;
  const http = {
    get: vi.fn(),
  };
  const accountId = '40817810802000000008/044525104';

  beforeEach(async () => {
    http.get.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        BalancesService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(BalancesService);
  });

  it('requests authorized card transactions by account id', async () => {
    http.get.mockResolvedValue({});

    await service.getAuthorizedCardTransactions({ accountId });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/open-banking/v1.0/accounts/${accountId}/authorized-card-transactions`,
    );
  });

  it('requests balance info by account id', async () => {
    http.get.mockResolvedValue({});

    await service.getBalanceInfo({ accountId });

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/open-banking/v1.0/accounts/${accountId}/balances`,
    );
  });

  it('requests balances list', async () => {
    http.get.mockResolvedValue({});

    await service.getBalancesList();

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith('/open-banking/v1.0/balances');
  });
});
