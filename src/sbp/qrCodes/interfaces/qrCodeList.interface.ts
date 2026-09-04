import { QrCodeStatus } from '../enums/qrCodeStatus.enum.js';
import { QrcType } from '../enums/qrcType.enum.js';
import { ImageDto } from './image.interface.js';

export interface QrCodeListDto {
  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: QrCodeStatus;

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
   * Размер комиссии в процентах
   * Пример: 0
   */
  commissionPercent: number;
  /**
   * Валюта операции
   * Пример: RUB
   */
  currency?: string;

  /**
   * Тип QR-кода
   * 01 - QR-Static (QR наклейка) 02 - QR-Dynamic (QR на кассе)
   * Возможные значения: [01, 02]
   * Пример: 01
   */
  qrcType: QrcType;

  /**
   * Версия payload QR-кода
   * Пример: 01
   */
  templateVersion: string;

  /**
   * название источника (системы создавшей QR-код)
   * Пример: tochka.com
   */
  sourceName?: string;
}
