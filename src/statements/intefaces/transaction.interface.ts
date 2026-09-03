import { AmountDto } from '../../balances/index.js';
import { CreditDebitIndicator } from '../enums/creditDebitIndicator.enum.js';
import { TransactionStatus } from '../enums/transactionStatus.enum.js';
import { TransactionTypeCode } from '../enums/transactionTypeCode.enum.js';
import { CreditorAccountDto } from './creditorAccount.interface.js';
import { CreditorAgentDto } from './creditorAgent.interface.js';
import { CreditorPartyDto } from './creditorParty.interface.js';
import { DeptorAgentDto } from './debtorAgent.interface.js';
import { DebtorPartyDto } from './debtorParty.interface.js';
import { DebtorAccountDto } from './deptorAccount.interface.js';
import { TaxFieldsDto } from './taxFields.interface.js';

export interface TransactionDto {
  /**
   * Уникальный идентификатор транзакции
   * Возможные значения: <= 210 characters
   * Пример: 23489
   */
  transactionId?: string;

  /**
   * Уникальный идентификатор платежа, по которому произошла транзакция
   * Пример: abcd-11234
   */
  paymentId?: string;

  /**
   * Приход/Уход
   * Возможные значения: [Credit, Debit]
   * Пример: Credit
   */
  creditDebitIndicator: CreditDebitIndicator;

  /**
   * Статус транзакции
   * Возможные значения: [Booked, Pending]
   * Пример: Booked
   */
  status: TransactionStatus;

  /**
   * Номер платежного документа
   * Возможные значения: <= 12 characters
   * Пример: 123456
   */
  documentNumber?: string;

  /**
   * Код типа транзакции (Вид платежного документа)
   * Возможные значения: [Неопределенное значение, Платежное поручение, Платежное требование, Денежный чек, РКО, Объявление на взнос наличными, ПКО, Требование-поручение, Инкассовое поручение, Расчетный чек, Аккредитив, Мемориальный ордер, Погашение кредита, Выдача кредита, Авизо, Банковские карты, Платежный ордер, Банковский ордер, Ордер по передаче ценностей, Программный ордер, Импортированная запись]
   * Пример: Платежный ордер
   */
  transactionTypeCode?: TransactionTypeCode;

  /**
   * Дата отражения на балансе
   * Пример: 2019-01-01
   */
  documentProcessDate?: string;

  /**
   * Назначение платежа
   * Пример: string
   */
  description?: string;
  Amount: AmountDto;
  DebtorParty?: DebtorPartyDto;
  DebtorAccount?: DebtorAccountDto;
  DebtorAgent?: DeptorAgentDto;
  CreditorParty?: CreditorPartyDto;
  CreditorAccount?: CreditorAccountDto;
  CreditorAgent?: CreditorAgentDto;
  TaxFields: TaxFieldsDto;
}
