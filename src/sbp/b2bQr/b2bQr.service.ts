import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  RegisterB2BQrCodeDto,
  RegisterB2BQrCodeResponseDto,
} from './interfaces/registerB2BQrCode.interface.js';
import {
  GetB2BQrCodeDto,
  GetB2BQrCodeResponseDto,
} from './interfaces/getB2BQrCode.interface.js';

@Injectable()
export class B2BQrCodeService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для регистрации B2B QR-кода в Системе быстрых платежей
   * Необходимые разрешения: EditSBPData
   * @param dto RegisterB2BQrCodeDto
   * @returns RegisterB2BQrCodeResponseDto
   */
  async registerB2BQrCode(dto: RegisterB2BQrCodeDto) {
    return this.tochkaHttpService.post<RegisterB2BQrCodeResponseDto>(
      `/sbp/v1.0/b2b-qr-code/merchant/${dto.PathParameters.merchantId}/${dto.PathParameters.accountId}`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для получения информации о B2B QR-коде
   * Необходимые разрешения: ReadSBPData
   * @param dto GetB2BQrCodeDto
   * @returns GetB2BQrCodeResponseDto
   */
  async getB2BQrCode(dto: GetB2BQrCodeDto) {
    let link = `/sbp/v1.0/b2b-qr-code/${dto.PathParameters.qrcId}`;
    if (dto?.QueryParameters) {
      const params = new URLSearchParams();
      if (dto?.QueryParameters?.height) {
        params.append('height', dto.QueryParameters.height);
      }
      if (dto?.QueryParameters?.width) {
        params.append('width', dto.QueryParameters.width);
      }
      if (params.toString().length > 0) {
        link += '?' + params.toString();
      }
    }
    return this.tochkaHttpService.get<GetB2BQrCodeResponseDto>(link);
  }
}
