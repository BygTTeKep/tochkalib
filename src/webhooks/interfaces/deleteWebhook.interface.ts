import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface DeleteWebhookPathParametersDto {
  /**
   * Уникальный идентификатор приложения
   * Пример: 4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI
   */
  client_id: string;
}

export interface DeleteWebhookDto {
  PathParameters: DeleteWebhookPathParametersDto;
}

export interface DeleteWebhookResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface DeleteWebhookResponseLinksDto extends BaseLinksResponse {}
export interface DeleteWebhookResponseMetaDto extends BaseMetaResponse {}

export interface DeleteWebhookResponseDto {
  Data: DeleteWebhookResponseDataDto;
  Links: DeleteWebhookResponseLinksDto;
  Meta: DeleteWebhookResponseMetaDto;
}
