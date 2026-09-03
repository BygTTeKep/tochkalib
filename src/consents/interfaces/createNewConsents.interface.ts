import {
  BaseLinksResponse,
  BaseMetaResponse,
} from '../../intefaces/baseTochkaResponse.interface.js';
import { ConsentPermissions } from '../enums/consentPermissions.enum.js';
import { ConsentStatus } from '../enums/consentStatus.enum.js';
import { ConsentDto } from './consent.interface.js';

export interface CreateNewConsentsDataDto {
  /**
   * Статус разрешения
   * Constant value: AwaitingAuthorisation
   * Значение по умолчанию: AwaitingAuthorisation
   * Пример: AwaitingAuthorisation
   */
  status?: ConsentStatus;
  /**
   * Дата и время создания статуса ресурса. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  creationDateTime?: string;

  /**
   * Дата и время обновления статуса ресурса. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  statusUpdateDateTime?: string;
  /**
   * Указание типов данных доступа.
   * Возможные значения: [ReadAccountsBasic, ReadAccountsDetail, ReadBalances, ReadStatements, ReadTransactionsBasic, ReadTransactionsCredits, ReadTransactionsDebits, ReadTransactionsDetail, ReadCustomerData, ReadSBPData, EditSBPData, CreatePaymentForSign, CreatePaymentOrder, ReadAcquiringData, MakeAcquiringOperation, ManageInvoiceData, ManageWebhookData, MakeCustomer, ManageGuarantee, ManageEdoData, ReadBiApi, ReadCustomerDataMcp, ReadAccountsMcp, ReadBalancesMcp, ReadStatementsMcp, CreatePaymentForSignMcp, ReadFeedbackData, EditFeedbackData]
   * Пример: ["ReadAccountsBasic"]
   */
  permissions: ConsentPermissions[];

  /**
   * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601.
   * Если нужны бессрочные разрешения, параметр можно не передавать.
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  expirationDateTime?: string;
}

export interface CreateNewConsentsDto {
  Data: CreateNewConsentsDataDto;
  Risks?: Record<string, unknown>;
}

export interface CreateNewConsentsResponseDataDto {
  Consent: ConsentDto[];
}
export interface CreateNewConsentsResponseLinksDto extends BaseLinksResponse {}
export interface CreateNewConsentsResponseMetaDto extends BaseMetaResponse {}

export interface CreateNewConsentsResponseDto {
  Data: CreateNewConsentsResponseDataDto;
  Links: CreateNewConsentsResponseLinksDto;
  Meta: CreateNewConsentsResponseMetaDto;
}
