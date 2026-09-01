import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { AccountResponseDto } from './accountDetails.interface.js';

export interface GetAccountInfoDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
}
export interface GetAccountInfoDataResponseDto extends AccountResponseDto {}

export interface GetAccountInfoLinksResponseDto extends BaseLinksResponse {}
export interface GetAccountInfoMetaResponseDto extends BaseMetaResponse {}

export interface GetAccountInfoResponseDto {
  Data: GetAccountInfoDataResponseDto;
  Links: GetAccountInfoLinksResponseDto;
  Meta: GetAccountInfoMetaResponseDto;
}
