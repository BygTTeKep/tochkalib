import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../../intefaces/baseTochkaResponse.interface.js';

export interface DeactivateCashboxQrcodeDto {
  /**
   * Идентификатор QR-кода в СБП
   * Пример: AS10007GLJ1216F4905A1MTT3CP7GK3N
   */
  qrcId: string;
}

export interface DeactivateCashboxQrcodeResponseDataDto {
  /**
   * Статус операции
   * Пример: true
   */
  result: boolean;
}
export interface DeactivateCashboxQrcodeResponseLinksDto extends BaseLinksResponse {}
export interface DeactivateCashboxQrcodeResponseMetaDto extends BaseMetaResponse {}

export interface DeactivateCashboxQrcodeResponseDto {
  Data: DeactivateCashboxQrcodeResponseDataDto;
  Links: DeactivateCashboxQrcodeResponseLinksDto;
  Meta: DeactivateCashboxQrcodeResponseMetaDto;
}
