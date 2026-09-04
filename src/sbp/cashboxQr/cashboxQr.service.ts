import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  ActivateCashboxQrcodeDto,
  ActivateCashboxQrcodeResponseDto,
} from './interfaces/activateCashboxQrcode.interface.js';
import {
  ChangeCashboxQrcodeAccountDto,
  ChangeCashboxQrcodeAccountResponseDto,
} from './interfaces/changeCashboxQrcodeAccount.interface.js';
import {
  DeactivateCashboxQrcodeDto,
  DeactivateCashboxQrcodeResponseDto,
} from './interfaces/deactivateCashboxQrcode.interface.js';
import {
  GetCashboxQrcodeListDto,
  GetCashboxQrcodeListResponseDto,
} from './interfaces/getCachboxQrcodeList.interface.js';
import {
  GetCashboxQrcodeDto,
  GetCashboxQrcodeResponseDto,
} from './interfaces/getCashboxQrcode.interface.js';
import {
  GetCashboxQrcodeOperationInfoDto,
  GetCashboxQrcodeOperationInfoResponseDto,
} from './interfaces/getCashboxQrcodeOperationInfo.interface.js';
import {
  GetCashboxQrcodeStatusDto,
  GetCashboxQrcodeStatusResponseDto,
} from './interfaces/getCashboxQrcodeStatus.interface.js';
import {
  RegisterCashboxQrcodeDto,
  RegisterCashboxQrcodeResponseDto,
} from './interfaces/registerCashboxQr.interface.js';

@Injectable()
export class CashboxQrService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для регистрации кассового QR-кода
   * Необходимые разрешения: EditSBPData
   * @param dto RegisterCashboxQrcodeDto
   * @returns RegisterCashboxQrcodeResponseDto
   */
  async registerCashboxQrcode(dto: RegisterCashboxQrcodeDto) {
    return this.tochkaHttpService.post<RegisterCashboxQrcodeResponseDto>(
      `/sbp/v1.0/cashbox-qr-code`,
      dto,
    );
  }
  /**
   * Метод для получения списка кассовых QR-кодов
   * Необходимые разрешения: ReadSBPData
   * @param dto GetCashboxQrcodeListDto
   * @returns GetCashboxQrcodeListResponseDto
   */
  async getCashboxQrcodeList(dto: GetCashboxQrcodeListDto) {
    return this.tochkaHttpService.get<GetCashboxQrcodeListResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/merchant/${dto.merchantId}/${dto.accountId}`,
    );
  }
  /**
   * Метод для получения информации о кассовом QR-коде
   * Необходимые разрешения: ReadSBPData
   * @param dto GetCashboxQrcodeDto
   * @returns GetCashboxQrcodeResponseDto
   */
  async getCashboxQrcode(dto: GetCashboxQrcodeDto) {
    return this.tochkaHttpService.post<GetCashboxQrcodeResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.PathParameters.qrcId}`,
      { ...dto.Body },
    );
  }
  /**
   * Метод для смены счёта зачисления кассового QR-кода
   * Необходимые разрешения: EditSBPData
   * @param dto ChangeCashboxQrcodeAccountDto
   * @returns ChangeCashboxQrcodeAccountResponseDto
   */
  async changeCashboxQrcodeAccount(dto: ChangeCashboxQrcodeAccountDto) {
    return this.tochkaHttpService.post<ChangeCashboxQrcodeAccountResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.PathParameters.qrcId}/account`,
      { ...dto.Body },
    );
  }
  /**
   * Метод для активации кассового QR-кода
   * Необходимые разрешения: EditSBPData
   * @param dto ActivateCashboxQrcodeDto
   * @returns ActivateCashboxQrcodeResponseDto
   */
  async activateCashboxQrcode(dto: ActivateCashboxQrcodeDto) {
    return this.tochkaHttpService.post<ActivateCashboxQrcodeResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.PathParameters.qrcId}/activate`,
      { ...dto.Body },
    );
  }
  /**
   * Метод для деактивации кассового QR-кода
   * Необходимые разрешения: EditSBPData
   * @param dto DeactivateCashboxQrcodeDto
   * @returns DeactivateCashboxQrcodeResponseDto
   */
  async deactivateCashboxQrcode(dto: DeactivateCashboxQrcodeDto) {
    return this.tochkaHttpService.post<DeactivateCashboxQrcodeResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.qrcId}/deactivate`,
      {},
    );
  }
  /**
   * Метод для получения статуса кассового QR-кода.
   * Необходимые разрешения: ReadSBPData
   * @param dto GetCashboxQrcodeOperationInfoDto
   * @returns GetCashboxQrcodeOperationInfoResponseDto
   */
  async getCashboxQrcodeOperationInfo(dto: GetCashboxQrcodeOperationInfoDto) {
    return this.tochkaHttpService.get<GetCashboxQrcodeOperationInfoResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.PathParameters.qrcId}/operation?${dto.QueryParameters.paramsId}`,
    );
  }
  /**
   * Метод для получения статуса кассового QR-кода.
   * Необходимые разрешения: ReadSBPData
   * @param dto GetCashboxQrcodeStatusDto
   * @returns GetCashboxQrcodeStatusResponseDto
   */
  async getCashboxQrcodeStatus(dto: GetCashboxQrcodeStatusDto) {
    return this.tochkaHttpService.get<GetCashboxQrcodeStatusResponseDto>(
      `/sbp/v1.0/cashbox-qr-code/${dto.qrcId}/operation`,
    );
  }
}
