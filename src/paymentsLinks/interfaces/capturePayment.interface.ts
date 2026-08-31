import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface CapturePaymentDto {
  /**
   * Идентификатор подписки
   * Пример: 48232c9a-ce82-1593-3cb6-5c85a1ffef8f
   */
  operationId: string;
}

export interface CapturePaymentDataResponseDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}

export interface CapturePaymentLinksResponseDto extends BaseLinksResponse {}
export interface CapturePaymentMetaResponseDto extends BaseMetaResponse {}

export interface CapturePaymentResponseDto {
  Data: CapturePaymentDataResponseDto;
  Links: CapturePaymentLinksResponseDto;
  Meta: CapturePaymentMetaResponseDto;
}
