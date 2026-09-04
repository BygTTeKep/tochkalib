import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { RefundStatus } from '../enums/refundStatus.enum.js';

export interface StartRefundDataDto {
  /**
   * Bankcode
   * БИК отправителя
   * Возможные значения: <= 9 characters
   * Пример: 044525104
   */
  bankCode: string;
  /**
   * Accountcode
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 20 characters
   * Пример: 40817810802000000008
   */
  accountCode: string;

  /**
   * Amount
   * Cумма операции в рублях
   * Пример: 10
   */
  amount: string;

  /**
   * Currency
   * Валюта операции
   * Значение по умолчанию: RUB
   */
  currency?: string;

  /**
   * Qrcid
   * ID qr-кода, по которому был сделан платеж
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;

  /**
   * Purpose
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  purpose?: string;

  /**
   * Reftransactionid
   * Идентификатор транзакции, по которой осуществляется возврат
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  refTransactionId?: string;
  /**
   * Trxid
   * Идентификатор операции в НСПК, по которой можно осуществить возврат
   * Пример: A1A2S3D5F6G7H8J9K0C4S5C6D7V5D1K2
   */
  trxId?: string;
}

export interface StartRefundDto {
  Data: StartRefundDataDto;
}

export interface StartRefundResponseDataDto {
  /**
   * ID запроса
   * Пример: openapi-b96d770e-769f-49ce-9630-890e00d47720
   */
  requestId: string;

  /**
   * Статус по процессу возрата
   * Возможные значения: [WaitingForClientConfirm, Initiated, WaitingForConfirm, Confirmed, WaitingForAccept, Accepted, Rejected]
   * Пример: Confirmed
   */
  status: RefundStatus;
}
export interface StartRefundResponseLinksDto extends BaseLinksResponse {}
export interface StartRefundResponseMetaDto extends BaseMetaResponse {}

export interface StartRefundResponseDto {
  Data: StartRefundResponseDataDto;
  Links: StartRefundResponseLinksDto;
  Meta: StartRefundResponseMetaDto;
}
