import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { PaymentMode } from '../enums/paymentMode.enum.js';
import { TochkaPaymentStatus } from '../enums/paymentStatus.enum.js';
import { TaxSystemCode } from '../enums/taxSystemCode.enum.js';
import { PaymentLinksClientDto } from './paymentLinksClient.interface.js';
import { PaymentLinksItemsDto } from './paymentLinksItems.interface.js';
import { PaymentLinksSupplierDto } from './paymentLinksSupplier.interface.js';

export interface CreatePaymentOperationWithReceiptDataDto {
  /**
   * Уникальный код клиента
   * Возможные значения: 9 characters
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * Сумма платежа
   * Возможные значения: > 0
   * Пример: 1234.00
   */
  amount: number;
  /**
   * Назначение платежа
   * Возможные значения: non-empty and <= 140 characters
   * Пример: Перевод за оказанные услуги
   */
  purpose: string;

  /**
   * URL адрес, куда будет переправлен клиент после оплаты услуги
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://example.com
   */
  redirectUrl?: string;

  /**
   * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://example.com/fail
   */
  failRedirectUrl?: string;

  /**
   * Способ оплаты
   * Возможные значения: [sbp, card, tinkoff, dolyame], >= 1
   * Пример: ["sbp","card","tinkoff","dolyame"]
   */
  paymentMode: PaymentMode[];

  /**
   * Предложить покупателю сохранить карту
   * Пример: true
   */
  saveCard?: boolean;

  /**
   * Идентификатор покупателя
   * Пример: fedac807-078d-45ac-a43b-5c01c57edbf8
   */
  consumerId?: string;

  /**
   * Идентификатор торговой точки в интернет-эквайринге
   * Возможные значения: 15 characters
   * Пример: 200000000001056
   */
  merchantId?: string;

  /**
   * Создать платёж с двухэтапной оплатой
   */
  preAuthorization?: boolean;

  /**
   * Время жизни платёжной ссылки в минутах
   * Возможные значения: >= 1 and <= 44640
   * Значение по умолчанию: 10080
   */
  ttl?: number;

  /**
   * Уникальный номер заказа
   * Возможные значения: non-empty and <= 45 characters
   */
  paymentLinkId?: string;

  /**
   * Система налогообложения
   * Возможные значения: [osn, usn_income, usn_income_outcome, esn, patent]
   * Пример: osn
   */
  taxSystemCode?: string;

  Client: PaymentLinksClientDto;
  Items: PaymentLinksItemsDto[];
  Supplier?: PaymentLinksSupplierDto;
}
export interface CreatePaymentOperationWithReceiptDto {
  Data: CreatePaymentOperationWithReceiptDataDto;
}

export interface CreatePaymentOperationWithReceiptDataResponseDto {
  /**
   * Назначение платежа
   * Возможные значения: non-empty and <= 140 characters
   * Пример: Перевод за оказанные услуги
   */
  purpose: string;

  /**
   * Статус платежа
   * Возможные значения: [CREATED, APPROVED, ON-REFUND, REFUNDED, EXPIRED, REFUNDED_PARTIALLY, AUTHORIZED, WAIT_FULL_PAYMENT]
   * Пример: CREATED
   */
  status?: TochkaPaymentStatus;

  /**
   * Сумма платежа
   * Возможные значения: > 0
   * Пример: 1234.00
   */
  amount: number;

  /**
   * Идентификатор платежа
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;

  /**
   * Ссылка на оплату
   * Пример: https://merch.example.com/order/?uuid=16ea4c54-bf1d-4e6a-a1ef-53ad55666e43
   */
  paymentLink: string;

  /**
   * Идентификатор покупателя
   * Пример: fedac807-078d-45ac-a43b-5c01c57edbf8
   */
  consumerId?: string;

  /**
   * Идентификатор торговой точки в интернет-эквайринге
   * Возможные значения: 15 characters
   * Пример: 200000000001056
   */
  merchantId?: string;

  /**
   * Создать платёж с двухэтапной оплатой
   */
  preAuthorization?: boolean;

  /**
   * Время жизни платёжной ссылки в минутах
   * Возможные значения: >= 1 and <= 44640
   * Значение по умолчанию: 10080
   */
  ttl?: number;

  /**
   * Уникальный номер заказа
   * Возможные значения: non-empty and <= 45 characters
   */
  paymentLinkId?: string;

  /**
   * Способ оплаты
   * Возможные значения: [sbp, card, tinkoff, dolyame], >= 1
   * Пример: ["sbp","card","tinkoff","dolyame"]
   */
  paymentMode: PaymentMode[];

  /**
   * Уникальный код клиента
   * Возможные значения: 9 characters
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * URL адрес, куда будет переправлен клиент после оплаты услуги
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://example.com
   */
  redirectUrl?: string;

  /**
   * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://example.com/fail
   */
  failRedirectUrl?: string;
  /**
   * Система налогообложения
   * Возможные значения: [osn, usn_income, usn_income_outcome, esn, patent]
   * Пример: osn
   */
  taxSystemCode?: TaxSystemCode;

  Client: PaymentLinksClientDto;
  Items: PaymentLinksItemsDto[];
  Supplier?: PaymentLinksSupplierDto;
}

export interface CreatePaymentOperationWithReceiptLinksResponseDto extends BaseLinksResponse {}
export interface CreatePaymentOperationWithReceiptMetaResponseDto extends BaseMetaResponse {}

export interface CreatePaymentOperationWithReceiptResponseDto {
  Data: CreatePaymentOperationWithReceiptDataResponseDto;
  Links: CreatePaymentOperationWithReceiptLinksResponseDto;
  Meta: CreatePaymentOperationWithReceiptMetaResponseDto;
}
