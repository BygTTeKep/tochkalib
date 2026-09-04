import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { QrcType } from '../enums/qrcType.enum.js';
import { ImageDto } from './image.interface.js';
import { ImageParamsDto } from './imageParams.interface.js';

export interface RegisterQrCodePathParametersDto {
  /**
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Идентификатор ТСП
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;
}
export interface RegisterQrCodeBodyDataDto {
  /**
   * Сумма в копейках
   * Поле обязательно для заполнения, если тип QR = QR-Dynamic
   */
  amount?: number;
  /**
   * Валюта операции
   * Пример: RUB
   */
  currency?: string;
  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose: string;

  /**
   * Тип QR-кода
   * 01 - QR-Static (QR наклейка) 02 - QR-Dynamic (QR на кассе)
   * Возможные значения: [01, 02]
   * Пример: 01
   */
  qrcType: QrcType;

  imageParams: ImageParamsDto;

  /**
   * Название источника
   * Cистема, создавшая QR-код
   */
  sourceName?: string;
  /**
   * Период использования QR-кода в минутах
   * Задается, только если тип QR = QR-Dynamic
   */
  ttl?: number;
  /**
   * URL адрес
   * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
   * Возможные значения: non-empty and <= 2083 characters
   */
  redirectUrl?: string;
}

export interface RegisterQrCodeBodyDto {
  Data: RegisterQrCodeBodyDataDto;
}

export interface RegisterQrCodeDto {
  PathParameters: RegisterQrCodePathParametersDto;
  Body: RegisterQrCodeBodyDto;
}

export interface RegisterQrCodeResponseDataDto {
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
  image?: ImageDto;
}
export interface RegisterQrCodeResponseLinksDto extends BaseLinksResponse {}
export interface RegisterQrCodeResponseMetaDto extends BaseMetaResponse {}

export interface RegisterQrCodeResponseDto {
  Data: RegisterQrCodeResponseDataDto;
  Links: RegisterQrCodeResponseLinksDto;
  Meta: RegisterQrCodeResponseMetaDto;
}
