import { FrequencyOfWriteOffs } from '../enums/frequencyOfWriteOffs.enum.js';

export interface SubscriptionsOptionsDto {
  /**
   * Количество списаний по подписке
   * Возможные значения: > 0
   * Значение по умолчанию: 12
   * Пример: 12
   */
  trancheCount?: number;

  /**
   * Периодичность списания
   * Возможные значения: [Day, Month, Year]
   * Значение по умолчанию: Month
   * Пример: Month
   */
  period?: FrequencyOfWriteOffs;
  /**
   * Длина периодичности в днях. Работает только с периодом Day
   * Возможные значения: > 0
   * Пример: 14
   */
  daysInPeriod?: number;
}
