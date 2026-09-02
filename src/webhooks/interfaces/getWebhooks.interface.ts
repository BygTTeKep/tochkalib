import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface GetWebhooksPathParametersDto {
  /**
   * Уникальный идентификатор приложения
   * Пример: 4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI
   */
  client_id: string;
}
export interface GetWebhooksDto {
  PathParameters: GetWebhooksPathParametersDto;
}

export interface GetWebhooksResponseDataDto {
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
export interface GetWebhooksResponseLinksDto extends BaseLinksResponse {}
export interface GetWebhooksResponseMetaDto extends BaseMetaResponse {}

export interface GetWebhooksResponseDto {
  Data: GetWebhooksResponseDataDto;
  Links: GetWebhooksResponseLinksDto;
  Meta: GetWebhooksResponseMetaDto;
}
