import { OperationStatusQrDynamic } from '../enums/operationStatusQrDynamic.enum.js';

export interface PaymentDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;
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
   * Возможные значения: [Confirming, Confirmed, Initiated, Accepting, Accepted, InProgress, Rejected, Error, Timeout]
   * Пример: InProgress
   */
  status: OperationStatusQrDynamic;

  /**
   * Текстовое представление статуса
   * Пример: Запрос обработан успешно
   */
  message: string;

  /**
   * Идентификатор операции, инициированной Dynamic QR-кодом
   * Пример: 56746525-2768-5023-97aa-21a09c49d4d0
   */
  refTransactionId: string;
}
