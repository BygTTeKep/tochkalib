import { PositionDto } from '../../invoices/index.js';
import { DocumentFunction } from '../enums/documentFunction.enum.js';
import { ShipmentDocumentDto } from './shipmentsDocuments.interface.js';

export interface BaseContentDto {
  Positions: PositionDto[];
  /**
   * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
   * Пример: 2010-10-29
   */
  date?: string;

  /**
   * Сумма всех позиций с НДС
   * Возможные значения: >= 0
   * Пример: 1234.56
   */
  totalAmount: number;

  /**
   * Сумма НДС
   * Возможные значения: >= 0
   * Пример: 1234.56
   */
  totalNds?: number;
}

export interface ContentActDto extends BaseContentDto {
  /**
   * Номер акта
   * Пример: 1
   */
  number: string;

  /**
   * Документ, на основании которого вы выставляете акт
   * Пример: Основание платежа
   */
  basedOn?: string;
}

export interface ContentPackingListDto extends BaseContentDto {
  /**
   * Номер товарной накладной
   * Пример: 1
   */
  number: string;

  /**
   * Документ, на основании которого вы выставляете накладную
   * Пример: Основание платежа
   */
  basedOn?: string;
}

export interface ContentInvoicef extends BaseContentDto {
  /**
   * Номер счёт-фактуры
   * Пример: 1
   */
  number: string;

  /**
   * Документ, на основании которого выставляется счёт
   * Пример: Основание платежа
   */
  basedOn?: string;

  shipmentDocuments?: ShipmentDocumentDto[];
}

export interface ContentUpd extends BaseContentDto {
  /**
   * Функция документа
   * dop — первичный документ
   * schfdop — счёт-фактура и первичный документ
   * Возможные значения: [dop, schfdop]
   * Пример: dop
   */
  function: DocumentFunction;

  /**
   * Номер счёт-фактуры
   * Пример: 1
   */
  number: string;

  /**
   * Документ, на основании которого выставляется счёт
   * Пример: Основание платежа
   */
  basedOn?: string;

  shipmentDocuments?: ShipmentDocumentDto[];
}
