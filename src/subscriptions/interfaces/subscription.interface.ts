import { ClientDto } from '../../intefaces/Client.interface.js';
import { CorfTokenDto } from '../../intefaces/CofToken.interface.js';
import { ItemsDto } from '../../intefaces/Items.interface.js';
import {
  TaxSystemCode,
  TochkaPaymentStatus,
} from '../../paymentsLinks/index.js';
import { SubscriptionsOptionsDto } from './subscriptionsOptions.interface.js';

export interface SubscriptionDto {
  /**
   * Уникальный код клиента
   * Возможные значения: 9 characters
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * Система налогообложения
   * Перечисление для выдачи результатов из openapi.
   * Возможные значения: [osn, usn_income, usn_income_outcome, esn, patent, envd]
   * Пример: osn
   */
  taxSystemCode?: TaxSystemCode;

  /**
   * Идентификатор платежа в процессинге или СБП
   * Пример: A22031016256670100000533E625FCB3
   */
  paymentId?: string;

  /**
   * Идентификатор транзакции в СБП
   * Используется для возврата при оплате по СБП
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  transactionId?: string;

  /**
   * Дата и время создания операции. Используется стандарт ISO8601
   * Пример: 2022-10-18T08:28:59+00:00
   */
  createdAt: string;
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
  Client?: ClientDto;
  Items: ItemsDto[];

  /**
   * Назначение платежа
   * Отсутствует, если при создании платежа назначение не было указано
   * Пример: Перевод за оказанные услуги
   */
  purpose?: string;

  /**
   * Сумма платежа
   * Пример: 1234.00
   */
  amount: number;

  /**
   * Статус платежа
   * Возможные значения: [CREATED, APPROVED, ON-REFUND, REFUNDED, EXPIRED, REFUNDED_PARTIALLY, AUTHORIZED, WAIT_FULL_PAYMENT]
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
   * Идентификатор торговой точки в интернет-эквайринге
   * Пример: 200000000001056
   */
  merchantId?: string;

  /**
   * Идентификатор покупателя
   * Пример: fedac807-078d-45ac-a43b-5c01c57edbf8
   */
  consumerId?: string;
  Options?: SubscriptionsOptionsDto;

  /**
   * Создание рекуррентной оплаты
   */
  recurring?: boolean;

  /**
   * Уникальный номер заказа
   * Возможные значения: non-empty and <= 45 characters
   */
  paymentLinkId?: string;
  CorfToken?: CorfTokenDto;
}
