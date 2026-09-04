import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface ChangeCashboxQrcodeAccountPathParametersDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}

export interface ChangeCashboxQrcodeAccountBodyDataDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
}

export interface ChangeCashboxQrcodeAccountBodyDto {
  Data: ChangeCashboxQrcodeAccountBodyDataDto;
}

export interface ChangeCashboxQrcodeAccountDto {
  PathParameters: ChangeCashboxQrcodeAccountPathParametersDto;
  Body: ChangeCashboxQrcodeAccountBodyDto;
}

export interface ChangeCashboxQrcodeAccountResponseDataDto {
  /**
   * Уникальный и неизменный идентификатор счёта
   * Пример: 40817810802000000008/044525104
   */
  accountId: string;
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS000000000000000000000000000001
   */
  qrcId: string;
}
export interface ChangeCashboxQrcodeAccountResponseLinksDto extends BaseLinksResponse {}
export interface ChangeCashboxQrcodeAccountResponseMetaDto extends BaseMetaResponse {}

export interface ChangeCashboxQrcodeAccountResponseDto {
  Data: ChangeCashboxQrcodeAccountResponseDataDto;
  Links: ChangeCashboxQrcodeAccountResponseLinksDto;
  Meta: ChangeCashboxQrcodeAccountResponseMetaDto;
}
