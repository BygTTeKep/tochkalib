export interface ErrorDto {
  /**
   * Низкоуровневое текстовое описание ошибки
   * Пример: Validation Error
   */
  errorCode: string;
  /**
   * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
   * Возможные значения: <= 603 characters
   * Пример: Something going wrong
   */
  message: string;
  /**
   * URL для помощи в устранении проблемы
   * Пример: https://developers.tochka.com/
   */
  url: string;
}

export interface BaseErrorDto {
  /**
   * Высокоуровневый текстовый код ошибки, необходимый для классификации.
   * Возможные значения: <= 40 characters
   * Пример: 400
   */
  code: string;
  /**
   * Уникальный идентификатор ошибки, для целей аудита
   * Возможные значения: <= 40 characters
   * Пример: c397b21a-d998-4c4d-9471-e60eaf816b87
   */
  id: string;
  /**
   * Краткое сообщение об ошибке.
   * Возможные значения: <= 600 characters
   * Пример: Что-то пошло не так
   */
  message: string;
  /**
   * Список детализированных ошибок
   */
  Errors: ErrorDto[];
}
