import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import type { GetStatemetDto } from './intefaces/getStatement.interface.js';
import type { InitStatementDto } from './intefaces/initStatement.interface.js';
import { StatementsService } from './statements.service.js';

describe('StatementsService', () => {
  let service: StatementsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
  };
  const accountId = '40817810802000000008/044525104';
  const statementId = '23489';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        StatementsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(StatementsService);
  });

  it('requests a statement by account id and statement id', async () => {
    const dto: GetStatemetDto = { accountId, statementId };
    http.get.mockResolvedValue({});

    await service.getStatemet(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/open-banking/v1.0/accounts/${accountId}/statements/${statementId}`,
    );
  });

  it('inits a statement with the given payload', async () => {
    const dto: InitStatementDto = {
      Data: {
        Statement: {
          accountId,
          startDateTime: '2019-01-01',
          endDateTime: '2019-01-31',
        },
      },
    };
    http.post.mockResolvedValue({});

    await service.initStatement(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      '/open-banking/v1.0/statements',
      dto,
    );
  });

  it('requests statements list', async () => {
    http.get.mockResolvedValue({});

    await service.getStatementsList();

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith('/open-banking/v1.0/statements');
  });
});
