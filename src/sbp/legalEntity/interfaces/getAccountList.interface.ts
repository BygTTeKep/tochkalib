import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { AccountDto } from './account.interface.js';

export interface GetAccountsListDto {
  /**
   * Идентификатор зарегистрированного юрлица в СБП (12 символов)
   * Пример: LF0000000001
   */
  legalId: string;
}

export interface GetAccountsListResponseDataDto {
  AccountList: AccountDto[];
}
export interface GetAccountsListResponseLinksDto extends BaseLinksResponse {}
export interface GetAccountsListResponseMetaDto extends BaseMetaResponse {}

export interface GetAccountsListResponseDto {
  Data: GetAccountsListResponseDataDto;
  Links: GetAccountsListResponseLinksDto;
  Meta: GetAccountsListResponseMetaDto;
}
