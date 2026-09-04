import { Test } from '@nestjs/testing';
import { TOCHKA_MODULE_OPTIONS } from '../tochka.constants.js';
import { TochkaApiError } from './tochkaApi.error.js';
import { TochkaHttpService } from './tochkaHttp.service.js';

describe('TochkaHttpService', () => {
  let service: TochkaHttpService;
  const fetchMock = vi.fn();
  const jwt = 'test-jwt';

  beforeEach(async () => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);

    const module = await Test.createTestingModule({
      providers: [
        TochkaHttpService,
        {
          provide: TOCHKA_MODULE_OPTIONS,
          useValue: { jwt, sandbox: true, apiKey: '', apiSecret: '' },
        },
      ],
    }).compile();

    service = module.get(TochkaHttpService);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns JSON payload when the response is successful', async () => {
    const payload = { Data: { ok: true } };
    fetchMock.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(payload),
    });

    await expect(service.get('/open-banking/v1.0/accounts')).resolves.toEqual(
      payload,
    );
  });

  it('throws TochkaApiError with the API error body when the response is not ok', async () => {
    const errorBody = {
      code: '400',
      id: 'c397b21a-d998-4c4d-9471-e60eaf816b87',
      message: 'Что-то пошло не так',
      Errors: [
        {
          errorCode: 'Validation Error',
          message: 'Something going wrong',
          url: 'https://developers.tochka.com/',
        },
      ],
    };
    fetchMock.mockResolvedValue({
      ok: false,
      status: 400,
      json: vi.fn().mockResolvedValue(errorBody),
    });

    const error = await service
      .get('/open-banking/v1.0/accounts')
      .catch((e) => e);

    expect(error).toBeInstanceOf(TochkaApiError);
    expect(error).toMatchObject({
      name: 'TochkaApiError',
      status: 400,
      code: '400',
      id: errorBody.id,
      message: errorBody.message,
      errors: errorBody.Errors,
    });
  });

  it('throws TochkaApiError with a fallback body when error payload is not JSON', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: vi.fn().mockRejectedValue(new SyntaxError('Unexpected token')),
    });

    const error = await service.post('/invoice/v1.0/bills', {}).catch((e) => e);

    expect(error).toBeInstanceOf(TochkaApiError);
    expect(error).toMatchObject({
      status: 500,
      code: '500',
      id: '',
      message: 'Internal Server Error',
      errors: [],
    });
  });
});
