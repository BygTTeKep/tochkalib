import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { WebhookType } from '../enums/webhookType.enum.js';

export interface CreateWebhookBodyDto {
  /**
   * Список событий, на которое подписано приложение
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
export interface CreateWebhookPathParametersDto {
  /**
   * Уникальный идентификатор приложения
   * Пример: 4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI
   */
  client_id: string;
}
export interface CreateWebhookDto {
  PathParametrs: CreateWebhookPathParametersDto;
  Body: CreateWebhookBodyDto;
}

export interface CreateWebhookResponseDataDto {
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
export interface CreateWebhookResponseLinksDto extends BaseLinksResponse {}
export interface CreateWebhookResponseMetaDto extends BaseMetaResponse {}

export interface CreateWebhookResponseDto {
  Data: CreateWebhookResponseDataDto;
  Links: CreateWebhookResponseLinksDto;
  Meta: CreateWebhookResponseMetaDto;
}
