import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface RegisterB2BQrCodePathParametersDto {
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

export interface RegisterB2BQrCodeBodyDto {
  /**
   * Сумма в копейках
   * Возможные значения: >= 1 and <= 100000000
   * Пример: 0
   */
  amount: number;
  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose: string;

  /**
   * Название источника (системы создавшей QR-код)
   * Система, создавшая QR-код
   * Возможные значения: <= 50 characters
   */
  sourceName: string;
  /**
   * Taketax
   * Наличие НДС
   */
  takeTax?: boolean;

  /**
   * Totaltaxamount
   * Сумма НДС в копейках
   */
  totalTaxAmount?: number;
  /**
   * Период использования в минутах
   * Возможные значения: >= 1 and <= 129600
   * Значение по умолчанию: 4320
   * Пример: 60
   */
  ttl?: number;

  /**
   * URL адрес
   * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
   * Возможные значения: non-empty and <= 2083 characters
   */
  redirectUrl?: string;

  /**
   * Уникальный идентификатор платежа, назначаемый получателем
   * Возможные значения: <= 35 characters
   */
  uip?: string;
}

export interface RegisterB2BQrCodeDto {
  PathParameters: RegisterB2BQrCodePathParametersDto;
  Body: RegisterB2BQrCodeBodyDto;
}

export interface RegisterB2BQrCodeResponseDataDto {
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
}
export interface RegisterB2BQrCodeResponseLinksDto extends BaseLinksResponse {}
export interface RegisterB2BQrCodeResponseMetaDto extends BaseMetaResponse {}

export interface RegisterB2BQrCodeResponseDto {
  Data: RegisterB2BQrCodeResponseDataDto;
  Links: RegisterB2BQrCodeResponseLinksDto;
  Meta: RegisterB2BQrCodeResponseMetaDto;
}
