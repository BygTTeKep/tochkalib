import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { CustomerType } from '../invoices/enums/cutomerType.enum.js';
import { NdsKind } from '../invoices/enums/ndsKind.enum.js';
import { ClosingDocumentsService } from './closingDocuments.service.js';
import type { CreateClosingDocumentDto } from './interfaces/createClosingDocuments.interface.js';
import type { DeleteClosingDocumentDto } from './interfaces/deleteClosingDocument.interface.js';
import type { GetClosingDocumentDto } from './interfaces/getClosingDocument.interface.js';
import type { SendClosingDocumentsToEmailDto } from './interfaces/sendClosingDocumentsToEmail.interface.js';

describe('ClosingDocumentsService', () => {
  let service: ClosingDocumentsService;
  const http = {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  };
  const customerCode = '300000092';
  const documentId = '1cf95c4f-e794-4407-bac4-0829f19bd2be';
  const accountId = '40817810802000000008/044525104';

  beforeEach(async () => {
    http.get.mockReset();
    http.post.mockReset();
    http.delete.mockReset();

    const module = await Test.createTestingModule({
      providers: [
        ClosingDocumentsService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(ClosingDocumentsService);
  });

  it('creates a closing document with the given payload', async () => {
    const dto: CreateClosingDocumentDto = {
      Data: {
        accountId,
        customerCode,
        SecondSide: {
          accountId,
          taxCode: '660000000000',
          type: CustomerType.company,
        },
        Content: {
          Positions: [
            {
              positionName: 'Консультационные услуги',
              unitCode: 'шт.',
              ndsKind: NdsKind.without_nds,
              price: 1234.56,
              quantity: 1,
              totalAmount: 1234.56,
            },
          ],
          totalAmount: 1234.56,
          number: '1',
        },
      },
    };
    http.post.mockResolvedValue({});

    await service.createClosingDocument(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/invoice/v1.0/closing-documents', {
      ...dto,
    });
  });

  it('deletes a closing document by customer code and document id', async () => {
    const dto: DeleteClosingDocumentDto = { customerCode, documentId };
    http.delete.mockResolvedValue({});

    await service.deleteClosingDocument(dto);

    expect(http.delete).toHaveBeenCalledOnce();
    expect(http.delete).toHaveBeenCalledWith(
      `/invoice/v1.0/closing-documents/${customerCode}/${documentId}`,
    );
  });

  it('sends a closing document to email with the given payload', async () => {
    const dto: SendClosingDocumentsToEmailDto = {
      PathParameters: { customerCode, documentId },
      Body: { email: 'ivanov@mail.com' },
    };
    http.post.mockResolvedValue({});

    await service.sendClosingDocumentsToEmail(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/invoice/v1.0/closing-documents/${customerCode}/${documentId}/email`,
      { ...dto.Body },
    );
  });

  it('requests closing document file by customer code and document id', async () => {
    const dto: GetClosingDocumentDto = { customerCode, documentId };
    http.get.mockResolvedValue({});

    await service.getClosingDocument(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/invoice/v1.0/closing-documents/${customerCode}/${documentId}/file`,
    );
  });
});
