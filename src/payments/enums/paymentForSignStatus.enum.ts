/**
 * Описание статусов платежа на подпись
 * WaitingForCreate - Платёж создан, ждёт подписания в интернет-банке
 * Created - Платёж создан
 * Paid - Платёж оплачен
 * Canceled - Платёж отменен
 * Rejected - Платёж отменён
 */
export enum PaymentForSignStatusEnum {
  WaitingForCreate = 'WaitingForCreate',
  Created = 'Created',
  Paid = 'Paid',
  Canceled = 'Canceled',
  Rejected = 'Rejected',
}
