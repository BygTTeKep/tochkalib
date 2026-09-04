import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { RefundStatus } from '../enums/refundStatus.enum.js';

export interface GetRefundDataDto {
  /**
   * ID запроса
   * Пример: Идентификатор запроса
   */
  request_id: string;
}

export interface GetRefundDataResponseDataDto {
  /**
   * ID запроса
   * Пример: openapi-b96d770e-769f-49ce-9630-890e00d47720
   */
  requestId: string;

  /**
   * Статус по процессу возрата
   * Возможные значения: [WaitingForClientConfirm, Initiated, WaitingForConfirm, Confirmed, WaitingForAccept, Accepted, Rejected]
   * Пример: Confirmed
   */
  status: RefundStatus;

  /**
   * Statusdescription
   * Описание статуса (причина ошибки или сообщение об успехе)
   */
  statusDescription?: string;
}
export interface GetRefundDataResponseLinksDto extends BaseLinksResponse {}
export interface GetRefundDataResponseMetaDto extends BaseMetaResponse {}

export interface GetRefundDataResponseDto {
  Data: GetRefundDataResponseDataDto;
  Links: GetRefundDataResponseLinksDto;
  Meta: GetRefundDataResponseMetaDto;
}
