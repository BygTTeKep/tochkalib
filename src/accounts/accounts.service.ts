import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { GetAccountsListResponseDto } from './interfaces/getAccountsList.interface.js';
import {
  GetAccountInfoDto,
  GetAccountInfoResponseDto,
} from './interfaces/getAccountInfo.interface.js';

@Injectable()
export class AccountsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения списка доступных счетов
   * Необходимые разрешения: ReadAccountsBasic,ReadAccountsDetail
   * @returns GetAccountsListResponseDto
   */
  async getAccountsList() {
    return this.tochkaHttpService.get<GetAccountsListResponseDto>(
      '/open-banking/v1.0/accounts',
    );
  }

  /**
   * Метод для получения информации по конкретному счёту
   * Необходимые разрешения: ReadAccountsBasic,ReadAccountsDetail
   * @returns GetAccountInfoResponseDto
   */
  async getAccountInfo(dto: GetAccountInfoDto) {
    return this.tochkaHttpService.get<GetAccountInfoResponseDto>(
      `/open-banking/v1.0/accounts/${dto.accountId}`,
    );
  }
}
