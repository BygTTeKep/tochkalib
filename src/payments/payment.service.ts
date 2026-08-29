import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  CreatePaymentForSignDto,
  CreatePaymentForSignResponseDto,
} from './interfaces/createPaymentForSign.interface.js';
import {
  GetPaymentForSignListDto,
  GetPaymentForSignListResponseDto,
} from './interfaces/getPaymentForSignList.interface.js';
import {
  GetPaymentStatusDto,
  GetPaymentStatusResponseDto,
} from './interfaces/getPaymentStatus.inteface.js';

@Injectable()
export class PaymentsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для создания платежа.
   * Чтобы платёж прошёл, его нужно будет подписать в интернет-банке.
   * Если вы создаёте платёж за третье лицо, поля payerINN и payerKPP обязательные для заполнения. Если платите за себя в бюджет, поле payerKPP становится обязательным.
   * Обратите внимание: paymentDate нужно заполнить по часовому поясу Москвы.
   * Необходимые разрешения: CreatePaymentForSignResponseDto
   */
  async createPaymentForSign(dto: CreatePaymentForSignDto) {
    return this.tochkaHttpService.post<CreatePaymentForSignResponseDto>(
      '/payment/v1.0/for-sign',
      dto,
    );
  }

  /**
   * Метод получения списка платежей на подпись
   * Необходимые разрешения: CreatePaymentForSign
   * @param dto GetPaymentForSignListDto
   * @returns GetPaymentForSignListResponseDto
   */
  async getPaymentForSignList(dto: GetPaymentForSignListDto) {
    return this.tochkaHttpService.get<GetPaymentForSignListResponseDto>(
      `/payment/v1.0/for-sign?customerCode=${dto.customerCode}`,
    );
  }
  /**
   * Метод для получения статуса платежа
   * @param dto GetPaymentStatusDto
   * @returns GetPaymentStatusResponseDto
   */
  async getPaymentStatus(dto: GetPaymentStatusDto) {
    return this.tochkaHttpService.get<GetPaymentStatusResponseDto>(
      `/payment/v1.0/status/${dto.requestId}`,
    );
  }
}
