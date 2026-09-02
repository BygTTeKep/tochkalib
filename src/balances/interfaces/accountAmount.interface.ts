export interface AccountAmountDto {
  /**
   * Amount
   * Сумма транзакции
   * Пример: 1234.56
   */
  amount: number;

  /**
   * Currency
   * Валюта транзакции, используется ISO 4217
   * Пример: RUB
   */
  currency: string;
}
