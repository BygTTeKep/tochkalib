import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  GetStatemetDto,
  GetStatemetResponseDto,
} from './intefaces/getStatement.interface.js';
import {
  InitStatementDto,
  InitStatementResponseDto,
} from './intefaces/initStatement.interface.js';
import { GetStatementsListResponseDto } from './intefaces/getStatementsList.interface.js';

@Injectable()
export class StatementsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для получения конкретной выписки
   * После вызова метода Init Statement с помощью statementId можно отследить,на каком этапе создание определённой выписки.
   * Есть три статуса: Created — создан запрос на выписку; Processing — запрос в обработке; Ready — выписка готова.
   * Особенности: Метод Init Statement отрабатывает асинхронно.Отражаются только операции, находящиеся в финальном статусе — Ready.
   * Необходимые разрешения: ReadStatements
   * @param dto GetStatemetDto
   * @returns GetStatemetResponseDto
   */
  async getStatemet(dto: GetStatemetDto) {
    return this.tochkaHttpService.get<GetStatemetResponseDto>(
      `/open-banking/v1.0/accounts/${dto.accountId}/statements/${dto.statementId}`,
    );
  }

  /**
   * Метод для создания выписки по конкретному счёту
   * Необходимые разрешения: ReadStatements
   * @param dto InitStatementDto
   * @returns InitStatementResponseDto
   */
  async initStatement(dto: InitStatementDto) {
    return this.tochkaHttpService.post<InitStatementResponseDto>(
      '/open-banking/v1.0/statements',
      dto,
    );
  }

  /**
   * Метод для получения списка доступных выписок
   * После вызова метода Init Statement можно отследить, в каком статусе готовящаяся выписка: Created — только создан запрос на выписку; Processing — запрос в обработке; Ready — выписка готова.
   *  Особенности: Отражаются только операции, находящиеся в финальном статусе — Ready.
   * @returns
   */
  async getStatementsList() {
    return this.tochkaHttpService.get<GetStatementsListResponseDto>(
      '/open-banking/v1.0/statements',
    );
  }
}
