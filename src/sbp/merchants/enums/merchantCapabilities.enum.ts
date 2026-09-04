/**
 * 001 - только QR Static
 * 010 - только QR Dynamic
 * 011 - QR Static и QR Dynamic
 * 100 - Только QR Subscription
 * 101 - QR Subscription и QR Static
 * 110 - QR Subscription и QR Dynamic
 * 111 - QR Static, QR Dynamic и QR Subscription
 */
export enum MerchantCapabilities {
  QR_STATIC = '001',
  QR_DYNAMIC = '010',
  QR_STATIC_AND_QR_DYNAMIC = '011',
  QR_SUBSCRIPTION = '100',
  QR_SUBSCRIPTION_AND_QR_STATIC = '101',
  QR_SUBSCRIPTION_AND_QR_DYNAMIC = '110',
  QR_STATIC_AND_QR_DYNAMIC_AND_QR_SUBSCRIPTION = '111',
}
