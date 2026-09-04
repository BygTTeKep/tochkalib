import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  GetAccountsListDto,
  GetAccountsListResponseDto,
} from './interfaces/getAccountList.interface.js';
import {
  GetCustomerInfoDto,
  GetCustomerInfoResponseDto,
} from './interfaces/getCustomerInfo.interface.js';
import {
  GetLegalEntityDto,
  GetLegalEntityResponseDto,
} from './interfaces/getLegalEntity.interface.js';
import {
  SetLegalEntityStatusDto,
  SetLegalEntityStatusResponseDto,
} from './interfaces/setLegalEntityStatus.interface.js';
import {
  RegisterLegalEntityDto,
  RegisterLegalEntityResponseDto,
} from './interfaces/registerlegalEntity.interface.js';

@Injectable()
export class LegalEntityService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка счетов юрлица в Системе быстрых платежей
   * Необходимые разрешения: ReadSBPData
   * @param dto GetAccountsListDto
   * @returns GetAccountsListResponseDto
   */
  async getAccountsList(dto: GetAccountsListDto) {
    return this.tochkaHttpService.get<GetAccountsListResponseDto>(
      `/sbp/v1.0/account/${dto.legalId}`,
    );
  }
  /**
   * Метод для получения информации о клиенте в Системе быстрых платежей
   * Необходимые разрешения: ReadSBPData
   * @param dto GetCustomerInfoDto
   * @returns GetCustomerInfoResponseDto
   */
  async getCustomerInfo(dto: GetCustomerInfoDto) {
    return this.tochkaHttpService.get<GetCustomerInfoResponseDto>(
      `/sbp/v1.0/customer/${dto.customerCode}/${dto.bankCode}`,
    );
  }
  /**
   * Метод для получения данных юрлица в Системе быстрых платежей
   * Необходимые разрешения: ReadSBPData
   * @param dto GetLegalEntityDto
   * @returns GetLegalEntityResponseDto
   */
  async getLegalEntity(dto: GetLegalEntityDto) {
    return this.tochkaHttpService.get<GetLegalEntityResponseDto>(
      `/sbp/v1.0/legal-entity/${dto.legalId}`,
    );
  }
  /**
   * Метод устанавливает статус юрлица в Системе быстрых платежей
   * Необходимые разрешения: EditSBPData
   * @param dto SetLegalEntityStatusDto
   * @returns SetLegalEntityStatusResponseDto
   */
  async setLegalEntityStatus(dto: SetLegalEntityStatusDto) {
    return this.tochkaHttpService.post<SetLegalEntityStatusResponseDto>(
      `/sbp/v1.0/legal-entity/${dto.PathParameters.legalId}`,
      { ...dto.Body },
    );
  }
  /**
   * Метод для регистрации юрлица в Системе быстрых платежей
   * Необходимые разрешения: EditSBPData
   * @param dto RegisterLegalEntityDto
   * @returns RegisterLegalEntityResponseDto
   */
  async registerLegalEntity(dto: RegisterLegalEntityDto) {
    return this.tochkaHttpService.post<RegisterLegalEntityResponseDto>(
      `/sbp/v1.0/register-sbp-legal-entity`,
      dto,
    );
  }
}
