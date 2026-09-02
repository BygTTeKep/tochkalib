import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { BalanceDto } from './balance.interface.js';

export interface GetBalancesListResponseDataDto {
  Balance: BalanceDto[];
}
export interface GetBalancesListResponseLinksDto extends BaseLinksResponse {}
export interface GetBalancesListResponseMetaDto extends BaseMetaResponse {}

export interface GetBalancesListResponseDto {
  Data: GetBalancesListResponseDataDto;
  Links: GetBalancesListResponseLinksDto;
  Meta: GetBalancesListResponseMetaDto;
}
