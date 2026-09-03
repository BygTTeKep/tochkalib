import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { StatementStatus } from '../enums/statementStatus.enum.js';
import { TransactionDto } from './transaction.interface.js';

export interface GetStatemetDto {
  /**
   * Идентификатор счета
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Идентификатор выписки
   * Пример: 123243234
   */
  statementId: string;
}
export interface GetStatemetResponseDataDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Идентификатор ресурса выписки
   * Возможные значения: <= 40 characters
   * Пример: 23489
   */
  statementId?: string;
  /**
   * Статус готовности выписки
   * Возможные значения: [Created, Processing, Error, Ready]
   * Пример: Ready
   */
  status: StatementStatus;
  /**
   * Дата начала выписки. Используется стандарт ISO8601
   * Пример: 2019-01-01
   */
  startDateTime: string;
  /**
   * Дата окончания выписки. Используется стандарт ISO8601
   * Пример: 2019-01-01
   */
  endDateTime: string;
  /**
   * Дата и время создания ресурса. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  creationDateTime: string;
  /**
   * Баланс на начало запрашиваемого периода выписки в валюте счета
   * Пример: 1234.5
   */
  startDateBalance?: string;
  /**
   * Баланс на конец запрашиваемого периода выписки в валюте счета
   * Пример: 1234.5
   */
  endDateBalance?: string;
  Transaction: TransactionDto[];
}
export interface GetStatemetResponseLinksDto extends BaseLinksResponse {}
export interface GetStatemetResponseMetaDto extends BaseMetaResponse {}

export interface GetStatemetResponseDto {
  Data: GetStatemetResponseDataDto;
  Links: GetStatemetResponseLinksDto;
  Meta: GetStatemetResponseMetaDto;
}
