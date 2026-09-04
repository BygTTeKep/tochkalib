import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import { QrcType } from './enums/qrcType.enum.js';
import type { GetQrCodeDto } from './interfaces/getQrCode.interface.js';
import type { GetQrCodesListDto } from './interfaces/getQrCodesList.interface.js';
import type { GetQrCodesPaymentStatusDto } from './interfaces/getQrCodesPaymentStatus.interface.js';
import type { RegisterQrCodeDto } from './interfaces/registerQrCode.interface.js';
import { QrCodesService } from './qrCodes.service.js';

describe('QrCodesService', () => {
  let service: QrCodesService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const legalId = 'LF0000000001';
  const merchantId = 'MF0000000001';
  const accountId = '40817810802000000008/044525104';
  const qrcId = 'AS000000000000000000000000000001';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        QrCodesService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(QrCodesService);
  });

  it('requests QR codes list by legal id', async () => {
    const dto: GetQrCodesListDto = { legalId };
    http.get.mockResolvedValue({});

    await service.getQrCodesList(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/qr-code/legal-entity/${legalId}`,
    );
  });

  it('registers a QR code sending only Body', async () => {
    const dto: RegisterQrCodeDto = {
      PathParameters: { merchantId, accountId },
      Body: {
        Data: {
          paymentPurpose: 'Оплата по счету № 1 от 01.01.2021. Без НДС',
          qrcType: QrcType.QR_STATIC,
          imageParams: { width: 300, height: 300 },
        },
      },
    };
    http.post.mockResolvedValue({});

    await service.registerQrCode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/qr-code/merchant/${merchantId}/${accountId}`,
      { ...dto.Body },
    );
  });

  it('requests QR code info by qrc id', async () => {
    const dto: GetQrCodeDto = { qrcId };
    http.get.mockResolvedValue({});

    await service.getQrCode(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/qr-code/${qrcId}`);
  });

  it('requests payment statuses by comma-separated qrc ids', async () => {
    const dto: GetQrCodesPaymentStatusDto = {
      qrcIds:
        'AS10004QQGLUC0HR9MQRC3KBPO40772J,AD10000K4LALRP1E9SPB3H6PB55KBNL7',
    };
    http.get.mockResolvedValue({});

    await service.getQrCodesPaymentStatus(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/qr-codes/${dto.qrcIds}/payment-status`,
    );
  });
});
