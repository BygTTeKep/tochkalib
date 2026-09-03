export interface GetInvoiceDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * Уникальный идентификатор документа
   * Пример: 1cf95c4f-e794-4407-bac4-0829f19bd2be
   */
  documentId: string;
}
