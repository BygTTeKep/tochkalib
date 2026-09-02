import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { AccountAmountDto } from './accountAmount.interface.js';
import { AmountDto } from './amount.interface.js';
import { TerminalDataDto } from './terminalData.interface.js';

export interface GetAuthorizedCardTransactionsDto {
  /**
   * Идентификатор счета
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
}

export interface GetAuthorizedCardTransactionsResponseDataTransactionsDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;

  /**
   * Pan
   * Маскированный номер карты транзакции
   */
  pan: string;

  /**
   * Дата и время транзакции. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  dateTime: string;

  /**
   * Оригинальная сумма и валюта
   */
  Amount: AmountDto;
  /**
   * Сумма и валюта в валюте счета
   */
  AccountAmount: AccountAmountDto;
  TerminalData: TerminalDataDto;
}

export interface GetAuthorizedCardTransactionsResponseDataDto {
  Transactions: any;
}

export interface GetAuthorizedCardTransactionsResponseLinksDto extends BaseLinksResponse {}
export interface GetAuthorizedCardTransactionsResponseMetaDto extends BaseMetaResponse {}

export interface GetAuthorizedCardTransactionsResponseDto {
  Data: GetAuthorizedCardTransactionsResponseDataDto;
  Links: GetAuthorizedCardTransactionsResponseLinksDto;
  Meta: GetAuthorizedCardTransactionsResponseMetaDto;
}
