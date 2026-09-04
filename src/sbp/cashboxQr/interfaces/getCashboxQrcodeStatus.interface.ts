import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrCodeStatus } from '../enums/qrCodeStatus.enum.js';

export interface GetCashboxQrcodeStatusDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}

export interface GetCashboxQrcodeStatusResponseDataDto {
  /**
   * Статус операции
   * Возможные значения: [INACTIVATED, WAITING_PAYMENT, IN_PROGRESS]
   */
  status: QrCodeStatus;
  /**
   * Идентификатор активных значений параметров QR-кода
   */
  paramsId: string;
}
export interface GetCashboxQrcodeStatusResponseLinksDto extends BaseLinksResponse {}
export interface GetCashboxQrcodeStatusResponseMetaDto extends BaseMetaResponse {}

export interface GetCashboxQrcodeStatusResponseDto {
  Data: GetCashboxQrcodeStatusResponseDataDto;
  Links: GetCashboxQrcodeStatusResponseLinksDto;
  Meta: GetCashboxQrcodeStatusResponseMetaDto;
}
