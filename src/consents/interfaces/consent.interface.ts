import { ConsentPermissions } from '../enums/consentPermissions.enum.js';
import { ConsentStatus } from '../enums/consentStatus.enum.js';

export interface ConsentDto {
  /**
   * Статус разрешения
   * Возможные значения: [AwaitingAuthorisation, Authorised, Rejected, Revoked]
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
   * Возможные значения: [ReadAccountsBasic, ReadAccountsDetail, ReadBalances, ReadStatements, ReadTransactionsBasic, ReadTransactionsCredits, ReadTransactionsDebits, ReadTransactionsDetail, ReadCustomerData, ReadSBPData, EditSBPData, ReadSBPData1C, EditSBPData1C, CreatePaymentForSign, CreatePaymentOrder, ReadAcquiringData, MakeAcquiringOperation, ManageInvoiceData, ManageWebhookData, MakeCustomer, ManageGuarantee, ManageEdoData, ReadBiApi, ReadCustomerDataMcp, ReadAccountsMcp, ReadBalancesMcp, ReadStatementsMcp, CreatePaymentForSignMcp, ReadFeedbackData, EditFeedbackData]
   * Пример: ["ReadAccountsBasic"]
   */
  permissions: ConsentPermissions[];

  /**
   * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  expirationDateTime?: string;

  /**
   * Уникальный идентификатор, предназначенный для идентификации разрешения
   * Возможные значения: <= 128 characters
   * Пример: tochka-intent-88379
   */
  consentId: string;

  /**
   * Уникальный код клиента
   * Возможные значения: <= 9 characters
   * Пример: 300000092
   */
  customerCode?: string;

  /**
   * Название приложения
   * Возможные значения: <= 60 characters
   * Пример: Test
   */
  applicationName?: string;

  /**
  * ID приложения в oAuth
* Возможные значения: <= 60 characters
* Пример: Test

  */
  clientId?: string;

  /**
   * Isvalid
   * Показывает истек срок разрешения или нет
   */
  isValid?: boolean;
}
