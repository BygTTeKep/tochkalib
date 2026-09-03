export interface CreditorAccountDto {
  /**
   * Название схемы
   * Возможные значения: [RU.CBR.PAN, RU.CBR.CellphoneNumber, RU.CBR.BBAN]
   * Пример: RU.CBR.PAN
   */
  schemeName: string;

  /**
   * Идентификатор счета(может отсутствовать в валютном платеже)
   * Возможные значения: <= 256 characters
   * Пример: 60000000000000000001
   */
  identification?: string;
}
