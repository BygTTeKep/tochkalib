export interface ChargeSubscriptionDto {
  /**
   * Идентификатор подписки
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
}

export interface ChargeSubscriptionResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}

export interface ChargeSubscriptionResponseDto {
  Data: ChargeSubscriptionResponseDataDto;
}
