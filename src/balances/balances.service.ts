import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  GetAuthorizedCardTransactionsDto,
  GetAuthorizedCardTransactionsResponseDto,
} from './interfaces/getAuthorizedCardTransactions.interface.js';
import {
  GetBalanceInfoDto,
  GetBalanceInfoResponseDto,
} from './interfaces/getBalanceInfo.interface.js';
import { GetBalancesListResponseDto } from './interfaces/getBalancesList.interface.js';

@Injectable()
export class BalancesService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения авторизованных карточных транзакций конкретного счёта
   * Необходимые разрешения: ReadBalances
   * @param dto GetAuthorizedCardTransactionsDto
   * @returns GetAuthorizedCardTransactionsResponseDto
   */
  async getAuthorizedCardTransactions(dto: GetAuthorizedCardTransactionsDto) {
    return this.tochkaHttpService.get<GetAuthorizedCardTransactionsResponseDto>(
      `/open-banking/v1.0/accounts/${dto.accountId}/authorized-card-transactions`,
    );
  }

  /**
   * Метод для получения информации о балансе конкретного счёта
   * Необходимые разрешения: ReadBalances
   * @param dto GetBalanceInfoDto
   * @returns GetBalanceInfoResponseDto
   */
  async getBalanceInfo(dto: GetBalanceInfoDto) {
    return this.tochkaHttpService.get<GetBalanceInfoResponseDto>(
      `/open-banking/v1.0/accounts/${dto.accountId}/balances`,
    );
  }

  /**
   * Метод для получения баланса по нескольким счетам\
   * Необходимые разрешения: ReadBalances
   * @returns GetBalancesListResponseDto
   */
  async getBalancesList() {
    return this.tochkaHttpService.get<GetBalancesListResponseDto>(
      '/open-banking/v1.0/balances',
    );
  }
}
