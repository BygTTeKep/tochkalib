import { DynamicModule, Module } from '@nestjs/common';
import {
  TochkaModuleAsyncOptions,
  TochkaModuleOptions,
} from './intefaces/tochkaModuleOptions.interface.js';
import { TOCHKA_MODULE_OPTIONS } from './tochka.constants.js';
import { PaymentsService } from './paymentsLinks/paymentsLinks.service.js';
import { TochkaHttpService } from './http/tochkaHttp.service.js';
import { ClientsService } from './clients/clients.service.js';

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
        PaymentsService,
        ClientsService,
        PaymentsService,
      ],
      exports: [
        TochkaHttpService,
        PaymentsService,
        ClientsService,
        PaymentsService,
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
      ],
      exports: [
        TochkaHttpService,
        PaymentsService,
        ClientsService,
        PaymentsService,
      ],
    };
  }
}
