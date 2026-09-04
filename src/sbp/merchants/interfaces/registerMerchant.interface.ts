import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantCapabilities } from '../enums/merchantCapabilities.enum.js';
import { MerchantScenario } from '../enums/merchantScenario.enum.js';
import { SalesMode } from '../enums/salesMode.enum.js';

export interface RegisterMerchantPathParametersDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}
export interface RegisterMerchantBodyDataDto {
  /**
   * Юридический адрес
   * Возможные значения: <= 140 characters
   * Пример: УЛИЦА ТАТАРСКАЯ Б. ДОМ 11
   */
  address: string;

  /**
   * Город
   * Возможные значения: <= 140 characters
   * Пример: Москва
   */
  city: string;

  /**
   * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
   * Возможные значения: <= 2 characters
   * Пример: RU
   */
  countryCode: string;

  /**
   * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
   * Возможные значения: <= 2 characters
   * Пример: 45
   */
  countrySubDivisionCode: string;
  /**
   * Индекс
   * Возможные значения: <= 6 characters
   * Пример: 115184
   */
  zipCode: string;

  /**
   * Название ТСП (имя по вывеске)
   * Возможные значения: <= 35 characters
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
   * Возможные значения: <= 13 characters
   * Пример: 79991234567
   */
  contactPhoneNumber?: string;

  /**
   * MCC код
   * Возможные значения: <= 4 characters
   * Пример: 4121
   */
  mcc: string;

  /**
   * Сценарий использования ТСП
   * Возможные значения: [C2B, B2B]
   * Значение по умолчанию: C2B
   * Пример: C2B
   */
  scenario?: MerchantScenario;
  /**
   * Способ торговли ТСП
   * Возможные значения: [REMOTE, FACE_TO_FACE]
   * Значение по умолчанию: REMOTE
   * Пример: REMOTE
   */
  salesMode?: SalesMode;
}

export interface RegisterMerchantBodyDto {
  Data: RegisterMerchantBodyDataDto;
}

export interface RegisterMerchantDto {
  PathParameters: RegisterMerchantPathParametersDto;
  Body: RegisterMerchantBodyDto;
}

export interface RegisterMerchantResponseDataDto {
  /**
   * Идентификатор ТСП
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;
}
export interface RegisterMerchantResponseLinksDto extends BaseLinksResponse {}
export interface RegisterMerchantResponseMetaDto extends BaseMetaResponse {}

export interface RegisterMerchantResponseDto {
  Data: RegisterMerchantResponseDataDto;
  Links: RegisterMerchantResponseLinksDto;
  Meta: RegisterMerchantResponseMetaDto;
}
