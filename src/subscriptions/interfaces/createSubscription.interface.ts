import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import type { SubscriptionsOptionsDto } from './subscriptionsOptions.interface.js';

export interface CreateSubscriptionDataDto {
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
}

export interface CreateSubscriptionDto {
  Data: CreateSubscriptionDataDto;
}

export interface CreateSubscriptionResponseDataDto {}
export interface CreateSubscriptionResponseLinksDto extends BaseLinksResponse {}
export interface CreateSubscriptionResponseMetaDto extends BaseMetaResponse {}

export interface CreateSubscriptionResponseDto {
  Data: CreateSubscriptionResponseDataDto;
  Links: CreateSubscriptionResponseLinksDto;
  Meta: CreateSubscriptionResponseMetaDto;
}
