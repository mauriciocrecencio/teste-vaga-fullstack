import { isValidCPF, isValidCNPJ } from '../validators/document.js';

export function getDocumentType(document) {
  return document.length === 11 ? 'CPF' : 'CNPJ';
}

export function validDocument(document) {
  const docType = getDocumentType(document);
  return docType === 'CPF' ? isValidCPF(document) : isValidCNPJ(document);
}