import { v4 as uuid } from "uuid";

export const saveInvoiceToLocalStorage = (invoice: any) => {
  const invoices = JSON.parse(localStorage.getItem("invoices") ?? "[]");

  invoices.push({ ...invoice.data, id: uuid() });

  localStorage.setItem("invoices", JSON.stringify(invoices));
};
