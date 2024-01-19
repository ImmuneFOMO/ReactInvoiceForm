"use server";
import { InvoiceFormData, invoiceSchema } from "@/lib/types";

export async function createInvoice(data: InvoiceFormData) {
  const result = invoiceSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
