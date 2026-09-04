import type {
  BaseErrorDto,
  ErrorDto,
} from '../intefaces/baseError.interface.js';

export class TochkaApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly id: string;
  readonly errors: ErrorDto[];

  constructor(status: number, error: BaseErrorDto) {
    super(error.message);
    this.name = 'TochkaApiError';
    this.status = status;
    this.code = error.code;
    this.id = error.id;
    this.errors = error.Errors ?? [];
  }
}
