import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { InvoicePaymentStatus } from '../enums/invoicePaymentStatus.enum.js';

export interface GetInvoicePaymentStatusDto {
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

export interface GetInvoicePaymentStatusResponseDataDto {
  /**
   * Статус оплаты документа
   * Возможные значения: [payment_waiting, payment_expired, payment_paid]
   * Пример: payment_paid
   */
  paymentStatus: InvoicePaymentStatus;
}
export interface GetInvoicePaymentStatusResponseLinksDto extends BaseLinksResponse {}
export interface GetInvoicePaymentStatusResponseMetaDto extends BaseMetaResponse {}

export interface GetInvoicePaymentStatusResponseDto {
  Data: GetInvoicePaymentStatusResponseDataDto;
  Links: GetInvoicePaymentStatusResponseLinksDto;
  Meta: GetInvoicePaymentStatusResponseMetaDto;
}
