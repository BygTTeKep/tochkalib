import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  CreatePaymentLinkDto,
  CreatePaymentLinkResponseDto,
} from './interfaces/createPaymentLink.interface.js';

@Injectable()
export class PaymentsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}
  /**
   *
   * @param dto - CreatePaymentLinkDto
   * @returns CreatePaymentLinkResponseDto
   */
  async createPaymentLink(dto: CreatePaymentLinkDto) {
    return this.tochkaHttpService.post<CreatePaymentLinkResponseDto>(
      '/acquiring/v1.0/payments',
      dto,
    );
  }
  /**
   *
   * @param customerCode - Идентификатор клиента. Пример: 300000092
   * @returns GetCustomerListResponseDto
   */
  async getPaymentInfoByOperationId(customerCode: number) {
    return this.tochkaHttpService.get(
      `open-banking/v1.0/customers/${customerCode}`,
    );
  }
}
