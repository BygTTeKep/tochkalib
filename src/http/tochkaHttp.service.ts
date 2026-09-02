import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_SANBOX_URL,
  BASE_URL,
  TOCHKA_MODULE_OPTIONS,
} from '../tochka.constants.js';
import type { TochkaModuleOptions } from '../intefaces/tochkaModuleOptions.interface.js';

@Injectable()
export class TochkaHttpService {
  private readonly baseUrl: string;
  constructor(
    @Inject(TOCHKA_MODULE_OPTIONS)
    private readonly options: TochkaModuleOptions,
  ) {
    this.baseUrl = options.sandbox ? BASE_SANBOX_URL : BASE_URL;
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${this.options.jwt}`,
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    });
    if (!res.ok) {
      //throw new TochkaApiError(res.status, await res.text());
      throw new Error(); //TODO добавить обвертку для ошибок
    }
    return res.json() as Promise<T>;
  }
  get<T>(path: string) {
    return this.request<T>(path, { method: 'GET' });
  }
  post<T>(path: string, body: unknown) {
    return this.request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  put<T>(path: string, body: unknown) {
    return this.request<T>(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }
  delete<T>(path: string) {
    return this.request<T>(path, { method: 'DELETE' });
  }
}
