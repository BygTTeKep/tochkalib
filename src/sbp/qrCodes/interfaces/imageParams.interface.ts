export interface ImageParamsDto {
  /**
   * Ширина изображения (>=200, по умолчанию: 300)
   */
  width: number;
  /**
   * Высота изображения (>=200, по умолчанию: 300)
   */
  height: number;

  /**
   * Тип контента
   * Возможные значения: [image/png, image/svg+xml]
   * Значение по умолчанию: image/png
   */
  mediaType?: string;
}
