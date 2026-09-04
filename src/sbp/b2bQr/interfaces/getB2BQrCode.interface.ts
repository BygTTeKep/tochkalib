import { ImageDto } from '../../qrCodes/index.js';
import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface GetB2BQrCodePathParametersDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;
}
export interface GetB2BQrCodeQueryParametersDto {
  /**
   * Ширина изображения (по умолчанию: 300)
   * Пример: 300
   */
  width?: string;
  /**
   * Высота изображения (по умолчанию: 300)
   * Пример: 300
   */
  height?: string;
}

export interface GetB2BQrCodeDto {
  PathParameters: GetB2BQrCodePathParametersDto;
  QueryParameters?: GetB2BQrCodeQueryParametersDto;
}

export interface GetB2BQrCodeResponseDataDto {
  /**
   * Payload зарегистрированного QR-кода в СБП
   * Пример: https://qr.nspk.ru/AS1000670LSS7DN18SJQDNP4B05KLJL2
   */
  payload: string;
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;

  /**
   * Время регистрации
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  createdAt: string;
  /**
   * Идентификатор ТСП
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;

  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;

  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;

  /**
   * Сумма в копейках
   * Пример: 0
   */
  amount?: number;

  /**
   * Период использования в минутах
   * Пример: 60
   */
  ttl?: string;

  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose?: string;

  image: ImageDto;

  /**
   * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
   * Пример: https://tsp.ru/path
   */
  redirectUrl?: string;

  /**
   * Taketax
   * Наличие НДС
   */
  takeTax: boolean;

  /**
   * Totaltaxamount
   * Сумма НДС в копейках
   */
  totalTaxAmount?: number;

  /**
   * Уникальный идентификатор платежа, назначаемый получателем
   */
  uip?: string;
}

export interface GetB2BQrCodeResponseLinksDto extends BaseLinksResponse {}
export interface GetB2BQrCodeResponseMetaDto extends BaseMetaResponse {}

export interface GetB2BQrCodeResponseDto {
  Data: GetB2BQrCodeResponseDataDto;
  Links: GetB2BQrCodeResponseLinksDto;
  Meta: GetB2BQrCodeResponseMetaDto;
}
