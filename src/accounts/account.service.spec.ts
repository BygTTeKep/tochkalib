import { Test } from '@nestjs/testing';
import { AccountsService } from './accounts.service.js';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { GetAccountsListResponseDto } from './interfaces/getAccountsList.interface.js';
import {
  GetAccountInfoDto,
  GetAccountInfoResponseDto,
} from './interfaces/getAccountInfo.interface.js';
import { AccountSubType } from './enums/accountSubType.enum.js';
import { AccountType } from './enums/accountType.enum.js';
import { AccountStatus } from './enums/accountStatus.enum.js';

describe('AccountService', () => {
  let service: AccountsService;
  const http = {
    get: vi.fn(),
  };
  beforeEach(async () => {
    http.get.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        AccountsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();
    service = module.get(AccountsService);
  });

  it('request account list from Tochka and returns the payload', async () => {
    const response: GetAccountsListResponseDto = {
      Data: {
        Account: [],
      },
      Links: { self: 'https://enter.tochka.com/uapi' },
      Meta: { totalPages: 1 },
    };
    http.get.mockResolvedValue(response);

    await expect(service.getAccountsList()).resolves.toEqual(response);
    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith('/open-banking/v1.0/accounts');
  });

  it('request account info from Tochka and return the payload', async () => {
    const dto: GetAccountInfoDto = {
      accountId: '40817810802000000008/044525104',
    };
    const response: GetAccountInfoResponseDto = {
      Data: {
        customerCode: '300000092',
        accountId: '40817810802000000008/044525104',
        transitAccount: '123',
        status: AccountStatus.Deleted,
        statusUpdateDateTime: '2019-01-01T06:06:06.364+00:00',
        currency: 'RUB',
        accountType: AccountType.Business,
        accountSubType: AccountSubType.CreditCard,
        registrationDate: '2020-10-20',
        accountDetails: [
          {
            schemeName: 'RU.CBR.AccountNumber',
            identification: '40817810802000000008/044525104',
            name: 'Основной текущий счёт',
          },
        ],
      },
      Links: { self: 'https://enter.tochka.com/uapi' },
      Meta: { totalPages: 1 },
    };
    http.get.mockResolvedValue(response);

    await expect(service.getAccountInfo(dto)).resolves.toEqual(response);
  });
});
