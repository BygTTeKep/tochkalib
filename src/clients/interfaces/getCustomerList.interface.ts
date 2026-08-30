import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface GetCustomerDataDto {
  customerCode: string;
  customerType: string;
  isResident: boolean;
  taxCode: string;
  fullName: string;
  shortName: string;
  kpp: string;
  customerOgrn: string;
}

export interface GetCustomerListDataDto {
  Customer: GetCustomerDataDto[];
}

export interface GetCustomerListLinksResponseDto extends BaseLinksResponse {}
export interface GetCustomerListMetaResponseDto extends BaseMetaResponse {}

export interface GetCustomerListResponseDto {
  Data: GetCustomerListDataDto;
  Links: GetCustomerListLinksResponseDto;
  Meta: GetCustomerListMetaResponseDto;
}
