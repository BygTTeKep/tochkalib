import type {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { PaymentMode } from '../enums/paymentMode.enum.js';
import { RegisterStatus } from '../enums/registerStatus.enum.js';

export interface GetRetailersDto {
  /**
   * Уникальный код клиента
   * Пример: 300000092
   */
  customerCode: string;
}

export interface GetRetailersRetailerResponseDto {
  /**
   * Статус регистрации
   * Возможные значения: [NEW, ADDRESS_DADATA, OPEN_ACCOUNT, TWPG_SENDED, RETAILER_CREATED, TERMINAL_CREATED, FILE_SENT, REG, CLOSE]
   * Пример: REG
   */
  status: RegisterStatus;
  /**
   * Статус готовности к работе
   * Пример: true
   */
  isActive: boolean;
  /**
   * Код МСС
   * Пример: 5111
   */
  mcc: string;
  /**
   * Комиссия
   * Пример: 2.6
   */
  rate: number;

  /**
   * Наименование
   * Пример: ООО Альтер
   */
  name: string;
  /**
   * Сайт регистрации
   * Пример: https://alter.ru
   */
  url?: string;
  /**
   * ID мерчанта
   * Может отсутствовать при значениях поля status: NEW, ADDRESS_DADATA и OPEN_ACCOUNT
   * Пример: 200000000001056
   */
  merchantId?: string;
  /**
   * ID терминала
   * Будет заполнен при значениях поля status: TERMINAL_CREATED, FILE_SENT, REG
   * Пример: 20000032
   */
  terminalId?: string;
  /**
   * Способ оплаты
   * Возможные значения: [sbp, card, tinkoff, dolyame]
   * Пример: ["sbp","card","tinkoff","dolyame"]
   */
  paymentModes: PaymentMode[];
  /**
   * Название подключённой кассы
   * Пример: businessRu
   */
  cashbox?: string;
}

export interface GetRetailersDataResponseDto {
  Retailer: GetRetailersRetailerResponseDto[];
}

export interface GetRetailersLinksResponseDto extends BaseLinksResponse {}
export interface GetRetailersMetaResponseDto extends BaseMetaResponse {}

export interface GetRetailersResponseDto {
  Data: GetRetailersDataResponseDto;
  Links: GetRetailersLinksResponseDto;
  Meta: GetRetailersMetaResponseDto;
}
