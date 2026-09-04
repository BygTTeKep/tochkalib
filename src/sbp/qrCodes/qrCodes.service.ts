import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  GetQrCodesListDto,
  GetQrCodesListResponseDto,
} from './interfaces/getQrCodesList.interface.js';
import {
  RegisterQrCodeDto,
  RegisterQrCodeResponseDto,
} from './interfaces/registerQrCode.interface.js';
import {
  GetQrCodeDto,
  GetQrCodeResponseDto,
} from './interfaces/getQrCode.interface.js';
import {
  GetQrCodesPaymentStatusDto,
  GetQrCodesPaymentStatusResponseDto,
} from './interfaces/getQrCodesPaymentStatus.interface.js';

@Injectable()
export class QrCodesService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка QR-кодов
   * Необходимые разрешения: ReadSBPData
   * @param dto GetQrCodesListDto
   * @returns GetQrCodesListResponseDto
   */
  async getQrCodesList(dto: GetQrCodesListDto) {
    return this.tochkaHttpService.get<GetQrCodesListResponseDto>(
      `/sbp/v1.0/qr-code/legal-entity/${dto.legalId}`,
    );
  }

  /**
   * Метод для регистрации статического или динамического QR-кода в Системе быстрых платежей
   * Необходимые разрешения: EditSBPData
   * @param dto RegisterQrCodeDto
   * @returns RegisterQrCodeResponseDto
   */
  async registerQrCode(dto: RegisterQrCodeDto) {
    return this.tochkaHttpService.post<RegisterQrCodeResponseDto>(
      `/sbp/v1.0/qr-code/merchant/${dto.PathParameters.merchantId}/${dto.PathParameters.accountId}`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для получения информации о QR-коде
   * Необходимые разрешения: ReadSBPData
   * @param dto
   * @returns
   */
  async getQrCode(dto: GetQrCodeDto) {
    return this.tochkaHttpService.get<GetQrCodeResponseDto>(
      `/sbp/v1.0/qr-code/${dto.qrcId}`,
    );
  }

  /**
   * Метод для получения статусов операций по динамическим QR-кодам
   * Необходимые разрешения: ReadSBPData
   * @param dto GetQrCodesPaymentStatusDto
   * @returns GetQrCodesPaymentStatusResponseDto
   */
  async getQrCodesPaymentStatus(dto: GetQrCodesPaymentStatusDto) {
    return this.tochkaHttpService.get<GetQrCodesPaymentStatusResponseDto>(
      `/sbp/v1.0/qr-codes/${dto.qrcIds}/payment-status`,
    );
  }
}
