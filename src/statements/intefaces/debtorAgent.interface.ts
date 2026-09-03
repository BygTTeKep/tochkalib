export interface DeptorAgentDto {
  /**
   * БИК/SWIFT банка агента
   * Возможные значения: [RU.CBR.BICFI, RU.CBR.BIK]
   * Пример: RU.CBR.BIK
   */
  schemeName?: string;

  /**
   * БИК/SWIFT банка агента
   * Возможные значения: <= 35 characters
   * Пример: 000555777
   */
  identification?: string;

  /**
   * Номер кор. счета банка агента
   * Пример: 000555777
   */
  accountIdentification?: string;

  /**
   * Наименование банка агента
   * Возможные значения: <= 160 characters
   * Пример: ПАО...
   */
  name?: string;
}
