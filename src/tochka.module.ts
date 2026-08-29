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
      ],
      exports: [PaymentsLinksService, ClientsService, PaymentsService],
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
      ],
      exports: [PaymentsService, ClientsService, PaymentsService],
    };
  }
}
