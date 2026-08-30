/**
 * Статус операции
 * CREATED - Операция создана
 * APPROVED - Операция одобрена (оплата прошла успешно)
 * ON-REFUND - Операция заблокирована на время выполнения возврата
 * REFUNDED - Осуществлен возврат
 * EXPIRED - Истек срок действия
 * REFUNDED_PARTIALLY - Осуществлен частично возврат
 * AUTHORIZED - Операция авторизована (оплата не прошла, но авторизация прошла)
 * WAIT_FULL_PAYMENT - Ожидает полной оплаты
 */
export enum TochkaPaymentStatus {
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
  ON_REFUND = 'ON-REFUND',
  REFUNDED = 'REFUNDED',
  EXPIRED = 'EXPIRED',
  REFUNDED_PARTIALLY = 'REFUNDED_PARTIALLY',
  AUTHORIZED = 'AUTHORIZED',
  WAIT_FULL_PAYMENT = 'WAIT_FULL_PAYMENT',
}
