import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import { B2BQrCodeService } from './b2bQr.service.js';
import type { GetB2BQrCodeDto } from './interfaces/getB2BQrCode.interface.js';
import type { RegisterB2BQrCodeDto } from './interfaces/registerB2BQrCode.interface.js';

describe('B2BQrCodeService', () => {
  let service: B2BQrCodeService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const merchantId = 'MF0000000001';
  const accountId = '40817810802000000008/044525104';
  const qrcId = 'AS000000000000000000000000000001';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        B2BQrCodeService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(B2BQrCodeService);
  });

  it('registers a B2B QR code sending only Body', async () => {
    const dto: RegisterB2BQrCodeDto = {
      PathParameters: { merchantId, accountId },
      Body: {
        amount: 1000,
        paymentPurpose: 'Оплата по счету № 1 от 01.01.2021. Без НДС',
        sourceName: 'tochkalib',
      },
    };
    http.post.mockResolvedValue({});

    await service.registerB2BQrCode(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/sbp/v1.0/b2b-qr-code/merchant/${merchantId}/${accountId}`,
      { ...dto.Body },
    );
  });

  it('requests B2B QR code info by qrc id', async () => {
    const dto: GetB2BQrCodeDto = { PathParameters: { qrcId } };
    http.get.mockResolvedValue({});

    await service.getB2BQrCode(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/b2b-qr-code/${qrcId}`);
  });

  it('appends height and width query parameters', async () => {
    const dto: GetB2BQrCodeDto = {
      PathParameters: { qrcId },
      QueryParameters: { height: '300', width: '400' },
    };
    http.get.mockResolvedValue({});

    await service.getB2BQrCode(dto);

    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/b2b-qr-code/${qrcId}?height=300&width=400`,
    );
  });

  it('appends a single image size query parameter', async () => {
    const dto: GetB2BQrCodeDto = {
      PathParameters: { qrcId },
      QueryParameters: { width: '400' },
    };
    http.get.mockResolvedValue({});

    await service.getB2BQrCode(dto);

    expect(http.get).toHaveBeenCalledWith(
      `/sbp/v1.0/b2b-qr-code/${qrcId}?width=400`,
    );
  });

  it('does not append a query string when image size params are empty', async () => {
    const dto: GetB2BQrCodeDto = {
      PathParameters: { qrcId },
      QueryParameters: {},
    };
    http.get.mockResolvedValue({});

    await service.getB2BQrCode(dto);

    expect(http.get).toHaveBeenCalledWith(`/sbp/v1.0/b2b-qr-code/${qrcId}`);
  });
});
