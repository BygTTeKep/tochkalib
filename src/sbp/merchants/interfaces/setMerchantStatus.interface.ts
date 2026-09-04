import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';
import { MerchantStatus } from '../enums/merchantStatus.enum.js';

export interface SetMerchantStatusPathParametersDto {
  /**
   * Возможные значения: <= 12 characters
   * Пример: MF0000000001
   */
  merchantId: string;
}

export interface SetMerchantStatusBodyDataDto {
  /**
   * Статус объекта
   * Возможные значения: [Active, Suspended]
   * Пример: Active
   */
  status: MerchantStatus;
}

export interface SetMerchantStatusBodyDto {
  Data: SetMerchantStatusBodyDataDto;
}

export interface SetMerchantStatusDto {
  PathParameters: SetMerchantStatusPathParametersDto;
  Body: SetMerchantStatusBodyDto;
}

export interface SetMerchantStatusResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface SetMerchantStatusResponseLinksDto extends BaseLinksResponse {}
export interface SetMerchantStatusResponseMetaDto extends BaseMetaResponse {}

export interface SetMerchantStatusResponseDto {
  Data: SetMerchantStatusResponseDataDto;
  Links: SetMerchantStatusResponseLinksDto;
  Meta: SetMerchantStatusResponseMetaDto;
}
