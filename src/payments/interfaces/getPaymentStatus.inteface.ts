import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { PaymentForSignStatusEnum } from '../enums/paymentForSignStatus.enum.js';

export interface GetPaymentStatusDto {
  /**
   * Идентификатор запроса
   * Пример: openapi-b96d770e-769f-49ce-9630-890e00d47720
   */
  requestId: string;
}

export interface GetPaymentStatusDataResponseDto {
  /**
   * ID запроса
   * Пример: openapi-b96d770e-769f-49ce-9630-890e00d47720
   */
  requestId: string;

  /**
   * Статус
   * Описание статусов платежа на подпись
   * WaitingForCreate - Платёж создан, ждёт подписания в интернет-банке
   * Created - Платёж создан
   * Paid - Платёж оплачен
   * Canceled - Платёж отменен
   * Rejected - Платёж отменён
   * Возможные значения: [WaitingForCreate, Created, Paid, Canceled, Rejected]
   * Пример: WaitingForCreate
   */
  status: PaymentForSignStatusEnum;

  /**
   * Ошибки
   * Значение по умолчанию: []
   */
  errors: any[];
}

export interface GetPaymentStatusLinksResponseDto extends BaseLinksResponse {}
export interface GetPaymentStatusMetaResponseDto extends BaseMetaResponse {}

export interface GetPaymentStatusResponseDto {
  Data: GetPaymentStatusDataResponseDto;
  Links: GetPaymentStatusLinksResponseDto;
  Meta: GetPaymentStatusMetaResponseDto;
}
