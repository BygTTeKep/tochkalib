import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../../http/tochkaHttp.service.js';
import {
  GetPaymentsDto,
  GetPaymentsResponseDto,
} from './interfaces/getPayments.interface.js';
import {
  StartRefundDataDto,
  StartRefundResponseDto,
} from './interfaces/startRefund.interface.js';
import {
  GetRefundDataDto,
  GetRefundDataResponseDto,
} from './interfaces/getRefundData.interface.js';

@Injectable()
export class RefundsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка платежей в Системе быстрых платежей
   * Обратите внимание: при поиске платежей за прошедшие дни обязательно передавать атрибут fromDate с указанием начальной даты периода. Если этот атрибут не передать, поиск выдаст результаты только за вчерашний и сегодняшний дни.
   * Необходимые разрешения: ReadSBPData
   * @param dto GetPaymentsDto
   * @returns GetPaymentsResponseDto
   */
  async getPayments(dto: GetPaymentsDto) {
    const params = new URLSearchParams();
    params.append('customerCode', dto.customerCode);
    if (dto.fromDate) {
      params.append('fromDate', dto.fromDate);
    }
    if (dto.page) {
      params.append('page', dto.page.toString());
    }
    if (dto.perPage) {
      params.append('perPage', dto.perPage.toString());
    }
    if (dto.qrcId) {
      params.append('qrcId', dto.qrcId);
    }
    if (dto.toDate) {
      params.append('toDate', dto.toDate);
    }
    return this.tochkaHttpService.get<GetPaymentsResponseDto>(
      `/sbp/v1.0/get-sbp-payments?${params.toString()}`,
    );
  }

  /**
   * Метод запрашивает возврат платежа через Систему быстрых платежей
   * Если нужно вернуть деньги нерезиденту, назначение платежа должно начинаться с «{VO99020} Возврат ошибочно полученной суммы transactionId», где transactionId — это идентификатор оригинальной операции.
   * @param dto StartRefundDataDto
   * @returns StartRefundResponseDto
   */
  async startRefund(dto: StartRefundDataDto) {
    return this.tochkaHttpService.post<StartRefundResponseDto>(
      '/sbp/v1.0/refund',
      dto,
    );
  }

  /**
   * Метод для получения информация о платеже-возврате по Системе быстрых платежей
   * Необходимые разрешения: ReadSBPData
   * @param dto GetRefundDataDto
   * @returns GetRefundDataResponseDto
   */
  async getRefundData(dto: GetRefundDataDto) {
    return this.tochkaHttpService.get<GetRefundDataResponseDto>(
      `/sbp/v1.0/refund/${dto.request_id}`,
    );
  }
}
