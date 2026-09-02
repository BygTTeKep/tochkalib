import { AccountStatus } from '../enums/accountStatus.enum.js';
import { AccountSubType } from '../enums/accountSubType.enum.js';
import { AccountType } from '../enums/accountType.enum.js';

export interface AccountDetailsResponseDto {
  /**
   * Наименование схемы идентификации счёта
   * Пример: RU.CBR.AccountNumber
   */
  schemeName: string;
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  identification: string;
  /**
   * Название идентификатора счёта
   * Пример: Основной текущий счёт
   */
  name: string;
}

export interface AccountResponseDto {
  /**
   * Уникальный код клиента
   * Возможные значения: <= 9 characters
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * Уникальный и неизменный идентификатор счёта
   * Возможные значения: <= 40 characters
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Идентификатор транзитного счета
   */
  transitAccount: string;
  /**
   * Статус счёта в форме кода
   * Возможные значения: [Enabled, Disabled, Deleted, ProForma, Pending]
   * Пример: Enabled
   */
  status: AccountStatus;
  /**
   * Дата и время изменения статуса счёта. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  statusUpdateDateTime: string;
  /**
   * Валюта ведения счёта. Используется стандарт ISO 4217
   * Пример: RUB
   */
  currency: string;
  /**
   * Тип счёта (физическое или юридическое лицо)
   * Возможные значения: [Business, Personal]
   * Пример: Personal
   */
  accountType: AccountType;
  /**
   * Подтип счёта
   * Возможные значения: [CreditCard, CurrentAccount, Loan, Mortgage, PrePaidCard, Savings, Special]
   * Пример: CurrentAccount
   */
  accountSubType: AccountSubType;
  /**
   * Дата регистрации счета
   * Пример: 2020-10-20
   */
  registrationDate: string;
  accountDetails: AccountDetailsResponseDto[];
}
