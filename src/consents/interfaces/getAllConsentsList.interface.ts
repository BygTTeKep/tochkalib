import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { ConsentDto } from './consent.interface.js';

export interface GetAllConsentsListDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  'customer-code': string;
}
export interface GetAllConsentsListResponseDataDto {
  Consent: ConsentDto[];
}
export interface GetAllConsentsListResponseLinksDto extends BaseLinksResponse {}
export interface GetAllConsentsListResponseMetaDto extends BaseMetaResponse {}

export interface GetAllConsentsListResponseDto {
  Data: GetAllConsentsListResponseDataDto;
  Links: GetAllConsentsListResponseLinksDto;
  Meta: GetAllConsentsListResponseMetaDto;
}
