import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { SubscriptionStatus } from '../enums/subscriptionStatus.enum.js';

export interface GetSubscriptionStatusDto {
  /**
   * Идентификатор подписки
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
}

export interface GetSubscriptionStatusResponseDataDto {
  /**
   * AcquiringSubscriptionStatus
   * Возможные значения: [Active, Cancelled, Completed, Expired, Failed, PastDue, Preparing, Refused, Rejected, Suspended, Trial]
   */
  status: SubscriptionStatus;
}
export interface GetSubscriptionStatusResponseLinksDto extends BaseLinksResponse {}
export interface GetSubscriptionStatusResponseMetaDto extends BaseMetaResponse {}

export interface GetSubscriptionStatusResponseDto {
  Data: GetSubscriptionStatusResponseDataDto;
  Links: GetSubscriptionStatusResponseLinksDto;
  Meta: GetSubscriptionStatusResponseMetaDto;
}
