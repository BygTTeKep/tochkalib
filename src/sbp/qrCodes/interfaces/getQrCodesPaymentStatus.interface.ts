import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { PaymentListDto } from './paymentList.interface.js';

export interface GetQrCodesPaymentStatusDto {
  /**
   * Список qr-кодов для запроса статусов, разделенных через запятую
   * Пример: AS10004QQGLUC0HR9MQRC3KBPO40772J,AD10000K4LALRP1E9SPB3H6PB55KBNL7
   */
  qrcIds: string;
}

export interface GetQrCodesPaymentStatusResponseDataDto {
  paymentList: PaymentListDto[];
}
export interface GetQrCodesPaymentStatusResponseLinksDto extends BaseLinksResponse {}
export interface GetQrCodesPaymentStatusResponseMetaDto extends BaseMetaResponse {}

export interface GetQrCodesPaymentStatusResponseDto {
  Data: GetQrCodesPaymentStatusResponseDataDto;
  Links: GetQrCodesPaymentStatusResponseLinksDto;
  Meta: GetQrCodesPaymentStatusResponseMetaDto;
}
