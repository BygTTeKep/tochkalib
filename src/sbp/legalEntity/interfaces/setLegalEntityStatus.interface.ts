import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantStatus } from '../../merchants/enums/merchantStatus.enum.js';

export interface SetLegalEntityStatusPathParametersDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}

export interface SetLegalEntityStatusBodyDataDto {
  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: MerchantStatus;
}

export interface SetLegalEntityStatusBodyDto {
  Data: SetLegalEntityStatusBodyDataDto;
}

export interface SetLegalEntityStatusDto {
  PathParameters: SetLegalEntityStatusPathParametersDto;
  Body: SetLegalEntityStatusBodyDto;
}

export interface SetLegalEntityStatusResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface SetLegalEntityStatusResponseLinksDto extends BaseLinksResponse {}
export interface SetLegalEntityStatusResponseMetaDto extends BaseMetaResponse {}

export interface SetLegalEntityStatusResponseDto {
  Data: SetLegalEntityStatusResponseDataDto;
  Links: SetLegalEntityStatusResponseLinksDto;
  Meta: SetLegalEntityStatusResponseMetaDto;
}
