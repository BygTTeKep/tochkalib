import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';

import {
  CreateNewConsentsDto,
  CreateNewConsentsResponseDto,
} from './interfaces/createNewConsents.interface.js';
import {
  GetConsentsInfoDto,
  GetConsentsInfoResponseDto,
} from './interfaces/getConsentsInfo.interface.js';
import {
  GetAllConsentsListDto,
  GetAllConsentsListResponseDto,
} from './interfaces/getAllConsentsList.interface.js';
import {
  GetAllChildConsentsDto,
  GetAllChildConsentsResponseDto,
} from './interfaces/getAllChildConsents.interface.js';

@Injectable()
export class ConsentsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка разрешений.
   * @param dto GetAllConsentsListDto
   * @returns GetAllConsentsListResponseDto
   */
  async getAllConsentsList(dto: GetAllConsentsListDto) {
    return this.tochkaHttpService.get<GetAllConsentsListResponseDto>(
      '/consent/v1.0/consents',
      { 'customer-code': dto['customer-code'] },
    );
  }

  /**
   * Метод для создания разрешения.
   * @param dto CreateNewConsentsDto
   * @returns CreateNewConsentsResponseDto
   */
  async createNewConsents(dto: CreateNewConsentsDto) {
    return this.tochkaHttpService.post<CreateNewConsentsResponseDto>(
      '/consent/v1.0/consents',
      { ...dto },
    );
  }

  /**
   * Метод для получения информации о списке разрешений
   * @param dto GetConsentsInfoDto
   * @returns GetConsentsInfoResponseDto
   */
  async getConsentsInfo(dto: GetConsentsInfoDto) {
    return this.tochkaHttpService.get<GetConsentsInfoResponseDto>(
      `/consent/v1.0/consents/${dto.PathParameters.consentId}`,
      dto.HeaderParameters
        ? { 'customer-code': dto.HeaderParameters['customer-code'] }
        : undefined,
    );
  }

  /**
   * Метод для получения всех дочерних разрешений
   * @param dto GetAllChildConsentsDto
   * @returns GetAllChildConsentsResponseDto
   */
  async getAllChildConsents(dto: GetAllChildConsentsDto) {
    return this.tochkaHttpService.get<GetAllChildConsentsResponseDto>(
      `/consent/v1.0/consents/${dto.consentId}/child`,
    );
  }
}
