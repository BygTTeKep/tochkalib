export interface TaxFieldsDto {
  /**
   * Статус плательщика бюджетного платежа
   */
  originatorStatus?: string;
  /**
   * КБК
   */
  kbk?: string;
  /**
   * ОКТМО
   */
  oktmo?: string;
  /**
   * Основание налогового платежа
   */
  base?: string;
  /**
   * Номер налогового документа
   */
  documentNumber?: string;
  documentDate?: string | number;
  /**
   * Вид платежа
   */
  type?: string;
  /**
   * Налоговой период / код таможенного органа
   */
  field107?: string;
}
