export interface ShipmentDocumentDto {
  /**
   * Наименование документа об отгрузке
   */
  name: string;

  /**
   * Дата документа об отгрузке
   * Пример: 2010-10-29
   */
  date: string;

  /**
   * Номер документа об отгрузке
   */
  number: string;
}
