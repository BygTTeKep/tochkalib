import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  CreateWebhookDto,
  CreateWebhookResponseDto,
} from './interfaces/createWebhook.interface.js';
import {
  EditWebhookDto,
  EditWebhookResponseDto,
} from './interfaces/editWebhook.interface.js';
import {
  GetWebhooksDto,
  GetWebhooksResponseDto,
} from './interfaces/getWebhooks.interface.js';
import {
  DeleteWebhookDto,
  DeleteWebhookResponseDto,
} from './interfaces/deleteWebhook.interface.js';
import {
  SendWebhookDto,
  SendWebhookResponseDto,
} from './interfaces/sendWebhook.interface.js';

@Injectable()
export class WebhooksService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для создания вебхуков
   * @param dto CreateWebhookDto
   * @returns CreateWebhookResponseDto
   */
  async createWebhook(dto: CreateWebhookDto) {
    return this.tochkaHttpService.put<CreateWebhookResponseDto>(
      `/webhook/v1.0/${dto.PathParametrs.client_id}`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для изменения URL и типа вебхука
   * @param dto EditWebhookDto
   * @returns EditWebhookResponseDto
   */
  async editWebhook(dto: EditWebhookDto) {
    return this.tochkaHttpService.post<EditWebhookResponseDto>(
      `/webhook/v1.0/${dto.PathParameters.client_id}`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для получения списка вебхуков приложения
   * @param dto GetWebhooksDto
   * @returns GetWebhooksResponseDto
   */
  async getWebhooks(dto: GetWebhooksDto) {
    return this.tochkaHttpService.get<GetWebhooksResponseDto>(
      `/webhook/v1.0/${dto.PathParameters.client_id}`,
    );
  }

  /**
   * Метод для удаления вебхука
   * @param dto DeleteWebhookDto
   * @returns DeleteWebhookResponseDto
   */
  async deleteWebhook(dto: DeleteWebhookDto) {
    return this.tochkaHttpService.delete<DeleteWebhookResponseDto>(
      `/webhook/v1.0/${dto.PathParameters.client_id}`,
    );
  }

  /**
   * Метод для проверки отправки вебхука
   * @param dto SendWebhookDto
   * @returns SendWebhookResponseDto
   */
  async sendWebhook(dto: SendWebhookDto) {
    return this.tochkaHttpService.post<SendWebhookResponseDto>(
      `/webhook/v1.0/${dto.PathParameters.client_id}/test_send`,
      { ...dto.Body },
    );
  }
}
