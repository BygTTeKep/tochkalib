export interface CorfTokenDto {
  /**
   * Токен карты покупателя
   * Пример: 208452
   */
  tokenCardId: string;
  /**
   * Тип платёжной системы
   * Пример: Mir
   */
  cardType: string;
  /**
   * Маскированный номер карты
   * Пример: 220445******0792
   */
  maskedPan: string;
}
