import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { PaymentMode } from '../enums/paymentMode.enum.js';
import { TochkaPaymentStatus } from '../enums/paymentStatus.enum.js';

export interface CreatePaymentLinkDto {
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
   * Способ оплаты
   * Возможные значения: [sbp, card, tinkoff, dolyame], >= 1
   * Пример: ["sbp","card","tinkoff","dolyame"]
   */

  paymentMode: PaymentMode[];

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
   * Пример: true
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
}

export interface CreatePaymentLinkResponseDtoData {
  /**
   * Назначение платежа
   */

  purpose: string;
  /**
   * Статус операции
   * Возможные значения: [CREATED, APPROVED, ON-REFUND, REFUNDED, EXPIRED, REFUNDED_PARTIALLY, AUTHORIZED, WAIT_FULL_PAYMENT]
   * Значение по умолчанию: CREATED
   * Пример: CREATED
   */

  status: TochkaPaymentStatus;
  /**
   * Сумма платежа
   */

  amount: number;
  /**
   * Идентификатор операции
   */

  operationId: string;
  /**
   * Ссылка на платёжную страницу
   */

  paymentLink: string;
  /**
   * Идентификатор покупателя
   */

  consumerId: string;
  /**
   * Идентификатор торговой точки в интернет-эквайринге
   */

  merchantId: string;
  /**
   * Создать платёж с двухэтапной оплатой
   * Пример: true
   */

  preAuthorization: boolean;
  /**
   * Время жизни платёжной ссылки в минутах
   */

  ttl: number;

  /**
   * Уникальный номер заказа
   */

  paymentLinkId: string;
  /**
   * Способ оплаты
   */

  paymentMode: PaymentMode[];
}

export interface CreatePaymentLinkResponseDtoLinks extends BaseLinksResponse {}

export interface CreatePaymentLinkResponseDtoMeta extends BaseMetaResponse {}

export interface CreatePaymentLinkResponseDto {
  Data: CreatePaymentLinkResponseDtoData;
  Links: CreatePaymentLinkResponseDtoLinks;
  Meta: CreatePaymentLinkResponseDtoMeta;
}
