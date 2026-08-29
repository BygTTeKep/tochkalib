export interface CreatePaymentForSignDataDto {
  /**
   * Номер счёта отправителя
   * Возможные значения: 20 characters
   * Пример: 40702810840020002503
   */
  accountCode: string;

  /**
   * БИК отправителя
   * Возможные значения: 9 characters
   * Пример: 044525104
   */
  bankCode: string;

  /**
   * ИНН лица, за которого поступит платёж
   * 10-значный — для юрлиц
   * 12-значный — для физлиц
   * "0" — если у лица, за которого платите, нет ИНН в РФ
   * Пример: 5001038736
   */
  payerINN?: string;

  /**КПП лица, за которого поступит платёж
   * Обязательное поле при платеже в бюджет или за нерезидента РФ. Значением может быть "0" или девятизначное число.
   * Если платите за себя в бюджет на единый налоговый счёт (ЕНС), укажите "0"
   * Если это платёж за другое лицо, которое не является налоговым резидентом РФ, передайте "0" или девятизначное число
   * Пример: 500101001
   */
  payerKPP?: string;

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

  /**ИНН получателя
   * Возможные значения: >= 10 characters and <= 12 characters
   * Пример: 5001038736
   */
  counterpartyINN?: string;

  /**
   * КПП получателя
   * Допустимые значения "0" или 9 значное число
   * Возможные значения: <= 9 characters
   * Пример: 500101001
   */
  counterpartyKPP?: string;

  /**
   * Получатель платежа
   * Пример: ООО "БАЙКАЛ-СЕРВИС ТК"
   */
  counterpartyName: string;

  /**
   * Кор. счёт банка получателя
   * Возможные значения: 20 characters
   * Пример: 30101810745374525104
   */
  counterpartyBankCorrAccount?: string;

  /**
   * Сумма платежа
   * Пример: 700.33
   */
  paymentAmount: number;

  /**
   * Дата платежа. Используется стандарт ISO8601
   * Дата платежа, приведенная к часовому поясу Москвы
   * Пример: 2018-03-29
   */
  paymentDate: string;

  /**
   * Номер платежа
   * Возможные значения:  undefined
   * Пример: 9195
   */
  paymentNumber?: number;

  /**
   * Приоритет платежа
   * Возможные значения: 1 characters
   * Значение по умолчанию: 5
   * Пример: 5
   */
  paymentPriority?: string;

  /**
   * Назначение платежа
   * Возможные значения: non-empty and <= 210 characters
   * Пример: Оплата по счету № 1 от 01.01.2021. Без НДС
   */
  paymentPurpose: string;

  /**
   * Поле 20
   * Заполняется только при платеже физ лицам на счета:('40810', '40817', '40823', '40824', '40826', '423', '30232', '40803', '40813', '40820', '426'). Допустимые значения 1,2,3,4,5 и пусто
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
   * Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0"
   * Пример: 2018-03-29
   */
  taxInfoDocumentDate?: string;

  /**
   * Номера документа (поле 108)
   * Возможные значения: non-empty and <= 15 characters
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
   * Возможные значения: non-empty and <= 2 characters
   * Пример: ТП
   */
  taxInfoReasonCode?: string;

  /**
   * Статус (поле 101)
   * Возможные значения: 2 characters
   * Пример: 08
   */
  taxInfoStatus?: string;

  /**
   * Код выплат из бюджета на ФЛ (поле 110)
   * Возможные значения: 1 characters
   * Пример: 1
   */
  budgetPaymentCode?: string;

  /**
   * Email для отправки платежного поручения
   * Пример: ivanov@mail.com
   */
  email?: string;

  /**
   * Номер телефона для ГИС ГМП
   * Возможные значения: <= 12 characters, Value must match regular expression ^\+7[0-9]{10}$
   * Пример: +79999999999
   */
  gisPhoneNumber?: string;

  /**
   * Адрес электронной почты для ГИС ГМП
   * Пример: ivanov@mail.com
   */
  gisEmail?: string;
}
export interface CreatePaymentForSignDto {
  Data: CreatePaymentForSignDataDto;
}

export interface CreatePaymentForSignDataResponseDto {
  /**
   * ID запроса
   * Пример: openapi-b96d770e-769f-49ce-9630-890e00d47720
   */
  requestId: string;
  /**
   * Ссылка на страницу подписания платежа
   * Пример: https://i.tochka.com/bank/m/payment-preview/openapi-b96d770e-769f-49ce-9630-890e00d47720?customerCode=300000092
   */
  redirectURL: string;
}
export interface CreatePaymentForSignLinksResponseDto {
  /**
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  self: string;
}
export interface CreatePaymentForSignMetaResponseDto {
  /**
   * Totalpages
   * Пример: 1
   */
  totalPages: number;
}

export interface CreatePaymentForSignResponseDto {
  Data: CreatePaymentForSignDataResponseDto;
  Links: CreatePaymentForSignLinksResponseDto;
  Meta: CreatePaymentForSignMetaResponseDto;
}
