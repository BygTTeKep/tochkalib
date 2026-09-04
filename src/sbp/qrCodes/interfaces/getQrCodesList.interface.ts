import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrCodeListDto } from './qrCodeList.interface.js';

export interface GetQrCodesListDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}

export interface GetQrCodesListResponseDataDto {
  qrCodeList: QrCodeListDto[];
}
export interface GetQrCodesListResponseLinksDto extends BaseLinksResponse {}
export interface GetQrCodesListResponseMetaDto extends BaseMetaResponse {}

export interface GetQrCodesListResponseDto {
  Data: GetQrCodesListResponseDataDto;
  Links: GetQrCodesListResponseLinksDto;
  Meta: GetQrCodesListResponseMetaDto;
}
