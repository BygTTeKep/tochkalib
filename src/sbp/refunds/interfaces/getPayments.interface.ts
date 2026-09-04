import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { PaymentDto } from './payment.interface.js';

export interface GetPaymentsDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * ID qr-кода для фильтрации
   */
  qrcId?: string;

  /**
   * Начало периода для запроса статусов платежей. При отсутствии параметра в запросе будет задано дефолтное значение
   * Значение по умолчанию: Вчера и сегодня
   * Пример: 2020-12-20
   */
  fromDate?: string;

  /**
   * Конец периода для запроса статусов платежей
   */
  toDate?: string;
  /**
   * Номер страницы
   * Значение по умолчанию: 1
   */
  page?: number;

  /**
   * Количество записей на странице
   * Значение по умолчанию: 1000
   */
  perPage?: number;
}

export interface GetPaymentsResponseDataDto {
  Payments: PaymentDto;
}
export interface GetPaymentsResponseLinksDto extends BaseLinksResponse {}
export interface GetPaymentsResponseMetaDto extends BaseMetaResponse {}

export interface GetPaymentsResponseDto {
  Data: GetPaymentsResponseDataDto;
  Links: GetPaymentsResponseLinksDto;
  Meta: GetPaymentsResponseMetaDto;
}
