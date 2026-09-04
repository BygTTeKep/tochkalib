import { CommissionDto } from './commission.interface.js';

export interface QrCodeDto {
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
   * Время регистрации
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  createdAt: string;

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
   * Валюта операции
   * Пример: RUB
   */
  currency?: string;
  /**
   * Назначение платежа
   * Возможные значения: <= 140 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose?: string;

  /**
   * Идентификатор активных значений параметров QR-кода
   * Пример: AS331309594501970709180285778247
   */
  paramsId?: string;

  /**
   * Период использования в минутах
   * Пример: 20
   */
  ttl?: number;
  commission?: CommissionDto;

  /**
   * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://example.com/success
   */
  redirectUrl?: string;
}
