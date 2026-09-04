import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import { MerchantStatus } from '../merchants/enums/merchantStatus.enum.js';
import type { GetAccountsListDto } from './interfaces/getAccountList.interface.js';
import type { GetCustomerInfoDto } from './interfaces/getCustomerInfo.interface.js';
import type { GetLegalEntityDto } from './interfaces/getLegalEntity.interface.js';
import type { RegisterLegalEntityDto } from './interfaces/registerlegalEntity.interface.js';
import type { SetLegalEntityStatusDto } from './interfaces/setLegalEntityStatus.interface.js';
import { LegalEntityService } from './legalEntity.service.js';

describe('LegalEntityService', () => {
  let service: LegalEntityService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const legalId = 'LF0000000001';
  const customerCode = '300000092';
  const bankCode = '044525104';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        LegalEntityService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(LegalEntityService);
  });

  it('requests accounts list by legal id', async () => {
    const dto: GetAccountsListDto = { legalId };
    http.get.mockResolvedValue({});

    await service.getAccountsList(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/account/${legalId}`);
  });

  it('requests customer info by customer code and bank code', async () => {
    const dto: GetCustomerInfoDto = { customerCode, bankCode };
    http.get.mockResolvedValue({});

    await service.getCustomerInfo(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/customer/${customerCode}/${bankCode}`,
    );
  });

  it('requests legal entity by legal id', async () => {
    const dto: GetLegalEntityDto = { legalId };
    http.get.mockResolvedValue({});

    await service.getLegalEntity(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/legal-entity/${legalId}`);
  });

  it('sets legal entity status sending only Body', async () => {
    const dto: SetLegalEntityStatusDto = {
      PathParameters: { legalId },
      Body: { Data: { status: MerchantStatus.Active } },
    };
    http.post.mockResolvedValue({});

    await service.setLegalEntityStatus(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/legal-entity/${legalId}`,
      { ...dto.Body },
    );
  });

  it('registers a legal entity with the given payload', async () => {
    const dto: RegisterLegalEntityDto = {
      Data: { customerCode, bankCode },
    };
    http.post.mockResolvedValue({});

    await service.registerLegalEntity(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      '/sbp/v1.0/register-sbp-legal-entity',
      dto,
    );
  });
});
