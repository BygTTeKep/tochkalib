# tochkalib

NestJS-библиотека для работы с [API банка Точка](https://developers.tochka.com/docs/tochka-api/).

Предоставляет типизированные сервисы для счетов, платежей, эквайринга, СБП, выписок, счетов на оплату, вебхуков и других разделов Open Banking API.

## Требования

- Node.js 18+
- NestJS 11 или 12
- JWT-токен с нужными разрешениями (scopes) для вызываемых методов

## Установка

```bash
npm install tochkalib
```

Peer-зависимости (если ещё не установлены в проекте):

```bash
npm install @nestjs/common @nestjs/core reflect-metadata rxjs
```

## Быстрый старт

### Синхронная конфигурация

```typescript
import { Module } from '@nestjs/common';
import { TochkaModule } from 'tochkalib';

@Module({
  imports: [
    TochkaModule.forRoot({
      jwt: process.env.TOCHKA_JWT!,
      apiKey: process.env.TOCHKA_API_KEY!,
      apiSecret: process.env.TOCHKA_API_SECRET!,
      sandbox: process.env.TOCHKA_SANDBOX === 'true',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
```

### Асинхронная конфигурация через ConfigModule

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TochkaModule } from 'tochkalib';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TochkaModule.forRootAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        jwt: config.getOrThrow<string>('TOCHKA_JWT'),
        apiKey: config.getOrThrow<string>('TOCHKA_API_KEY'),
        apiSecret: config.getOrThrow<string>('TOCHKA_API_SECRET'),
        sandbox: config.get<boolean>('TOCHKA_SANDBOX', true),
      }),
    }),
  ],
})
export class AppModule {}
```

### Параметры модуля

| Параметр    | Тип       | Обязательный | Описание |
|-------------|-----------|--------------|----------|
| `jwt`       | `string`  | да           | Bearer-токен для авторизации запросов к API |
| `apiKey`    | `string`  | да           | Идентификатор приложения в интернет-банке |
| `apiSecret` | `string`  | да           | Секрет приложения |
| `sandbox`   | `boolean` | да           | `true` — песочница, `false` — боевой контур |
| `isGlobal`  | `boolean` | нет          | Сделать модуль глобальным (по умолчанию `false`) |

**Базовые URL:**

- Production: `https://enter.tochka.com/uapi`
- Sandbox: `https://enter.tochka.com/sandbox/v2`

