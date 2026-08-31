import type { BaseMetaResponse } from '../../intefaces/baseTochkaResponse.interface.js';
import type { BaseLinksResponse } from '../../intefaces/baseTochkaResponse.interface.js';

export interface RefundPaymentDto {
  /**
   * Идентификатор платежа
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
}
export interface RefundPaymentDataResponseDto {
  /**
   * Оформлен ли возврат
   * Пример: true
   */
  isRefund: boolean;
  /**
   * Идентификатор платежа
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
  /**
   * Сумма платежа
   * Пример: 1234.00
   */
  amount: number;
  /**
   * Дата запроса на возврат
   * Пример: 2025-04-11
   */
  date: string;
  /**
   * Идентификатор операции возрата
   * Пример: 1
   */
  orderId: string;
}

export interface RefundPaymentLinksResponseDto extends BaseLinksResponse {}
export interface RefundPaymentMetaResponseDto extends BaseMetaResponse {}

export interface RefundPaymentResponseDto {
  Data: RefundPaymentDataResponseDto;
  Links: RefundPaymentLinksResponseDto;
  Meta: RefundPaymentMetaResponseDto;
}
