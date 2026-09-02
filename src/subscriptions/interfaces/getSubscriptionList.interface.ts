import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import type { SubscriptionDto } from './subscription.interface.js';

export interface GetSubscriptionListDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;

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
  /**
   * Получить платежи по рекуррентным подпискам
   * Значение по умолчанию: false
   */
  recurring?: boolean;
}

export interface GetSubscriptionListResponseDataDto {
  Subscription: SubscriptionDto[];
}
export interface GetSubscriptionListResponseLinksDto extends BaseLinksResponse {
  /**
   * First
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  first?: string;
  /**
   * Prev
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  prev?: string;
  /**
   * Next
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  next?: string;
  /**
   * Last
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  last?: string;
}
export interface GetSubscriptionListResponseMetaDto extends BaseMetaResponse {}

export interface GetSubscriptionListResponseDto {
  Data: GetSubscriptionListResponseDataDto;
  Links: GetSubscriptionListResponseLinksDto;
  Meta: GetSubscriptionListResponseMetaDto;
}
