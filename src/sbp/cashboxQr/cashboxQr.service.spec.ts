import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import { CashboxQrService } from './cashboxQr.service.js';
import type { ActivateCashboxQrcodeDto } from './interfaces/activateCashboxQrcode.interface.js';
import type { ChangeCashboxQrcodeAccountDto } from './interfaces/changeCashboxQrcodeAccount.interface.js';
import type { DeactivateCashboxQrcodeDto } from './interfaces/deactivateCashboxQrcode.interface.js';
import type { GetCashboxQrcodeListDto } from './interfaces/getCachboxQrcodeList.interface.js';
import type { GetCashboxQrcodeDto } from './interfaces/getCashboxQrcode.interface.js';
import type { GetCashboxQrcodeOperationInfoDto } from './interfaces/getCashboxQrcodeOperationInfo.interface.js';
import type { GetCashboxQrcodeStatusDto } from './interfaces/getCashboxQrcodeStatus.interface.js';
import type { RegisterCashboxQrcodeDto } from './interfaces/registerCashboxQr.interface.js';

describe('CashboxQrService', () => {
  let service: CashboxQrService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const merchantId = 'MF0000000001';
  const accountId = '40817810802000000008/044525104';
  const qrcId = 'AS10007GLJ1216F4905A1MTT3CP7GK3N';
  const paramsId = 'AP10001G1HPSOI658DP9SJK41V7JEDRS';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        CashboxQrService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(CashboxQrService);
  });

  it('registers a cashbox QR code with the given payload', async () => {
    const dto: RegisterCashboxQrcodeDto = {
      Data: {
        merchantId,
        accountId,
        imageParams: { width: 300, height: 300 },
      },
    };
    http.post.mockResolvedValue({});

    await service.registerCashboxQrcode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/sbp/v1.0/cashbox-qr-code', dto);
  });

  it('requests cashbox QR codes list by merchant and account', async () => {
    const dto: GetCashboxQrcodeListDto = { merchantId, accountId };
    http.get.mockResolvedValue({});

    await service.getCashboxQrcodeList(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/merchant/${merchantId}/${accountId}`,
    );
  });

  it('requests cashbox QR code info sending only Body', async () => {
    const dto: GetCashboxQrcodeDto = {
      PathParameters: { qrcId },
      Body: { Data: { width: 300, height: 300 } },
    };
    http.post.mockResolvedValue({});

    await service.getCashboxQrcode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}`,
      { ...dto.Body },
    );
  });

  it('changes cashbox QR code account sending only Body', async () => {
    const dto: ChangeCashboxQrcodeAccountDto = {
      PathParameters: { qrcId },
      Body: { Data: { accountId } },
    };
    http.post.mockResolvedValue({});

    await service.changeCashboxQrcodeAccount(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}/account`,
      { ...dto.Body },
    );
  });

  it('activates a cashbox QR code sending only Body', async () => {
    const dto: ActivateCashboxQrcodeDto = {
      PathParameters: { qrcId },
      Body: { amount: 500000, currency: 'RUB' },
    };
    http.post.mockResolvedValue({});

    await service.activateCashboxQrcode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}/activate`,
      { ...dto.Body },
    );
  });

  it('deactivates a cashbox QR code by qrc id', async () => {
    const dto: DeactivateCashboxQrcodeDto = { qrcId };
    http.post.mockResolvedValue({});

    await service.deactivateCashboxQrcode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}/deactivate`,
      {},
    );
  });

  it('requests cashbox QR code operation info by qrc id and params id', async () => {
    const dto: GetCashboxQrcodeOperationInfoDto = {
      PathParameters: { qrcId },
      QueryParameters: { paramsId },
    };
    http.get.mockResolvedValue({});

    await service.getCashboxQrcodeOperationInfo(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}/operation?${paramsId}`,
    );
  });

  it('requests cashbox QR code status by qrc id', async () => {
    const dto: GetCashboxQrcodeStatusDto = { qrcId };
    http.get.mockResolvedValue({});

    await service.getCashboxQrcodeStatus(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/cashbox-qr-code/${qrcId}/operation`,
    );
  });
});
