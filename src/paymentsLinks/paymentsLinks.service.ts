import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import type {
  CreatePaymentLinkDto,
  CreatePaymentLinkResponseDto,
} from './interfaces/createPaymentLink.interface.js';
import type {
  GetPaymentOperationListDto,
  GetPaymentOperationListResponseDto,
} from './interfaces/getPaymentOperationList.interface.js';

@Injectable()
export class PaymentsLinksService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка операций
   * CREATED - Операция создана
   * APPROVED - Операция одобрена (оплата прошла успешно)
   * ON-REFUND - Операция заблокирована на время выполнения возврата
   * REFUNDED - Осуществлен возврат
   * EXPIRED - Истек срок действия
   * Необходимые разрешения: ReadAcquiringData
   */
  async getPaymentOperationList(dto: GetPaymentOperationListDto) {
    const queryParams = new URLSearchParams();
    queryParams.append('customerCode', dto.customerCode);
    if (dto.fromDate) {
      queryParams.append('fromDate', dto.fromDate.toString());
    }
    if (dto.toDate) {
      queryParams.append('toDate', dto.toDate.toString());
    }
    if (dto.page) {
      queryParams.append('page', dto.page.toString());
    }
    if (dto.perPage) {
      queryParams.append('perPage', dto.perPage.toString());
    }
    if (dto.status) {
      queryParams.append('status', dto.status);
    }
    const url = `/acquiring/v1.0/payments?${queryParams.toString()}`;
    return this.tochkaHttpService.get<GetPaymentOperationListResponseDto>(url);
  }
  /**
   * Метод для создания ссылки на оплату
   * @param dto - CreatePaymentLinkDto
   * @returns CreatePaymentLinkResponseDto
   */
  async createPaymentOperation(dto: CreatePaymentLinkDto) {
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