JWT можно получить в [личном кабинете разработчика Точки](https://developers.tochka.com/docs/tochka-api/). Для каждого метода API требуются определённые разрешения — они указаны в JSDoc сервисов и в официальной документации.

## Использование в сервисах

Сервисы внедряются через стандартный DI NestJS:

```typescript
import { Injectable } from '@nestjs/common';
import { AccountsService } from 'tochkalib';

@Injectable()
export class BankService {
  constructor(private readonly accountsService: AccountsService) {}

  async getAccounts() {
    const response = await this.accountsService.getAccountsList();
    return response.Data.Account;
  }
}
```

## Примеры

### Счета

```typescript
import { Injectable } from '@nestjs/common';
import { AccountsService } from 'tochkalib';

@Injectable()
export class AccountsExampleService {
  constructor(private readonly accounts: AccountsService) {}

  async listAccounts() {
    return this.accounts.getAccountsList();
  }

  async getAccount(accountId: string) {
    return this.accounts.getAccountInfo({ accountId });
  }
}
```

### Платёжные ссылки (эквайринг)

```typescript
import { Injectable } from '@nestjs/common';
import { PaymentMode } from 'tochkalib';
import { PaymentsLinksService } from 'tochkalib';

@Injectable()
export class AcquiringExampleService {
  constructor(private readonly paymentsLinks: PaymentsLinksService) {}

  async createPaymentLink() {
    return this.paymentsLinks.createPaymentOperation({
      customerCode: '300000092',
      amount: 1500.0,
      purpose: 'Оплата заказа №123',
      paymentMode: [PaymentMode.SBP, PaymentMode.CARD],
      redirectUrl: 'https://example.com/success',
      failRedirectUrl: 'https://example.com/fail',
      ttl: 60,
    });
  }

  async getOperations(customerCode: string) {
    return this.paymentsLinks.getPaymentOperationList({
      customerCode,
      page: 1,
      perPage: 50,
    });
  }
}
```

### Платежи на подпись

```typescript
import { Injectable } from '@nestjs/common';
import { PaymentsService } from 'tochkalib';

@Injectable()
export class PaymentsExampleService {
  constructor(private readonly payments: PaymentsService) {}

  async createPaymentForSign(dto: Parameters<PaymentsService['createPaymentForSign']>[0]) {
    return this.payments.createPaymentForSign(dto);
  }

  async checkStatus(requestId: string) {
    return this.payments.getPaymentStatus({ requestId });
  }
}
```

### Выписки

```typescript
import { Injectable } from '@nestjs/common';
import { StatementsService } from 'tochkalib';

@Injectable()
export class StatementsExampleService {
  constructor(private readonly statements: StatementsService) {}

  async requestStatement(accountId: string, startDate: string, endDate: string) {
    return this.statements.initStatement({
      Data: {
        Statement: {
          accountId,
          startDateTime: startDate,
          endDateTime: endDate,
        },
      },
    });
  }

  async downloadStatement(statementId: string) {
    return this.statements.getStatemet({ statementId });
  }
}
```

### Счета на оплату

```typescript
import { Injectable } from '@nestjs/common';
import { InvoicesService } from 'tochkalib';

@Injectable()
export class InvoicesExampleService {
  constructor(private readonly invoices: InvoicesService) {}

  async createAndSend(dto: Parameters<InvoicesService['createInvoice']>[0]) {
    const invoice = await this.invoices.createInvoice(dto);
    // await this.invoices.sendInvoiceToEmail({ ... });
    return invoice;
  }
}
```

### Вебхуки

```typescript
import { Injectable } from '@nestjs/common';
import { WebhookType, WebhooksService } from 'tochkalib';

@Injectable()
export class WebhooksExampleService {
  constructor(private readonly webhooks: WebhooksService) {}

  async subscribe(clientId: string, url: string) {
    return this.webhooks.createWebhook({
      PathParametrs: { client_id: clientId },
      Body: {
        url,
        webhooksList: [WebhookType.incomingPayment, WebhookType.acquiringInternetPayment],
      },
    });
  }
}
```

### СБП — регистрация QR-кода

```typescript
import { Injectable } from '@nestjs/common';
import { QrcType, QrCodesService } from 'tochkalib';

@Injectable()
export class SbpExampleService {
  constructor(private readonly qrCodes: QrCodesService) {}

  async registerStaticQr(accountId: string, merchantId: string) {
    return this.qrCodes.registerQrCode({
      PathParameters: { accountId, merchantId },
      Body: {
        Data: {
          qrcType: QrcType.QR_STATIC,
          paymentPurpose: 'Оплата товара',
          imageParams: {
            width: 300,
            height: 300,
            mediaType: 'image/png',
          },
        },
      },
    });
  }
}
```

### Подписки (рекуррентные платежи)

```typescript
import { Injectable } from '@nestjs/common';
import { SubscriptionsService } from 'tochkalib';

@Injectable()
export class SubscriptionsExampleService {
  constructor(private readonly subscriptions: SubscriptionsService) {}

  async createSubscription(dto: Parameters<SubscriptionsService['createSubscription']>[0]) {
    return this.subscriptions.createSubscription(dto);
  }

  async charge(dto: Parameters<SubscriptionsService['chargeSubscription']>[0]) {
    return this.subscriptions.chargeSubscription(dto);
  }
}
```

## Обработка ошибок

При неуспешном ответе API выбрасывается `TochkaApiError`:

```typescript
import { Injectable } from '@nestjs/common';
import { AccountsService, TochkaApiError } from 'tochkalib';

@Injectable()
export class ErrorHandlingExampleService {
  constructor(private readonly accounts: AccountsService) {}

  async safeGetAccounts() {
    try {
      return await this.accounts.getAccountsList();
    } catch (error) {
      if (error instanceof TochkaApiError) {
        console.error('Tochka API error:', {
          status: error.status,
          code: error.code,
          message: error.message,
          errors: error.errors,
        });
      }
      throw error;
    }
  }
}
```

## Доступные сервисы

| Сервис | Описание |
|--------|----------|
| `AccountsService` | Список счетов и информация по счёту |
| `BalancesService` | Балансы и авторизованные карточные операции |
| `ClientsService` | Клиенты (customer) |
| `PaymentsService` | Платежи на подпись |
| `PaymentsLinksService` | Платёжные ссылки и эквайринг |
| `SubscriptionsService` | Рекуррентные платежи |
| `StatementsService` | Выписки по счетам |
| `InvoicesService` | Счета на оплату |
| `ClosingDocumentsService` | Закрывающие документы |
| `ConsentsService` | Согласия (consents) |
| `WebhooksService` | Подписка на вебхуки |
| `B2BQrCodeService` | СБП B2B QR-коды |
| `CashboxQrService` | Кассовые QR-коды |
| `LegalEntityService` | Юридические лица в СБП |
| `MerchantsService` | Торговые точки (ТСП) |
| `QrCodesService` | QR-коды СБП |
| `RefundsService` | Возвраты по СБП |

Все DTO, enum'ы и интерфейсы экспортируются из корня пакета:

```typescript
import {
  TochkaModule,
  AccountsService,
  PaymentMode,
  TochkaPaymentStatus,
  QrcType,
  WebhookType,
} from 'tochkalib';
```

## Разработка

```bash
# Сборка
npm run build

# Тесты
npm test

# Тесты в watch-режиме
npm run test:watch
```

## Документация API

- [Официальная документация Точка API](https://developers.tochka.com/docs/tochka-api/)
- [Репозиторий библиотеки](https://github.com/BygTTeKep/tochkalib)

## Лицензия

[MIT](LICENSE)
