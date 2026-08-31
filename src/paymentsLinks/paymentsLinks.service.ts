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
import type {
  GetPaymentOperationInfoDto,
  GetPaymentOperationInfoResponseDto,
} from './interfaces/getPaymentOperationInfo.interface.js';
import {
  CapturePaymentDto,
  CapturePaymentResponseDto,
} from './interfaces/capturePayment.interface.js';
import {
  RefundPaymentDto,
  RefundPaymentResponseDto,
} from './interfaces/refundPayment.interface.js';
import {
  CreatePaymentOperationWithReceiptDto,
  CreatePaymentOperationWithReceiptResponseDto,
} from './interfaces/createPaymentOperationWithReceipt.interface.js';
import {
  GetPaymentRegistryDto,
  GetPaymentRegistryResponseDto,
} from './interfaces/getPaymentRegistry.interface.js';
import {
  GetRetailersDto,
  GetRetailersResponseDto,
} from './interfaces/getRetailers.interface.js';

@Injectable()
export class PaymentsLinksService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка операций
   * Необходимые разрешения: ReadAcquiringData
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
   * Необходимые разрешения: MakeAcquiringOperation
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
   * Метод для получения информации о конкретной операции
   * Необходимые разрешения: ReadAcquiringData
   * @param dto - GetPaymentOperationInfoDto
   * @returns GetCustomerListResponseDto
   */
  async getPaymentInfoByOperationId(dto: GetPaymentOperationInfoDto) {
    return this.tochkaHttpService.get<GetPaymentOperationInfoResponseDto>(
      `/acquiring/v1.0/payments/${dto.operationId}`,
    );
  }

  /**
   * Метод для списания средств при двухэтапной оплате
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto CapturePaymentDto
   * @returns CapturePaymentResponseDto
   */
  async capturePayment(dto: CapturePaymentDto) {
    return this.tochkaHttpService.post<CapturePaymentResponseDto>(
      `/acquiring/v1.0/payments/${dto.operationId}/capture`,
      dto,
    );
  }

  /**
   * Метод для возврата платежей, созданных через платёжную ссылку
   * Возврат возможен только для платежа со статусом APPROVED
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto RefundPaymentDto
   * @returns RefundPaymentResponseDto
   */
  async refundPaymentOperation(dto: RefundPaymentDto) {
    return this.tochkaHttpService.post<RefundPaymentResponseDto>(
      `/acquiring/v1.0/payments/${dto.operationId}/refund`,
      dto,
    );
  }

  /**
   * Метод для создания ссылки на оплату и отправки чека
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto CreatePaymentOperationWithReceiptDto
   * @returns CreatePaymentOperationWithReceiptResponseDto
   */
  async createPaymentOperationWithReceipt(
    dto: CreatePaymentOperationWithReceiptDto,
  ) {
    return this.tochkaHttpService.post<CreatePaymentOperationWithReceiptResponseDto>(
      `/acquiring/v1.0/payments_with_receipt`,
      dto,
    );
  }

  /**
   * Метод для получения реестра платежей по интернет-эквайрингу
   * Необходимые разрешения: ReadAcquiringData
   * @param dto GetPaymentRegistryDto
   * @returns GetPaymentRegistryResponseDto
   */
  async getPaymentRegistry(dto: GetPaymentRegistryDto) {
    const queryParams = new URLSearchParams();
    queryParams.append('customerCode', dto.customerCode);
    queryParams.append('merchantId', dto.merchantId);
    queryParams.append('date', dto.date);
    if (dto.paymentId) {
      queryParams.append('paymentId', dto.paymentId);
    }
    return this.tochkaHttpService.get<GetPaymentRegistryResponseDto>(
      `/acquiring/v1.0/registry?${queryParams.toString()}`,
    );
  }

  /**
   * Метод для получения информации о ретейлере
   * Необходимые разрешения: ReadAcquiringData
   * NEW - Ретейлер создан
   * ADDRESS_DADATA - Адрес уточнен
   * TWPG_SENDED - Данные мерчанта и терминала отправлены в процессинг
   * RETAILER_CREATED - Мерчант создан в процессинге
   * TERMINAL_CREATED - Терминал создан в процессинге
   * FILE_SENT - файл отправлен в НСПК
   * REG - Зарегистрирован
   * CLOSE - Закрыт
   * OPEN_ACCOUNT - Счёт открыт
   */
  async getRetailers(dto: GetRetailersDto) {
    return this.tochkaHttpService.get<GetRetailersResponseDto>(
      `/acquiring/v1.0/retailers?customerCode=${dto.customerCode}`,
    );
  }
}
