import { DynamicModule, Module } from '@nestjs/common';
import {
  TochkaModuleAsyncOptions,
  TochkaModuleOptions,
} from './intefaces/tochkaModuleOptions.interface.js';
import { TOCHKA_MODULE_OPTIONS } from './tochka.constants.js';
import { PaymentsLinksService } from './paymentsLinks/paymentsLinks.service.js';
import { TochkaHttpService } from './http/tochkaHttp.service.js';
import { ClientsService } from './clients/clients.service.js';
import { PaymentsService } from './payments/payment.service.js';
import { AccountsService } from './accounts/accounts.service.js';
import { SubscriptionsService } from './subscriptions/subscriptions.service.js';
import { BalancesService } from './balances/balances.service.js';
import { WebhooksService } from './webhooks/webhooks.service.js';
import { StatementsService } from './statements/statements.service.js';
import { InvoicesService } from './invoices/invoices.service.js';
import { ClosingDocumentsService } from './closingDocuments/closingDocuments.service.js';
import { ConsentsService } from './consents/consents.service.js';
import { B2BQrCodeService } from './sbp/b2bQr/b2bQr.service.js';
import { CashboxQrService } from './sbp/cashboxQr/cashboxQr.service.js';
import { LegalEntityService } from './sbp/legalEntity/legalEntity.service.js';
import { MerchantsService } from './sbp/merchants/merchants.service.js';
import { QrCodesService } from './sbp/qrCodes/qrCodes.service.js';
import { RefundsService } from './sbp/refunds/refunds.service.js';

@Module({})
export class TochkaModule {
  static forRoot(options: TochkaModuleOptions): DynamicModule {
    return {
      module: TochkaModule,
      global: options.isGlobal ?? false,
      providers: [
        {
          provide: TOCHKA_MODULE_OPTIONS,
          useValue: options,
        },
        TochkaHttpService,
        PaymentsLinksService,
        ClientsService,
        PaymentsService,
        AccountsService,
        SubscriptionsService,
        BalancesService,
        WebhooksService,
        StatementsService,
        InvoicesService,
        ClosingDocumentsService,
        ConsentsService,
        B2BQrCodeService,
        CashboxQrService,
        LegalEntityService,
        MerchantsService,
        QrCodesService,
        RefundsService,
      ],
      exports: [
        PaymentsService,
        ClientsService,
        PaymentsService,
        AccountsService,
        SubscriptionsService,
        BalancesService,
        WebhooksService,
        StatementsService,
        InvoicesService,
        ClosingDocumentsService,
        ConsentsService,
        B2BQrCodeService,
        CashboxQrService,
        LegalEntityService,
        MerchantsService,
        QrCodesService,
        RefundsService,
      ],
    };
  }
  static forRootAsync(options: TochkaModuleAsyncOptions): DynamicModule {
    return {
      module: TochkaModule,
      global: options.isGlobal ?? false,
      imports: options.imports ?? [],
      providers: [
        {
          provide: TOCHKA_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject ?? [],
        },
        TochkaHttpService,
        PaymentsService,
        ClientsService,
        PaymentsService,
        AccountsService,
        SubscriptionsService,
        BalancesService,
        WebhooksService,
        StatementsService,
        InvoicesService,
        ClosingDocumentsService,
        ConsentsService,
        B2BQrCodeService,
        CashboxQrService,
        LegalEntityService,
        MerchantsService,
        QrCodesService,
        RefundsService,
      ],
      exports: [
        PaymentsService,
        ClientsService,
        PaymentsService,
        AccountsService,
        SubscriptionsService,
        BalancesService,
        WebhooksService,
        StatementsService,
        InvoicesService,
        ClosingDocumentsService,
        ConsentsService,
        B2BQrCodeService,
        CashboxQrService,
        LegalEntityService,
        MerchantsService,
        QrCodesService,
        RefundsService,
      ],
    };
  }
}
