import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { ConsentDto } from './consent.interface.js';

export interface GetConsentsInfoPathParametersDto {
  /**
   * Уникальный идентификатор, предназначенный для идентификации разрешения
   */
  consentId: string;
}
export interface GetConsentsInfoHeaderParametersDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  'customer-code': string;
}

export interface GetConsentsInfoDto {
  PathParameters: GetConsentsInfoPathParametersDto;
  HeaderParameters?: GetConsentsInfoHeaderParametersDto;
}

export interface GetConsentsInfoResponseDataDto extends ConsentDto {}
export interface GetConsentsInfoResponseLinksDto extends BaseLinksResponse {}
export interface GetConsentsInfoResponseMetaDto extends BaseMetaResponse {}

export interface GetConsentsInfoResponseDto {
  Data: GetConsentsInfoResponseDataDto;
  Links: GetConsentsInfoResponseLinksDto;
  Meta: GetConsentsInfoResponseMetaDto;
}
