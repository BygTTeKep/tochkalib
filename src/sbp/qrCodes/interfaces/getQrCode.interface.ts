import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrCodeListDto } from './qrCodeList.interface.js';

export interface GetQrCodeDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;
}

export interface GetQrCodeResponseDataDto {
  Data: QrCodeListDto;
}
export interface GetQrCodeResponseLinksDto extends BaseLinksResponse {}
export interface GetQrCodeResponseMetaDto extends BaseMetaResponse {}

export interface GetQrCodeResponseDto {
  Data: GetQrCodeResponseDataDto;
  Links: GetQrCodeResponseLinksDto;
  Meta: GetQrCodeResponseMetaDto;
}
