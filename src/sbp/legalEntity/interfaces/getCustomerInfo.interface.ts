import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantStatus } from '../../merchants/enums/merchantStatus.enum.js';
import { MerchantDto } from '../../merchants/interfaces/marchant.interface.js';
import { AccountDto } from './account.interface.js';
import { DigitalRubleWalletDto } from './digitalRubleWallet.interface.js';

export interface GetCustomerInfoDto {
  /**
   * Уникальный код клиента
   * Возможные значения: 9 characters
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * БИК банка
   * Возможные значения: 9 characters
   * Пример: 044525104
   */
  bankCode: string;
}

export interface GetCustomerInfoResponseDataDto {
  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: MerchantStatus;

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
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * Организационно-правовая форма юридического лица
   * Пример: АО
   */
  entityType?: string;

  /**
   * ИНН
   * Пример: 7706812159
   */
  inn: string;

  /**
   * КПП
   * Пример: 770501001
   */
  kpp?: string;

  /**
   * Полное наименование юридического лица
   * Пример: АКЦИОНЕРНОЕ ОБЩЕСТВО "НАЦИОНАЛЬНАЯ СИСТЕМА ПЛАТЕЖНЫХ КАРТ"
   */
  name: string;

  /**
   * ОГРН
   * Пример: 1147746831352
   */
  ogrn: string;

  /**
   * БИК банка клиента
   * Пример: 041234678
   */
  bankCode: string;

  MerchantList?: MerchantDto[];
  AccountList?: AccountDto[];
  DigitalRubleWallet?: DigitalRubleWalletDto;
}
export interface GetCustomerInfoResponseLinksDto extends BaseLinksResponse {}
export interface GetCustomerInfoResponseMetaDto extends BaseMetaResponse {}

export interface GetCustomerInfoResponseDto {
  Data: GetCustomerInfoResponseDataDto;
  Links: GetCustomerInfoResponseLinksDto;
  Meta: GetCustomerInfoResponseMetaDto;
}
