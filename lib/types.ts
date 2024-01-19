import { z } from "zod";

export const invoiceSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  vatNumber: z.string().min(1, "VAT Number is required"),
  purchaseValue: z.number().min(0.01, "Purchase Value must be greater than 0"),
  description: z.string().min(1, "Description is required"),
});

export interface invoiceFormDataId {
  id: string;
  companyName: string;
  vatNumber: string;
  purchaseValue: string;
  description: string;
}

export type InvoiceFormData = z.infer<typeof invoiceSchema>;
