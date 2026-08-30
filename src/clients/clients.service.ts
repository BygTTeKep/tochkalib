import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { GetCustomerListResponseDto } from './interfaces/getCustomerList.interface.js';
import {
  GetCustomerInfoDto,
  GetCustomerInfoResponseDto,
} from './interfaces/getCustomerInfo.interface.js';

@Injectable()
export class ClientsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}
  /**
   * Метод для получения списка доступных клиентов
   * @returns GetCustomerListResponseDto
   */
  async getCustomerList() {
    return this.tochkaHttpService.get<GetCustomerListResponseDto>(
      'open-banking/v1.0/customers',
    );
  }
  /**
   * Метод для получения информации по конкретному клиенту
   * Необходимые разрешения: ReadCustomerData
   * @param dto GetCustomerInfoDto
   * @returns GetCustomerInfoResponseDto
   */
  async getCustomerInfo(dto: GetCustomerInfoDto) {
    return this.tochkaHttpService.get<GetCustomerInfoResponseDto>(
      `open-banking/v1.0/customers/${dto.customerCode}`,
    );
  }
}
