import { ImageParamsDto } from './imageParams.interface.js';

export interface ImageDto extends ImageParamsDto {
  /**
   * содержимое изображения (для image/png - в кодировке base64)
   * Пример: iVBORw0KGgoAAAANSUhEUgAAASwAAAEs...
   */
  content: string;
}
