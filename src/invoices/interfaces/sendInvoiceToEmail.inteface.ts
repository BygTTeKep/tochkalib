import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface SendInvoiceToEmailPathParametersDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * Уникальный идентификатор документа
   * Пример: 1cf95c4f-e794-4407-bac4-0829f19bd2be
   */
  documentId: string;
}

export interface SendInvoiceToEmailBodyDataDto {
  /**
   * Электронная почта, на которую нужно отправить
   */
  email: string;
}

export interface SendInvoiceToEmailBodyDto {
  Data: SendInvoiceToEmailBodyDataDto;
}

export interface SendInvoiceToEmailDto {
  PathParameters: SendInvoiceToEmailPathParametersDto;
  Body: SendInvoiceToEmailBodyDto;
}

export interface SendInvoiceToEmailResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface SendInvoiceToEmailResponseLinksDto extends BaseLinksResponse {}
export interface SendInvoiceToEmailResponseMetaDto extends BaseMetaResponse {}

export interface SendInvoiceToEmailResponseDto {
  Data: SendInvoiceToEmailResponseDataDto;
  Links: SendInvoiceToEmailResponseLinksDto;
  Meta: SendInvoiceToEmailResponseMetaDto;
}
