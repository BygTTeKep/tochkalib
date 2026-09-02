import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { WebhookType } from './enums/webhookType.enum.js';
import type { CreateWebhookDto } from './interfaces/createWebhook.interface.js';
import type { DeleteWebhookDto } from './interfaces/deleteWebhook.interface.js';
import type { EditWebhookDto } from './interfaces/editWebhook.interface.js';
import type { GetWebhooksDto } from './interfaces/getWebhooks.interface.js';
import type { SendWebhookDto } from './interfaces/sendWebhook.interface.js';
import { WebhooksService } from './webhooks.service.js';

describe('WebhooksService', () => {
  let service: WebhooksService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
  };
  const clientId = '4ZY5qFuPsWdz3BfcG1RR5F4ZWOOCwLFI';
  const url = 'https://example.com/webhook';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();
    http.put.mockReset();
    http.delete.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        WebhooksService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(WebhooksService);
  });

  it('creates a webhook with the given payload', async () => {
    const dto: CreateWebhookDto = {
      PathParametrs: { client_id: clientId },
      Body: {
        webhooksList: [WebhookType.incomingPayment],
        url,
      },
    };
    http.put.mockResolvedValue({});

    await service.createWebhook(dto);

    expect(http.put).toHaveBeenCalledOnce();
    expect(http.put).toHaveBeenCalledWith(`/webhook/v1.0/${clientId}`, {
      ...dto.Body,
    });
  });

  it('edits a webhook with the given payload', async () => {
    const dto: EditWebhookDto = {
      PathParameters: { client_id: clientId },
      Body: {
        webhooksList: [WebhookType.outgoingPayment],
        url,
      },
    };
    http.post.mockResolvedValue({});

    await service.editWebhook(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(`/webhook/v1.0/${clientId}`, {
      ...dto.Body,
    });
  });

  it('requests webhooks list by client id', async () => {
    const dto: GetWebhooksDto = {
      PathParameters: { client_id: clientId },
    };
    http.get.mockResolvedValue({});

    await service.getWebhooks(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(`/webhook/v1.0/${clientId}`);
  });

  it('deletes a webhook by client id', async () => {
    const dto: DeleteWebhookDto = {
      PathParameters: { client_id: clientId },
    };
    http.delete.mockResolvedValue({});

    await service.deleteWebhook(dto);

    expect(http.delete).toHaveBeenCalledOnce();
    expect(http.delete).toHaveBeenCalledWith(`/webhook/v1.0/${clientId}`);
  });

  it('sends a test webhook with the given payload', async () => {
    const dto: SendWebhookDto = {
      PathParameters: { client_id: clientId },
      Body: { webhookType: WebhookType.incomingPayment },
    };
    http.post.mockResolvedValue({});

    await service.sendWebhook(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/webhook/v1.0/${clientId}/test_send`,
      { ...dto.Body },
    );
  });
});
