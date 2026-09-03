import { Test } from '@nestjs/testing';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import { CustomerType } from './enums/cutomerType.enum.js';
import { NdsKind } from './enums/ndsKind.enum.js';
import type { CreateInvoiceDto } from './interfaces/createInvoice.interface.js';
import type { DeleteInvoiceDto } from './interfaces/deleteInvoice.interface.js';
import type { GetInvoiceDto } from './interfaces/getInvoice.interface.js';
import type { GetInvoicePaymentStatusDto } from './interfaces/getInvoicePaymentStatus.intrface.js';
import type { SendInvoiceToEmailDto } from './interfaces/sendInvoiceToEmail.inteface.js';
import { InvoicesService } from './invoices.service.js';

describe('InvoicesService', () => {
  let service: InvoicesService;
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
        InvoicesService,
        { provide: TochkaHttpService, useValue: http },
      ],
    }).compile();

    service = module.get(InvoicesService);
  });

  it('creates an invoice with the given payload', async () => {
    const dto: CreateInvoiceDto = {
      Data: {
        accountId,
        customerCode,
        SecondSide: {
          accountId,
          taxCode: '660000000000',
          type: CustomerType.company,
        },
        Content: {
          Invoice: {
            Positions: [
              {
                positionName: 'Название товара',
                unitCode: 'шт.',
                ndsKind: NdsKind.nds_0,
                price: 1234.56,
                quantity: 1,
                totalAmount: 1234.56,
              },
            ],
            totalAmount: 1234.56,
            number: 1,
          },
        },
      },
    };
    http.post.mockResolvedValue({});

    await service.createInvoice(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith('/invoice/v1.0/bills', dto);
  });

  it('deletes an invoice by customer code and document id', async () => {
    const dto: DeleteInvoiceDto = { customerCode, documentId };
    http.delete.mockResolvedValue({});

    await service.deleteInvoice(dto);

    expect(http.delete).toHaveBeenCalledOnce();
    expect(http.delete).toHaveBeenCalledWith(
      `/invoice/v1.0/bills/${customerCode}/${documentId}`,
    );
  });

  it('sends an invoice to email with the given payload', async () => {
    const dto: SendInvoiceToEmailDto = {
      PathParameters: { customerCode, documentId },
      Body: { Data: { email: 'ivanov@mail.com' } },
    };
    http.post.mockResolvedValue({});

    await service.sendInvoiceToEmail(dto);

    expect(http.post).toHaveBeenCalledOnce();
    expect(http.post).toHaveBeenCalledWith(
      `/invoice/v1.0/bills/${customerCode}/${documentId}/email`,
      { ...dto.Body },
    );
  });

  it('requests invoice file by customer code and document id', async () => {
    const dto: GetInvoiceDto = { customerCode, documentId };
    http.get.mockResolvedValue({});

    await service.getInvoice(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/invoice/v1.0/bills/${customerCode}/${documentId}/file`,
    );
  });

  it('requests invoice payment status by customer code and document id', async () => {
    const dto: GetInvoicePaymentStatusDto = { customerCode, documentId };
    http.get.mockResolvedValue({});

    await service.getInvoicePaymentStatus(dto);

    expect(http.get).toHaveBeenCalledOnce();
    expect(http.get).toHaveBeenCalledWith(
      `/invoice/v1.0/bills/${customerCode}/${documentId}/payment-status`,
    );
  });
});
