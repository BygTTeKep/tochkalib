import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { WebhookType } from '../enums/webhookType.enum.js';

export interface EditWebhookPathParametersDto {
  /**
   * Уникальный идентификатор приложения
   * Пример: 4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI
   */
  client_id: string;
}
export interface EditWebhookBodyDto {
  /**
   * Новый список событий, на которые нужно подписаться
   * Возможные значения: [incomingPayment, outgoingPayment, incomingSbpPayment, acquiringInternetPayment, incomingSbpB2BPayment, customWebhook]
   * Пример: ["incomingPayment"]
   */
  webhooksList: WebhookType[];
  /**
   * url на который необходимо отправлять запрос
   * Возможные значения: non-empty and <= 2083 characters
   */
  url: string;
}
export interface EditWebhookDto {
  PathParameters: EditWebhookPathParametersDto;
  Body: EditWebhookBodyDto;
}
export interface EditWebhookResponseDataDto {
  /**
   * Список событий, на которое подписано приложение
   * Возможные значения: [incomingPayment, outgoingPayment, incomingSbpPayment, acquiringInternetPayment, incomingSbpB2BPayment, customWebhook]
   * Пример: ["incomingPayment"]
   */
  webhooksList: string[];
  /**
   * url на который необходимо отправлять запрос
   * Возможные значения: non-empty and <= 2083 characters
   */
  url: string;
}
export interface EditWebhookResponseLinksDto extends BaseLinksResponse {}
export interface EditWebhookResponseMetaDto extends BaseMetaResponse {}

export interface EditWebhookResponseDto {
  Data: EditWebhookResponseDataDto;
  Links: EditWebhookResponseLinksDto;
  Meta: EditWebhookResponseMetaDto;
}
