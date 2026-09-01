import { OperationType } from '../enums/operationType.enum.js';

export interface PaymentLinksOrderDto {
  /**
   * Идентификатор платежа
   */
  orderId: string;
  /**
   * Тип операции
   * Возможные значения: [refund, approval, authorized]
   */
  type: OperationType;
  /**
   * Сумма операции
   */
  amount: number;
  /**
   * Время операции
   */
  time: string;
}
