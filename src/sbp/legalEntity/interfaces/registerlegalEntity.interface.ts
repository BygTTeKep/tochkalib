import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface RegisterLegalEntityDataDto {
  /**
   * Уникальный код клиента
   * Возможные значения: <= 9 characters
   * Пример: 300000092
   */
  customerCode: string;
  /**
   * БИК банка
   * Возможные значения: 9 characters
   * Пример: 044525104
   */
  bankCode: string;
}

export interface RegisterLegalEntityDto {
  Data: RegisterLegalEntityDataDto;
}

export interface RegisterLegalEntityResponseDataDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}
export interface RegisterLegalEntityResponseLinksDto extends BaseLinksResponse {}
export interface RegisterLegalEntityResponseMetaDto extends BaseMetaResponse {}

export interface RegisterLegalEntityResponseDto {
  Data: RegisterLegalEntityResponseDataDto;
  Links: RegisterLegalEntityResponseLinksDto;
  Meta: RegisterLegalEntityResponseMetaDto;
}
