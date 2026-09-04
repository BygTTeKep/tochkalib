import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  RegisterMerchantDto,
  RegisterMerchantResponseDto,
} from './interfaces/registerMerchant.interface.js';
import {
  GetMerchantsListDto,
  GetMerchantsListResponseDto,
} from './interfaces/getMerchantList.interface.js';
import {
  SetMerchantStatusDto,
  SetMerchantStatusResponseDto,
} from './interfaces/setMerchantStatus.interface.js';
import {
  GetMerchantDto,
  GetMerchantResponseDto,
} from './interfaces/getMarchant.interface.js';

@Injectable()
export class MerchantsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для регистрации ТСП в Системе быстрых платежей
   * Необходимые разрешения: EditSBPData
   * @param dto RegisterMerchantDto
   * @returns RegisterMerchantResponseDto
   */
  async registerMerchant(dto: RegisterMerchantDto) {
    return this.tochkaHttpService.post<RegisterMerchantResponseDto>(
      `/sbp/v1.0/merchant/legal-entity/${dto.PathParameters.legalId}`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для получения списка ТСП юрлица
   * Необходимые разрешения: ReadSBPData
   * @param dto GetMerchantsListDto
   * @returns GetMerchantsListResponseDto
   */
  async getMerchantsList(dto: GetMerchantsListDto) {
    return this.tochkaHttpService.get<GetMerchantsListResponseDto>(
      `/sbp/v1.0/merchant/legal-entity/${dto.legalId}`,
    );
  }

  /**
   * Метод устанавливает статус ТСП
   * Необходимые разрешения: EditSBPData
   * @param dto SetMerchantStatusDto
   * @returns SetMerchantStatusResponseDto
   */
  async setMerchantStatus(dto: SetMerchantStatusDto) {
    return this.tochkaHttpService.put<SetMerchantStatusResponseDto>(
      `/sbp/v1.0/merchant/${dto.PathParameters.merchantId}`,
      {
        ...dto.Body,
      },
    );
  }

  /**
   * Метод для получения информации о ТСП
   * Необходимые разрешения: ReadSBPData
   * @param dto GetMerchantDto
   * @returns GetMerchantResponseDto
   */
  async getMerchant(dto: GetMerchantDto) {
    return this.tochkaHttpService.get<GetMerchantResponseDto>(
      `/sbp/v1.0/merchant/${dto.merchantId}`,
    );
  }
}
