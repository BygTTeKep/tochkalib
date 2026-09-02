/**
 * Тип баланса, заполняется согласно ISO 20022
 * Описание типов балансов
 * OpeningAvailable - Начальный остаток
 * ClosingAvailable - Доступный баланс
 * Expected - Сумма заблокированных средств
 * OverdraftAvailable - Доступный лимит по овердрафту
 */
export enum BalanceType {
  OpeningAvailable = 'OpeningAvailable',
  ClosingAvailable = 'ClosingAvailable',
  Expected = 'Expected',
  OverdraftAvailable = 'OverdraftAvailable',
}
