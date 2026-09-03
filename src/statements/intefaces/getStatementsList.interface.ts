import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { StatementDto } from './statement.interface.js';

export interface GetStatementsListResponseDataDto {
  Statement: StatementDto[];
}
export interface GetStatementsListResponseLinksDto extends BaseLinksResponse {}
export interface GetStatementsListResponseMetaDto extends BaseMetaResponse {}

export interface GetStatementsListResponseDto {
  Data: GetStatementsListResponseDataDto;
  Links: GetStatementsListResponseLinksDto;
  Meta: GetStatementsListResponseMetaDto;
}
