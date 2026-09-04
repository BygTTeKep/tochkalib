export interface DigitalRubleWalletDto {
  /**
   * Время регистрации
   * Пример: 2019-01-01T06:06:06.364+00:00
   */
  createdAt: string;
  /**
   * Идентификатор счета цифрового рубля
   * Пример: g.ru.cbrdc.wlt.clt.cdbab25e-a448-476a-922a-bd0de7864819
   */
  walletId: string;

  /**
   * БИК банка
   * Пример: 044525104
   */
  bankCode: string;

  /**
   * Статус счета цифрового рубля
   * Пример: ACTV
   */
  walletStatus: string;
}
