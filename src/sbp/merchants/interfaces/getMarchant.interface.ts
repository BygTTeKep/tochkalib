import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantDto } from './marchant.interface.js';

export interface GetMerchantDto {
  /**
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;
}

export interface GetMerchantResponseDataDto extends MerchantDto {}
export interface GetMerchantResponseLinksDto extends BaseLinksResponse {}
export interface GetMerchantResponseMetaDto extends BaseMetaResponse {}

export interface GetMerchantResponseDto {
  Data: GetMerchantResponseDataDto;
  Links: GetMerchantResponseLinksDto;
  Meta: GetMerchantResponseMetaDto;
}
