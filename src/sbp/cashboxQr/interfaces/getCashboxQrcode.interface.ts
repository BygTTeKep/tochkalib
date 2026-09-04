import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { ImageDto, ImageParamsDto } from '../../qrCodes/index.js';
import { QrCodeDto } from './qrCode.interface.js';

export interface GetCashboxQrcodePathParametersDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}

export interface GetCashboxQrcodeBodyDataDto extends ImageParamsDto {}

export interface GetCashboxQrcodeBodyDto {
  Data: GetCashboxQrcodeBodyDataDto;
}

export interface GetCashboxQrcodeDto {
  PathParameters: GetCashboxQrcodePathParametersDto;
  Body: GetCashboxQrcodeBodyDto;
}

export interface GetCashboxQrcodeResponseDataDto extends QrCodeDto {
  image: ImageDto;
}
export interface GetCashboxQrcodeResponseLinksDto extends BaseLinksResponse {}
export interface GetCashboxQrcodeResponseMetaDto extends BaseMetaResponse {}

export interface GetCashboxQrcodeResponseDto {
  Data: GetCashboxQrcodeResponseDataDto;
  Links: GetCashboxQrcodeResponseLinksDto;
  Meta: GetCashboxQrcodeResponseMetaDto;
}
