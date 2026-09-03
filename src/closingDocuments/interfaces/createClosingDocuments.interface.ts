import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { SecondSideDto } from '../../invoices/index.js';
import {
  ContentActDto,
  ContentInvoicef,
  ContentPackingListDto,
  ContentUpd,
} from './content.interface.js';

export interface CreateClosingDocumentDataDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
  SecondSide: SecondSideDto;
  /**
   * ID родительского документа
   * Пример: 1cf95c4f-e794-4407-bac4-0829f19bd2be
   */
  documentId?: string;
  Content: ContentActDto | ContentPackingListDto | ContentInvoicef | ContentUpd;
}

export interface CreateClosingDocumentDto {
  Data: CreateClosingDocumentDataDto;
}

export interface CreateClosingDocumentResponseDataDto {
  /**
   * Уникальный идентификатор документа
   * Пример: 1cf95c4f-e794-4407-bac4-0829f19bd2be
   */
  documentId: string;
}
export interface CreateClosingDocumentResponseLinksDto extends BaseLinksResponse {}
export interface CreateClosingDocumentResponseMetaDto extends BaseMetaResponse {}

export interface CreateClosingDocumentResponseDto {
  Data: CreateClosingDocumentResponseDataDto;
  Links: CreateClosingDocumentResponseLinksDto;
  Meta: CreateClosingDocumentResponseMetaDto;
}
