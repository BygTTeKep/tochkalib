import { PaymentMethod } from '../enums/paymentMethod.enum.js';
import { VatType } from '../enums/vatType.enum.js';
import type { PaymentLinksSupplierDto } from './paymentLinksSupplier.interface.js';

export interface PaymentLinksItemsDto {
  /**
   * Ставка НДС
   * Возможные значения: [none, vat0, vat5, vat7, vat10, vat20, vat22, vat105, vat107, vat110, vat120, vat122]
   */
  vatType?: VatType[];
  /**
   * Название товара
   * Возможные значения: non-empty and <= 256 characters
   */
  name: string;
  /**
   * Цена за единицу товара
   * Пример: 1234.00
   */
  amount: number;
  /**
   * Количество товара
   * Пример: 1
   */
  quantity: number;
  /**
   * Тип оплаты
   * Возможные значения: [full_payment, full_prepayment]
   * Пример: full_payment
   */
  paymentMethod?: PaymentMethod;
  /**
   * Признак предмета расчёта
   * Возможные значения: [goods, service, work]
   * Пример: service
   */
  paymentObject?: string;
  /**
   * Единица измерения. По умолчанию - штуки
   * Возможные значения: [г., кг., т., см., дм., м., см2., дм2., м2., мл., л., м3, кВт.ч., Гкал., дн., ч., мин., сек., Кб., Мб., Гб., Тб., шт.]
   * Значение по умолчанию: шт.
   * Пример: шт.
   */
  measure?: string;
  Supplier?: PaymentLinksSupplierDto;
}
