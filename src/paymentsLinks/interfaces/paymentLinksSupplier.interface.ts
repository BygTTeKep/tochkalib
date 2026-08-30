export interface PaymentLinksSupplierDto {
  /**
   * Номер телефона поставщика
   * Возможные значения: >= 11 characters and <= 15 characters, Value must match regular expression ^\+?\d+$
   * Пример: +7999999999
   */
  phone: string;
  /**
   * Наименование поставщика
   * Пример: ООО Альтер
   */
  name: string;
  /**
   * ИНН поставщика
   * Возможные значения: >= 10 characters and <= 12 characters, Value must match regular expression ^\d+$
   * Пример: 660000000000
   */
  taxCode: string;
}
