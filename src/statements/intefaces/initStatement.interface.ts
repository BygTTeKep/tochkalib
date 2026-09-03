import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { StatementDto } from './statement.interface.js';

export interface InitStatementDataStatementDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
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
}
export interface InitStatementDataDto {
  Statement: InitStatementDataStatementDto;
}

export interface InitStatementDto {
  Data: InitStatementDataDto;
}

export interface InitStatementResponseDataDto {
  Statement: StatementDto;
}
export interface InitStatementResponseLinksDto extends BaseLinksResponse {}
export interface InitStatementResponseMetaDto extends BaseMetaResponse {}

export interface InitStatementResponseDto {
  Data: InitStatementResponseDataDto;
  Links: InitStatementResponseLinksDto;
  Meta: InitStatementResponseMetaDto;
}
