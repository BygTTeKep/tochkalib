import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import type {
  CreateSubscriptionDto,
  CreateSubscriptionResponseDto,
} from './interfaces/createSubscription.interface.js';
import {
  GetSubscriptionListDto,
  GetSubscriptionListResponseDto,
} from './interfaces/getSubscriptionList.interface.js';
import {
  ChargeSubscriptionDto,
  ChargeSubscriptionResponseDto,
} from './interfaces/chargeSubscription.interface.js';
import {
  SetSubscriptionStatusDto,
  SetSubscriptionStatusResponseDto,
} from './interfaces/setSubscriptionStatus.interface.js';
import {
  GetSubscriptionStatusDto,
  GetSubscriptionStatusResponseDto,
} from './interfaces/getSubscriptionStatus.interface.js';
import {
  CreateSubscriptionWithReceiptDto,
  CreateSubscriptionWithReceiptResponseDto,
} from './interfaces/createSubscriptionWithReceipt.interface.js';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для создания подписки по карте
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto - CreateSubscriptionDto
   * @returns
   */
  async createSubscription(dto: CreateSubscriptionDto) {
    return this.tochkaHttpService.post<CreateSubscriptionResponseDto>(
      '/acquiring/v1.0/subscriptions',
      dto,
    );
  }
  /**
   * Метод для получения всех подписок
   * Необходимые разрешения: ReadAcquiringData
   * @param dto GetSubscriptionListDto
   * @returns GetSubscriptionListResponseDto
   */
  async getSubscriptionList(dto: GetSubscriptionListDto) {
    const queryParams = new URLSearchParams();
    queryParams.append('customerCode', dto.customerCode);
    if (dto?.page) {
      queryParams.append('page', dto.page.toString());
    }
    if (dto?.perPage) {
      queryParams.append('perPage', dto.perPage.toString());
    }
    if (dto?.recurring !== null && dto?.recurring !== undefined) {
      queryParams.append('recurring', String(dto.recurring));
    }
    return this.tochkaHttpService.get<GetSubscriptionListResponseDto>(
      `/acquiring/v1.0/subscriptions?${queryParams.toString()}`,
    );
  }

  /**
   * Метод для списания средств по рекуррентной подписке
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto ChargeSubscriptionDto
   * @returns ChargeSubscriptionResponseDto
   */
  async chargeSubscription(dto: ChargeSubscriptionDto) {
    return this.tochkaHttpService.post<ChargeSubscriptionResponseDto>(
      `/acquiring/v1.0/subscriptions/${dto.operationId}/charge`,
      {},
    );
  }

  /**
   * Метод для установки статуса подписки
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto SetSubscriptionStatusDto
   * @returns SetSubscriptionStatusResponseDto
   */
  async setSubscriptionStatus(dto: SetSubscriptionStatusDto) {
    return this.tochkaHttpService.post<SetSubscriptionStatusResponseDto>(
      `/acquiring/v1.0/subscriptions/${dto.operationId}/status`,
      { Data: dto.Data },
    );
  }

  /**
   * Метод для получения актуального статуса подписки
   * Необходимые разрешения: ReadAcquiringData
   * @param dto GetSubscriptionStatusDto
   * @returns GetSubscriptionStatusResponseDto
   */
  async getSubscriptionStatus(dto: GetSubscriptionStatusDto) {
    return this.tochkaHttpService.get<GetSubscriptionStatusResponseDto>(
      `/acquiring/v1.0/subscriptions/${dto.operationId}/status`,
    );
  }

  /**
   * Метод для создания подписки по карте и отправке чека
   * Необходимые разрешения: MakeAcquiringOperation
   * @param dto CreateSubscriptionWithReceiptDto
   * @returns CreateSubscriptionWithReceiptResponseDto
   */
  async createSubscriptionWithReceipt(dto: CreateSubscriptionWithReceiptDto) {
    return this.tochkaHttpService.post<CreateSubscriptionWithReceiptResponseDto>(
      '/acquiring/v1.0/subscriptions_with_receipt',
      dto,
    );
  }
}
