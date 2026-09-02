import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { SubscriptionStatus } from '../enums/subscriptionStatus.enum.js';

export interface SetSubscriptionStatusDataDto {
  /**
   * Статус подписки
   * Возможные значения: [Cancelled]
   */
  status: SubscriptionStatus;
}

export interface SetSubscriptionStatusDto {
  /**
   * Идентификатор подписки
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
  Data: SetSubscriptionStatusDataDto;
}
export interface SetSubscriptionStatusResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface SetSubscriptionStatusResponseLinksDto extends BaseLinksResponse {}
export interface SetSubscriptionStatusResponseMetaDto extends BaseMetaResponse {}

export interface SetSubscriptionStatusResponseDto {
  Data: SetSubscriptionStatusResponseDataDto;
  Links: SetSubscriptionStatusResponseLinksDto;
  Meta: SetSubscriptionStatusResponseMetaDto;
}
