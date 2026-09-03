import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { ConsentsService } from './consents.service.js';
import { ConsentPermissions } from './enums/consentPermissions.enum.js';
import { ConsentStatus } from './enums/consentStatus.enum.js';
import type { CreateNewConsentsDto } from './interfaces/createNewConsents.interface.js';
import type { GetAllChildConsentsDto } from './interfaces/getAllChildConsents.interface.js';
import type { GetAllConsentsListDto } from './interfaces/getAllConsentsList.interface.js';
import type { GetConsentsInfoDto } from './interfaces/getConsentsInfo.interface.js';

describe('ConsentsService', () => {
  let service: ConsentsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const customerCode = '300000092';
  const consentId = 'tochka-intent-88379';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        ConsentsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(ConsentsService);
  });

  it('requests consents list with customer-code header', async () => {
    const dto: GetAllConsentsListDto = { 'customer-code': customerCode };
    http.get.mockResolvedValue({});

    await service.getAllConsentsList(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith('/consent/v1.0/consents', {
      'customer-code': customerCode,
    });
  });

  it('creates a consent sending Data and optional Risks', async () => {
    const dto: CreateNewConsentsDto = {
      Data: {
        status: ConsentStatus.AwaitingAuthorisation,
        permissions: [ConsentPermissions.ReadAccountsBasic],
        expirationDateTime: '2019-01-01T06:06:06.364+00:00',
      },
      Risks: {},
    };
    http.post.mockResolvedValue({});

    await service.createNewConsents(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/consent/v1.0/consents', {
      ...dto,
    });
  });

  it('requests consent info by consent id and customer-code header', async () => {
    const dto: GetConsentsInfoDto = {
      PathParameters: { consentId },
      HeaderParameters: { 'customer-code': customerCode },
    };
    http.get.mockResolvedValue({});

    await service.getConsentsInfo(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/consent/v1.0/consents/${consentId}`,
      dto.HeaderParameters,
    );
  });

  it('requests consent info without optional header parameters', async () => {
    const dto: GetConsentsInfoDto = {
      PathParameters: { consentId },
    };
    http.get.mockResolvedValue({});

    await service.getConsentsInfo(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/consent/v1.0/consents/${consentId}`,
      undefined,
    );
  });

  it('requests child consents by consent id', async () => {
    const dto: GetAllChildConsentsDto = { consentId };
    http.get.mockResolvedValue({});

    await service.getAllChildConsents(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/consent/v1.0/consents/${consentId}/child`,
    );
  });
});
