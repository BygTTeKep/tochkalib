import { MerchantCapabilities } from '../enums/merchantCapabilities.enum.js';
import { MerchantStatus } from '../enums/merchantStatus.enum.js';

export interface MerchantDto {
  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: MerchantStatus;

  /**
   * Время регистрации
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  createdAt: string;

  /**
   * Юридический адрес
   * Пример: УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
   */
  address?: string;

  /**
   * Город
   * Пример: Москва
   */
  city?: string;

  /**
   * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
   * Пример: RU
   */
  countryCode: string;

  /**
   * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
   * Пример: 45
   */
  countrySubDivisionCode?: string;
  /**
   * Индекс
   * Пример: 115184
   */
  zipCode?: string;

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
   * Название ТСП (имя по вывеске)
   * Пример: Кофейня у Артема
   */
  brandName: string;

  /**
   * Возможности ТСП по взаимодействию с покупателем
   * 001 - только QR Static 010 - только QR Dynamic 011 - QR Static и QR Dynamic 100 - Только QR Subscription 101 - QR Subscription и QR Static 110 - QR Subscription и QR Dynamic 111 - QR Static, QR Dynamic и QR Subscription
   * Возможные значения: [001, 010, 011, 100, 101, 110, 111]
   * Пример: 001
   */
  capabilities: MerchantCapabilities;

  /**
   * Контактный номер телефона ТСП
   * Пример: 79991234567
   */
  contactPhoneNumber?: string;

  /**
   * MCC код
   * Пример: 4121
   */
  mcc: string;

  /**
   * Дополнительные контакты
   */
  additionalContacts?: any[];
}
