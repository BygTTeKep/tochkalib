import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantDto } from './marchant.interface.js';

export interface GetMerchantsListDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}

export interface GetMerchantsListResponseDataDto {
  MerchantList: MerchantDto[];
}
export interface GetMerchantsListResponseLinksDto extends BaseLinksResponse {}
export interface GetMerchantsListResponseMetaDto extends BaseMetaResponse {}

export interface GetMerchantsListResponseDto {
  Data: GetMerchantsListResponseDataDto;
  Links: GetMerchantsListResponseLinksDto;
  Meta: GetMerchantsListResponseMetaDto;
}
