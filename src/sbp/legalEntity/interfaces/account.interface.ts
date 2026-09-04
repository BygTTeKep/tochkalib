import { MerchantStatus } from '../../merchants/enums/merchantStatus.enum.js';

export interface AccountDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;

  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: MerchantStatus;

  /**
   * Время регистрации
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  createdAt: string;

  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}
