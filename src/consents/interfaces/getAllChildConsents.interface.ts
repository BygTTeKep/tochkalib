import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { ConsentDto } from './consent.interface.js';

export interface GetAllChildConsentsDto {
  /**
   * Уникальный идентификатор, предназначенный для идентификации разрешения
   */
  consentId: string;
}

export interface GetAllChildConsentsResponseDataConsentDto extends ConsentDto {}

export interface GetAllChildConsentsResponseDataDto {
  Consent: GetAllChildConsentsResponseDataConsentDto[];
}
export interface GetAllChildConsentsResponseLinksDto extends BaseLinksResponse {}
export interface GetAllChildConsentsResponseMetaDto extends BaseMetaResponse {}

export interface GetAllChildConsentsResponseDto {
  Data: GetAllChildConsentsResponseDataDto;
  Links: GetAllChildConsentsResponseLinksDto;
  Meta: GetAllChildConsentsResponseMetaDto;
}
