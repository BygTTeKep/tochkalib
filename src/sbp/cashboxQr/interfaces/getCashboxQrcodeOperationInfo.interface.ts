import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrCodeStatus } from '../enums/qrCodeStatus.enum.js';
import { TrxStatus } from '../enums/trxStatus.enum.js';

export interface GetCashboxQrcodeOperationInfoPathParametersDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}
export interface GetCashboxQrcodeOperationInfoQueryParametersDto {
  /**
   * Идентификатор активных значений параметров QR-кода
   * Пример: AP10001G1HPSOI658DP9SJK41V7JEDRS
   */
  paramsId: string;
}

export interface GetCashboxQrcodeOperationInfoDto {
  PathParameters: GetCashboxQrcodeOperationInfoPathParametersDto;
  QueryParameters: GetCashboxQrcodeOperationInfoQueryParametersDto;
}

export interface GetCashboxQrcodeOperationInfoResponseDataDto {
  /**
   * Статус кассовой ссылки
   * Возможные значения: [DEACTIVATED, WAITING_PAYMENT, IN_PROGRESS]
   * Пример: WAITING_PAYMENT
   */
  qrCodeStatus: QrCodeStatus;

  /**
   * Статус операции по кассовой ссылке
   * ACWP - Операция завершена успешно
   * RJCT - Операция отклонена
   * RCVD - Операция в обработке
   * NTST - Операции по QR-коду не существует
   * Возможные значения: [ACWP, RJCT, RCVD, NTST]
   * Пример: ACWP
   */
  trxStatus: TrxStatus;

  /**
   * Идентификатор операции
   * Пример: A1A2S3D5F6G7H8J9K0C4S5C6D7V5D1K2
   */
  trxId?: string;

  /**
   * Сумма Операции в копейках
   * Целое, положительное число. Валюта операции – рубли РФ
   * Пример: 100000
   */
  amount?: number;

  /**
   * Дата и время выполнения операции
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  dateTime?: string;

  /**
   * Маскированный номер телефона клиента-плательщика
   * Пример: *********6731
   */
  payerId?: string;

  /**
   * Контрольное значение операции СБП
   * Пример: FDOS4JUETLYT639ADAFZ4GAUY9VSM2TG2Y595LQ20EKQF3JM1CIV4ZTZYA1EYIMFMEJSRB2UR7KATMA29Q
   */
  kzo?: string;
}
export interface GetCashboxQrcodeOperationInfoResponseLinksDto extends BaseLinksResponse {}
export interface GetCashboxQrcodeOperationInfoResponseMetaDto extends BaseMetaResponse {}

export interface GetCashboxQrcodeOperationInfoResponseDto {
  Data: GetCashboxQrcodeOperationInfoResponseDataDto;
  Links: GetCashboxQrcodeOperationInfoResponseLinksDto;
  Meta: GetCashboxQrcodeOperationInfoResponseMetaDto;
}
