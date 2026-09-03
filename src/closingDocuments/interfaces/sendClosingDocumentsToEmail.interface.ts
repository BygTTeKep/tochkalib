import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface SendClosingDocumentsToEmailPathParametersDto {
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
export interface SendClosingDocumentsToEmailBodyDto {
  /**
   * Электронная почта, на которую нужно отправить
   */
  email: string;
}

export interface SendClosingDocumentsToEmailDto {
  PathParameters: SendClosingDocumentsToEmailPathParametersDto;
  Body: SendClosingDocumentsToEmailBodyDto;
}

export interface SendClosingDocumentsToEmailResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}

export interface SendClosingDocumentsToEmailResponseLinksDto extends BaseLinksResponse {}
export interface SendClosingDocumentsToEmailResponseMetaDto extends BaseMetaResponse {}

export interface SendClosingDocumentsToEmailResponseDto {
  Data: SendClosingDocumentsToEmailResponseDataDto;
  Links: SendClosingDocumentsToEmailResponseLinksDto;
  Meta: SendClosingDocumentsToEmailResponseMetaDto;
}
