import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { InvoiceDto } from './invoice.interface.js';
import { SecondSideDto } from './secondSide.interface.js';

export interface CreateInvoiceDataContentDto {
  Invoice: InvoiceDto;
}

export interface CreateInvoiceDataDto {
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
  Content: CreateInvoiceDataContentDto;
}

export interface CreateInvoiceDto {
  Data: any;
}

export interface CreateInvoiceResponseDataDto {
  /**
   * Уникальный идентификатор документа
   * Пример: 1cf95c4f-e794-4407-bac4-0829f19bd2be
   */
  documentId: string;
}
export interface CreateInvoiceResponseLinksDto extends BaseLinksResponse {}
export interface CreateInvoiceResponseMetaDto extends BaseMetaResponse {}

export interface CreateInvoiceResponseDto {
  Data: CreateInvoiceResponseDataDto;
  Links: CreateInvoiceResponseLinksDto;
  Meta: CreateInvoiceResponseMetaDto;
}
