import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface ActivateCashboxQrcodePathParametersDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}

export interface ActivateCashboxQrcodeBodyDto {
  /**
   * Сумма в копейках.
   * Возможные значения:  undefined
   * Пример: 500000
   */
  amount: number;

  /**
   * Currency
   * Валюта операции
   * Значение по умолчанию: RUB
   */
  currency?: string;

  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose?: string;
  /**
   * Период использования QR-кода в минутах
   * Возможные значения: >= 5 and <= 20
   * Значение по умолчанию: 5
   * Пример: 7
   */
  ttl?: number;
}

export interface ActivateCashboxQrcodeDto {
  PathParameters: ActivateCashboxQrcodePathParametersDto;
  Body: ActivateCashboxQrcodeBodyDto;
}

export interface ActivateCashboxQrcodeResponseDataDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;

  /**
   * Сумма в копейках
   * Пример: 0
   */
  amount: number;

  /**
   * Валюта операции
   * Значение по умолчанию: RUB
   * Пример: RUB
   */
  currency?: string;

  /**
   * Идентификатор активных значений параметров QR-кода
   */
  paramsId: string;

  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose?: string;
}
export interface ActivateCashboxQrcodeResponseLinksDto extends BaseLinksResponse {}
export interface ActivateCashboxQrcodeResponseMetaDto extends BaseMetaResponse {}

export interface ActivateCashboxQrcodeResponseDto {
  Data: ActivateCashboxQrcodeResponseDataDto;
  Links: ActivateCashboxQrcodeResponseLinksDto;
  Meta: ActivateCashboxQrcodeResponseMetaDto;
}
