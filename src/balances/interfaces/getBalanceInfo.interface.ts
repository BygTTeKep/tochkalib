import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface GetBalanceInfoDto {
  /**
   * Идентификатор счета
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
}

export interface GetBalanceInfoResponseDataDto {
  Balance: any;
}

export interface GetBalanceInfoResponseLinksDto extends BaseLinksResponse {}
export interface GetBalanceInfoResponseMetaDto extends BaseMetaResponse {}

export interface GetBalanceInfoResponseDto {
  Data: GetBalanceInfoResponseDataDto;
  Links: GetBalanceInfoResponseLinksDto;
  Meta: GetBalanceInfoResponseMetaDto;
}
