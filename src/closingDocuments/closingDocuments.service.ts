import { Injectable } from '@nestjs/common';
import { TochkaHttpService } from '../http/tochkaHttp.service.js';
import {
  CreateClosingDocumentDto,
  CreateClosingDocumentResponseDto,
} from './interfaces/createClosingDocuments.interface.js';
import {
  DeleteClosingDocumentDto,
  DeleteClosingDocumentResponseDto,
} from './interfaces/deleteClosingDocument.interface.js';
import {
  SendClosingDocumentsToEmailDto,
  SendClosingDocumentsToEmailResponseDto,
} from './interfaces/sendClosingDocumentsToEmail.interface.js';
import { GetClosingDocumentDto } from './interfaces/getClosingDocument.interface.js';

@Injectable()
export class ClosingDocumentsService {
  constructor(private readonly tochkaHttpService: TochkaHttpService) {}

  /**
   * Метод для создания закрывающего документа
   * Необходимые разрешения: ManageInvoiceData
   * @param dto CreateClosingDocumentDto
   * @returns CreateClosingDocumentResponseDto
   */
  async createClosingDocument(dto: CreateClosingDocumentDto) {
    return this.tochkaHttpService.post<CreateClosingDocumentResponseDto>(
      '/invoice/v1.0/closing-documents',
      { ...dto },
    );
  }

  /**
   * Метод для удаления закрывающего документа
   * Необходимые разрешения: ManageInvoiceData
   * @param dto DeleteClosingDocumentDto
   * @returns DeleteClosingDocumentResponseDto
   */
  async deleteClosingDocument(dto: DeleteClosingDocumentDto) {
    return this.tochkaHttpService.delete<DeleteClosingDocumentResponseDto>(
      `/invoice/v1.0/closing-documents/${dto.customerCode}/${dto.documentId}`,
    );
  }

  /**
   * Метод для отправки закрывающего документа на почту
   * Необходимые разрешения: ManageInvoiceData
   * @param dto SendClosingDocumentsToEmailDto
   * @returns SendClosingDocumentsToEmailResponseDto
   */
  async sendClosingDocumentsToEmail(dto: SendClosingDocumentsToEmailDto) {
    return this.tochkaHttpService.post<SendClosingDocumentsToEmailResponseDto>(
      `/invoice/v1.0/closing-documents/${dto.PathParameters.customerCode}/${dto.PathParameters.documentId}/email`,
      { ...dto.Body },
    );
  }

  /**
   * Метод для получения файла закрывающего документа
   * Необходимые разрешения: ManageInvoiceData
   * @param dto GetClosingDocumentDto
   * @returns application/pdf
   */
  async getClosingDocument(dto: GetClosingDocumentDto) {
    return this.tochkaHttpService.get<string>(
      `/invoice/v1.0/closing-documents/${dto.customerCode}/${dto.documentId}/file`,
    );
  }
}
