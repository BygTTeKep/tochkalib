import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';

export interface GetCustomerInfoDto {
  /**
   * Идентификатор клиента
   * Пример: 300000092
   */
  customerCode: string;
}

export interface GetCustomerInfoDataResponseDto {
  /**
   * Уникальный код клиента
   * Возможные значения: <= 9 characters
   * Пример: 300000092
   */
  customerCode: string;

  /**
   * Тип клиент (физическое или юридическое лицо)
   * Возможные значения: [Business, Personal]
   * Пример: Personal
   */
  customerType: string;

  /**
   * Признак резидента
   * Пример: true
   */
  isResident: boolean;

  /**
   * ИНН
   * Пример: 660000000000
   */
  taxCode?: string;

  /**
   * Полное наименование
   * Пример: Индивидуальный Предприниматель Тест
   */
  fullName: string;

  /**
   * Краткое наименование
   * Пример: ИП Тест
   */
  shortName?: string;

  /**
   * КПП
   * Пример: 668501001
   */
  kpp?: string;

  /**
   * ОГРН или ОГРНИП
   * Пример: 319665800211661
   */
  customerOgrn?: string;
}
export interface GetCustomerInfoLinksResponseDto extends BaseLinksResponse {}
export interface GetCustomerInfoMetaResponseDto extends BaseMetaResponse {}

export interface GetCustomerInfoResponseDto {
  Data: GetCustomerInfoDataResponseDto;
  Links: GetCustomerInfoLinksResponseDto;
  Meta: GetCustomerInfoMetaResponseDto;
}
