import { TaxSystemCode } from '../../enums/taxSystemCode.enum.js';
import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { ClientDto } from '../../intefaces/Client.interface.js';
import { ItemsDto } from '../../intefaces/Items.interface.js';
import { SupplierDto } from '../../intefaces/Supplier.interface.js';
import { TochkaPaymentStatus } from '../../paymentsLinks/index.js';
import { SubscriptionsOptionsDto } from './subscriptionsOptions.interface.js';

export interface CreateSubscriptionWithReceiptDto {
  /**
   * Уникальный код клиента
   * Возможные значения: 9 characters
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * Сумма платежа, которая будет списываться в указанный клиентом период
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
   * Пример: 200000000001056
   */
  merchantId?: string;
  /**
   * Создание рекуррентной оплаты
   */
  recurring?: boolean;
  Options: SubscriptionsOptionsDto;

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
  taxSystemCode: TaxSystemCode;
  Client: ClientDto;
  Items: ItemsDto[];
  Supplier?: SupplierDto;
}

export interface CreateSubscriptionWithReceiptResponseDataDto {
  /**
   * Назначение платежа
   * Возможные значения: non-empty and <= 140 characters
   * Пример: Перевод за оказанные услуги
   */
  purpose: string;

  /**
   * Сумма платежа, которая будет списываться в указанный клиентом период
   * Пример: 1234.00
   */
  amount: number;

  /**
   * Статус платежа
   * Возможные значения: [CREATED]
   * Значение по умолчанию: CREATED
   * Пример: CREATED
   */
  status: TochkaPaymentStatus;

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
   * Рекуррентная подписка
   */
  recurring?: boolean;
  Options: SubscriptionsOptionsDto;

  /**
   * Уникальный номер заказа
   * Возможные значения: non-empty and <= 45 characters
   */
  paymentLinkId?: string;

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
   * Идентификатор торговой точки в интернет-эквайринге
   * Пример: 200000000001056
   */
  merchantId?: string;

  /**
   * Система налогообложения
   * Возможные значения: [osn, usn_income, usn_income_outcome, esn, patent]
   * Пример: osn
   */
  taxSystemCode?: TaxSystemCode;
  Client: ClientDto;
  Items: ItemsDto[];
  Supplier?: SupplierDto;
}
export interface CreateSubscriptionWithReceiptResponseLinksDto extends BaseLinksResponse {}
export interface CreateSubscriptionWithReceiptResponseMetaDto extends BaseMetaResponse {}

export interface CreateSubscriptionWithReceiptResponseDto {
  Data: CreateSubscriptionWithReceiptResponseDataDto;
  Links: CreateSubscriptionWithReceiptResponseLinksDto;
  Meta: CreateSubscriptionWithReceiptResponseMetaDto;
}
