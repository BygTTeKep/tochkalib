import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import { MerchantCapabilities } from './enums/merchantCapabilities.enum.js';
import { MerchantScenario } from './enums/merchantScenario.enum.js';
import { MerchantStatus } from './enums/merchantStatus.enum.js';
import { SalesMode } from './enums/salesMode.enum.js';
import type { GetMerchantDto } from './interfaces/getMarchant.interface.js';
import type { GetMerchantsListDto } from './interfaces/getMerchantList.interface.js';
import type { RegisterMerchantDto } from './interfaces/registerMerchant.interface.js';
import type { SetMerchantStatusDto } from './interfaces/setMerchantStatus.interface.js';
import { MerchantsService } from './merchants.service.js';

describe('MerchantsService', () => {
  let service: MerchantsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
  };
  const legalId = 'LF0000000001';
  const merchantId = 'MF0000000001';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();
    http.put.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        MerchantsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(MerchantsService);
  });

  it('registers a merchant sending only Body', async () => {
    const dto: RegisterMerchantDto = {
      PathParameters: { legalId },
      Body: {
        Data: {
          address: 'УЛИЦА ТАТАРСКАЯ Б. ДОМ 11',
          city: 'Москва',
          countryCode: 'RU',
          countrySubDivisionCode: '45',
          zipCode: '115184',
          brandName: 'Кофейня у Артема',
          capabilities: MerchantCapabilities.QR_STATIC,
          mcc: '4121',
          scenario: MerchantScenario.C2B,
          salesMode: SalesMode.REMOTE,
        },
      },
    };
    http.post.mockResolvedValue({});

    await service.registerMerchant(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/merchant/legal-entity/${legalId}`,
      { ...dto.Body },
    );
  });

  it('requests merchants list by legal id', async () => {
    const dto: GetMerchantsListDto = { legalId };
    http.get.mockResolvedValue({});

    await service.getMerchantsList(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/merchant/legal-entity/${legalId}`,
    );
  });

  it('sets merchant status sending only Body', async () => {
    const dto: SetMerchantStatusDto = {
      PathParameters: { merchantId },
      Body: { Data: { status: MerchantStatus.Suspended } },
    };
    http.put.mockResolvedValue({});

    await service.setMerchantStatus(dto);

    expect(http.put).toHaveBeenCalledOnce();
    expect(http.put).toHaveBeenCalledWith(`/sbp/v1.0/merchant/${merchantId}`, {
      ...dto.Body,
    });
  });

  it('requests merchant info by merchant id', async () => {
    const dto: GetMerchantDto = { merchantId };
    http.get.mockResolvedValue({});

    await service.getMerchant(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/merchant/${merchantId}`);
  });
});
