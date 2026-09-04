export interface PaymentListDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;

  /**
   * Код операции
   * Пример: RQ00000
   */
  code: string;
  /**
   * Статус операции, инициированной Dynamic QR-кодом
   * Описание возможных статусов платежа
   * NotStarted - операции по QR-коду не существует
   * Received - операция в обработке
   * InProgress - операция в обработке
   * Accepted - операция завершена успешно
   * Rejected - операция отклонена
   * Возможные значения: [NotStarted, Received, InProgress, Accepted, Rejected]
   * Пример: InProgress
   */
  status?: string;

  /**
   * Текстовое представление статуса
   * Пример: Запрос обработан успешно
   */
  message: string;

  /**
   * Идентификатор операции, инициированной Dynamic QR-кодом
   * Пример: X1A2S3D5F6G7H8J9K0C4S5C6D7V5D1K2
   */
  trxId?: string;
}
