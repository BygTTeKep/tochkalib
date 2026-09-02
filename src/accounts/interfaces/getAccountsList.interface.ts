import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { AccountResponseDto } from './accountDetails.interface.js';

export interface GetAccountsListDataAccountResponseDto extends AccountResponseDto {}

export interface GetAccountsListDataResponseDto {
  Account: GetAccountsListDataAccountResponseDto[];
}

export interface GetAccountsListLinksResponseDto extends BaseLinksResponse {}
export interface GetAccountsListMetaResponseDto extends BaseMetaResponse {}

export interface GetAccountsListResponseDto {
  Data: GetAccountsListDataResponseDto;
  Links: GetAccountsListLinksResponseDto;
  Meta: GetAccountsListMetaResponseDto;
}
