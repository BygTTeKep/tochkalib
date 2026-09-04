/**
 * Статус операции, инициированной Dynamic QR-кодом
 * Описание возможных статусов платежа
 * Confirming - операция в процессе подтверждения ОПКЦ СБП
 * Confirmed - операция подтверждена
 * Initiated - операция отправлена на обработку
 * Accepting - операция в обработке ОПКЦ СБП
 * Accepted - операция успешно завершена
 * InProgress - операция в обработке РЦ СБП
 * Rejected - операция отклонена
 * Error - ошибка выполнения операции
 * Timeout - тайм-аут выполнения операции
 */
export enum OperationStatusQrDynamic {
  Confirming = 'Confirming',
  Confirmed = 'Confirmed',
  Initiated = 'Initiated',
  Accepting = 'Accepting',
  Accepted = 'Accepted',
  InProgress = 'InProgress',
  Rejected = 'Rejected',
  Error = 'Error',
  Timeout = 'Timeout',
}
