import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface GetPaymentForSignListDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
}

export interface GetPaymentForSignListDataPaymentResponseDto {
  /**
   * Номер счёта отправителя
   * Возможные значения: 20 characters
   * Пример: 40702810840020002503
   */
  accountCode?: string;

  /**
   * БИК отправителя
   * Возможные значения: 9 characters
   * Пример: 044525104
   */
  bankCode?: string;

  /**
   * БИК получателя
   * Возможные значения: 9 characters
   * Пример: 044525104
   */
  counterpartyBankBic: string;

  /**
   * Счёт получателя
   * Возможные значения: 20 characters
   * Пример: 40702810840020002504
   */
  counterpartyAccountNumber: string;

  /**
   * ИНН получателя длинна строки
   * Допустимые значения "0", 10 или 12 значное число
   * Пример: 5001038736
   */
  counterpartyINN?: string;

  /**
   * КПП получателя
   * Допустимые значения "0" или 9 значное число
   * Пример: 500101001
   */
  counterpartyKPP?: string;

  /**
   * Наименование получателя платежа
   * Пример: ООО "БАЙКАЛ-СЕРВИС ТК"
   */
  counterpartyName: string;

  /**
   * Сумма платежа
   * Пример: 700.33
   */
  paymentAmount: number;

  /**
   * Дата последней смены статуса платежа
   * Пример: 2018-03-29
   */
  paymentDate: string;

  /**
   * Номер платежа
   * Возможные значения: non-empty and <= 6 characters
   * Пример: 9195
   */
  paymentNumber?: string;

  /**
   * Назначение платежа
   * Возможные значения: non-empty and <= 210 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose: string;

  /**
   * ИНН за кого платят
   * Допустимые значения "0", 10 или 12 значное число
   * Пример: 5001038736
   */
  payerINN?: string;

  /**
   * КПП за кого платят
   * Допустимые значения "0" или 9 значное число
   * Пример: 500101001
   */
  payerKPP?: string;

  /**
   * Кор. счёт банка получателя
   * Возможные значения: 20 characters
   * Пример: 30101810745374525104
   */
  counterpartyBankCorrAccount?: string;

  /**
   * Приоритет платежа
   * Возможные значения: 1 characters
   * Значение по умолчанию: 5
   * Пример: 5
   */
  paymentPriority?: string;

  /**
   * Поле 20
   * Возможные значения: <= 1 characters
   * Пример: 1
   */
  codePurpose?: string;

  /**
   * Код УИН (поле 22)
   * Пример: 1
   */
  supplierBillId?: string;

  /**
   * Код выплат из бюджета на ФЛ (поле 110)
   * Пример: 1
   */
  budgetPaymentCode?: string;

  /**
   * Email для отправки платежного поручения
   * Пример: ivanov@mail.com
   */
  email?: string;

  /**
   * Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0"
   * Пример: 2018-03-29
   */
  taxInfoDocumentDate?: string;

  /**
   * Номера документа (поле 108)
   * Возможные значения: non-empty
   * Пример: 12
   */
  taxInfoDocumentNumber?: string;

  /**
   * КБК (поле 104)
   * Пример: 18210202020061000160
   */
  taxInfoKBK?: string;

  /**
   * ОКАТО (поле 105)
   * Пример: 65401364000
   */
  taxInfoOKATO?: string;

  /**
   * Налоговый период (поле 107). Допустимо значение "0"
   * Пример: МС.08.2009
   */
  taxInfoPeriod?: string;

  /**
   * Основание (поле 106)
   * Пример: ТП
   */
  taxInfoReasonCode?: string;

  /**
   * Статус (поле 101)
   * Пример: 08
   */
  taxInfoStatus?: string;

  /**
   * Номер телефона для ГИС ГМП
   * Пример: +79999999999
   */
  gisPhoneNumber?: string;

  /**
   * Адрес электронной почты для ГИС ГМП
   * Пример: ivanov@mail.com
   */
  gisEmail?: string;
}

export interface GetPaymentForSignListDataResponseDto {
  Payment: GetPaymentForSignListDataPaymentResponseDto;
}

export interface GetPaymentForSignListLinksResponseDto extends BaseLinksResponse {}
export interface GetPaymentForSignListMetaResponseDto extends BaseMetaResponse {}

export interface GetPaymentForSignListResponseDto {
  Data: GetPaymentForSignListDataResponseDto;
  Links: GetPaymentForSignListLinksResponseDto;
  Meta: GetPaymentForSignListMetaResponseDto;
}
