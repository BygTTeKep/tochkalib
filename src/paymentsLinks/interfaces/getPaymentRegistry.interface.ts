import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { TochkaPaymentStatus } from '../enums/paymentStatus.enum.js';
import { PaymentType } from '../enums/paymentType.enum.js';

export interface GetPaymentRegistryDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * Идентификатор торговой точки в интернет-эквайринге
   * Пример: 200000000001056
   */
  merchantId: string;
  /**
   * Уникальный идентификатор платежа, по которому произошла транзакция
   * Пример: 6d369b30-4a40-4249-aabb-7fc6b561dc7b
   */
  paymentId?: string;
  /**
   * Дата реестра
   * Пример: 2020-01-20
   */
  date: string;
}

export interface GetPaymentRegistryPaymentResponseDto {
  /**
   * Назначение платежа
   * Пример: Футболка женская молочная
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
   * Дата и время создания операции. Используется стандарт ISO8601
   * Пример: 2022-10-18T08:28:59+00:00
   */
  time: string;
  /**
   * Номер платежа
   * Пример: 123456
   */
  number: string;
  /**
   * Комиссия за зачисление платежа
   * Пример: 18548.39
   */
  commission: number;
  /**
   * Сумма за вычетом комиссии
   * Пример: 18548.39
   */
  enrollmentAmount: number;
}

export interface GetPaymentRegistryDataResponseDto {
  /**
   * Тип оплаты
   * Возможные значения: [sbp, card, tinkoff, dolyame]
   * Пример: card
   */
  paymentType: PaymentType[];
  /**
   * Сумма всех позиций из этого блока
   * Пример: 18548.39
   */
  totalAmount: number;
  /**
   * Уникальный идентификатор платежа
   * Пример: A22031016256670100000533E625FCB3
   */
  paymentId?: string;
  payments: GetPaymentRegistryPaymentResponseDto[];
}

export interface GetPaymentRegistryLinksResponseDto extends BaseLinksResponse {}
export interface GetPaymentRegistryMetaResponseDto extends BaseMetaResponse {}

export interface GetPaymentRegistryResponseDto {
  Data: GetPaymentRegistryDataResponseDto;
  Links: GetPaymentRegistryLinksResponseDto;
  Meta: GetPaymentRegistryMetaResponseDto;
}
