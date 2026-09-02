import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { WebhookType } from '../enums/webhookType.enum.js';

export interface SendWebhookPathParametersDto {
  /**
   * Уникальный идентификатор приложения
   * Пример: 4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI
   */
  client_id: string;
}
export interface SendWebhookBodyDto {
  /**
   * Тип вебхука
   * Возможные значения: [incomingPayment, outgoingPayment, incomingSbpPayment, acquiringInternetPayment, incomingSbpB2BPayment, customWebhook]
   */
  webhookType: WebhookType;
}
export interface SendWebhookDto {
  PathParameters: SendWebhookPathParametersDto;
  Body: SendWebhookBodyDto;
}
export interface SendWebhookResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface SendWebhookResponseLinksDto extends BaseLinksResponse {}
export interface SendWebhookResponseMetaDto extends BaseMetaResponse {}

export interface SendWebhookResponseDto {
  Data: SendWebhookResponseDataDto;
  Links: SendWebhookResponseLinksDto;
  Meta: SendWebhookResponseMetaDto;
}
