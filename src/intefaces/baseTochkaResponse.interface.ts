export interface BaseLinksResponse {
  /**
   * Self
   * Возможные значения: non-empty and <= 2083 characters
   * Пример: https://enter.tochka.com/uapi
   */
  self: string;
}

export interface BaseMetaResponse {
  /**
   * Totalpages
   * Пример: 1
   */
  totalPages: number;
}
