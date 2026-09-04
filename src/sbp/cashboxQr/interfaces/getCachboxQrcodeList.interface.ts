import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrCodeDto } from './qrCode.interface.js';

export interface GetCashboxQrcodeListDto {
  /**
   * Идентификатор ТСП
   * Пример: MF0000000001
   */
  merchantId: string;

  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
}

export interface GetCashboxQrcodeListResponseDataDto {
  qrCodes: QrCodeDto[];
}
export interface GetCashboxQrcodeListResponseLinksDto extends BaseLinksResponse {}
export interface GetCashboxQrcodeListResponseMetaDto extends BaseMetaResponse {}

export interface GetCashboxQrcodeListResponseDto {
  Data: GetCashboxQrcodeListResponseDataDto;
  Links: GetCashboxQrcodeListResponseLinksDto;
  Meta: GetCashboxQrcodeListResponseMetaDto;
}
