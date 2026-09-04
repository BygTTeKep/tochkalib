import { ImageDto, ImageParamsDto } from '../../qrCodes/index.js';

export interface RegisterCashboxQrcodeDataDto {
  /**
   * Идентификатор ТСП
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;

  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
   * Возможные значения: non-empty and <= 2083 characters
   */
  redirectUrl?: string;
  imageParams: ImageParamsDto;
}

export interface RegisterCashboxQrcodeDto {
  Data: RegisterCashboxQrcodeDataDto;
}

export interface RegisterCashboxQrcodeResponseDataDto {
  /**
   * Payload зарегистрированного QR-кода в СБП
   * Пример: https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2
   */
  payload: string;
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;
  image: ImageDto;
}
export interface RegisterCashboxQrcodeResponseLinksDto {}
export interface RegisterCashboxQrcodeResponseMetaDto {}

export interface RegisterCashboxQrcodeResponseDto {
  Data: RegisterCashboxQrcodeResponseDataDto;
  Links: RegisterCashboxQrcodeResponseLinksDto;
  Meta: RegisterCashboxQrcodeResponseMetaDto;
}
