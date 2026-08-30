import { Test } from '@nestjs/testing';
import { ClientsService } from './clients.service.js';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import type { GetCustomerListResponseDto } from './interfaces/getCustomerList.interface.js';
import type { GetCustomerInfoResponseDto } from './interfaces/getCustomerInfo.interface.js';

describe('ClientsService', () => {
  let service: ClientsService;
  const http = {
    get: vi.fn(),
  };
  const customerCode = '300000092';

  beforeEach(async () => {
    http.get.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(ClientsService);
  });

  it('requests customer list from Tochka and returns the payload', async () => {
    const response: GetCustomerListResponseDto = {
      Data: {
        Customer: [
          {
            customerCode: customerCode,
            customerType: 'Business',
            isResident: true,
            taxCode: '7701234567',
            fullName: 'ООО Ромашка',
            shortName: 'Ромашка',
            kpp: '770101001',
            customerOgrn: '1027700132195',
          },
        ],
      },
      Links: { self: 'https://enter.tochka.com/uapi' },
      Meta: { totalPages: 1 },
    };

    http.get.mockResolvedValue(response);

    await expect(service.getCustomerList()).resolves.toEqual(response);
    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith('open-banking/v1.0/customers');
  });

  it('requests customer info by customer code from Tochka and returns the payload', async () => {
    const response: GetCustomerInfoResponseDto = {
      Data: {
        customerCode: customerCode,
        customerType: 'Business',
        isResident: true,
        taxCode: '7701234567',
        fullName: 'Индивидуальный Предприниматель Тест',
        shortName: 'ИП Тест',
        kpp: '668501001',
        customerOgrn: '319665800211661',
      },
      Links: { self: 'https://enter.tochka.com/uapi' },
      Meta: { totalPages: 1 },
    };
    http.get.mockResolvedValue(response);
    await expect(service.getCustomerInfo({ customerCode })).resolves.toEqual(
      response,
    );
    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `open-banking/v1.0/customers/${customerCode}`,
    );
  });
});
