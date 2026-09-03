import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  CreateInvoiceDto,
  CreateInvoiceResponseDto,
} from './interfaces/createInvoice.interface.js';
import {
  DeleteInvoiceDto,
  DeleteInvoiceResponseDto,
} from './interfaces/deleteInvoice.interface.js';
import {
  SendInvoiceToEmailDto,
  SendInvoiceToEmailResponseDto,
} from './interfaces/sendInvoiceToEmail.inteface.js';
import { GetInvoiceDto } from './interfaces/getInvoice.interface.js';
import {
  GetInvoicePaymentStatusDto,
  GetInvoicePaymentStatusResponseDto,
} from './interfaces/getInvoicePaymentStatus.intrface.js';

@Injectable()
export class InvoicesService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для создания счёта на оплату
   * Необходимые разрешения: ManageInvoiceData
   * @param dto CreateInvoiceDto
   * @returns CreateInvoiceResponseDto
   */
  async createInvoice(dto: CreateInvoiceDto) {
    return this.tochkaHttpService.post<CreateInvoiceResponseDto>(
      '/invoice/v1.0/bills',
      dto,
    );
  }

  /**
   * Метод для удаления счёта на оплату
   * Необходимые разрешения: ManageInvoiceData
   * @param dto DeleteInvoiceDto
   * @returns
   */
  async deleteInvoice(dto: DeleteInvoiceDto) {
    return this.tochkaHttpService.delete<DeleteInvoiceResponseDto>(
      `/invoice/v1.0/bills/${dto.customerCode}/${dto.documentId}`,
    );
  }

  /**
   * Метод для отправки счёта на почту
   * Необходимые разрешения: ManageInvoiceData
   * @param dto SendInvoiceToEmailDto
   * @returns SendInvoiceToEmailResponseDto
   */
  async sendInvoiceToEmail(dto: SendInvoiceToEmailDto) {
    return this.tochkaHttpService.post<SendInvoiceToEmailResponseDto>(
      `/invoice/v1.0/bills/${dto.PathParameters.customerCode}/${dto.PathParameters.documentId}/email`,
      { ...dto.Body },
    );
  }
  /**
   * Метод для получения файла выставленного счёта
   * Необходимые разрешения: ManageInvoiceData
   * @param dto GetInvoiceDto
   * @returns application/pdf
   */
  async getInvoice(dto: GetInvoiceDto) {
    return this.tochkaHttpService.get(
      `/invoice/v1.0/bills/${dto.customerCode}/${dto.documentId}/file`,
    );
  }

  /**
   * Метод для получения статуса счёта
   * Необходимые разрешения: ManageInvoiceData
   * @param dto GetInvoicePaymentStatusDto
   * @returns GetInvoicePaymentStatusResponseDto
   */
  async getInvoicePaymentStatus(dto: GetInvoicePaymentStatusDto) {
    return this.tochkaHttpService.get<GetInvoicePaymentStatusResponseDto>(
      `/invoice/v1.0/bills/${dto.customerCode}/${dto.documentId}/payment-status`,
    );
  }
}
