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

export interface GetCustomerListResponseDto {
  Data: GetCustomerListDataDto;
  Links: any;
  Meta: any;
}
