export interface PaymentLinksOrderDto {
  /**
   * Идентификатор платежа
   */
  orderId: string;
  /**
   * Тип операции
   * Возможные значения: [refund, approval, authorized]
   */
  type: string;
  /**
   * Сумма операции
   */
  amount: number;
  /**
   * Время операции
   */
  time: string;
}
