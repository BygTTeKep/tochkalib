import { StatementStatus } from '../enums/statementStatus.enum.js';

export interface StatementDto {
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
}
