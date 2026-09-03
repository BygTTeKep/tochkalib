import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface DeleteInvoiceDto {
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

export interface DeleteInvoiceResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface DeleteInvoiceResponseLinksDto extends BaseLinksResponse {}
export interface DeleteInvoiceResponseMetaDto extends BaseMetaResponse {}

export interface DeleteInvoiceResponseDto {
  Data: DeleteInvoiceResponseDataDto;
  Links: DeleteInvoiceResponseLinksDto;
  Meta: DeleteInvoiceResponseMetaDto;
}
