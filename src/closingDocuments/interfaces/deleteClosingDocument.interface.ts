import { BaseLinksResponse } from '../../intefaces/baseTochkaResponse.interface.js';
import { BaseMetaResponse } from '../../intefaces/baseTochkaResponse.interface.js';

export interface DeleteClosingDocumentDto {
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

export interface DeleteClosingDocumentResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}

export interface DeleteClosingDocumentResponseLinksDto extends BaseLinksResponse {}
export interface DeleteClosingDocumentResponseMetaDto extends BaseMetaResponse {}

export interface DeleteClosingDocumentResponseDto {
  Data: DeleteClosingDocumentResponseDataDto;
  Links: DeleteClosingDocumentResponseLinksDto;
  Meta: DeleteClosingDocumentResponseMetaDto;
}
