import { BalanceType } from '../enums/balanceType.enum.js';
import { AmountDto } from './amount.interface.js';

export interface BalanceDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;

  /**
   * Определяет является баланс кредитовым или дебетовым
   * Возможные значения: [Credit, Debit]
   * Пример: Credit
   */
  creditDebitIndicator: 'Credit' | 'Debit';

  /**
   * Тип баланса, заполняется согласно ISO 20022
   * Описание типов балансов
   * OpeningAvailable - Начальный остаток
   * ClosingAvailable - Доступный баланс
   * Expected - Сумма заблокированных средств
   * OverdraftAvailable - Доступный лимит по овердрафту
   * Возможные значения: [OpeningAvailable, ClosingAvailable, Expected, OverdraftAvailable]
   * Пример: OpeningAvailable
   */
  type: BalanceType;

  /**
   * Дата и время построения отчета. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  dateTime: string;
  Amount: AmountDto;
}
