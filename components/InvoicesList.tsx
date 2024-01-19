import { downloadAsPDF } from "@/lib/downloadPDF";
import { invoiceFormDataId } from "@/lib/types";

interface InvoicesListProps {
    invoices: invoiceFormDataId[];
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <>
      {invoices.map((invoice, index) => (
        <div
          key={invoice.id}
          className="max-w-xl w-full mx-auto bg-white p-6 rounded shadow mb-4"
        >
          <h2 className="text-xl font-bold mb-4">Invoice #{index + 1}</h2>
          <p className="mb-2 max-w-xl truncate">
            <span className="font-semibold">Company Name:</span>{" "}
            {invoice.companyName}
          </p>
          <p className="mb-2 max-w-xl truncate">
            <span className="font-semibold">VAT Number:</span>{" "}
            {invoice.vatNumber}
          </p>
          <p className="mb-2 max-w-xl truncate">
            <span className="font-semibold">Purchase Value: </span>
            {invoice.purchaseValue}
          </p>
          <p className="mb-4 max-w-xl truncate">
            <span className="font-semibold">Description:</span>{" "}
            {invoice.description}
          </p>
          <button
            onClick={() => downloadAsPDF(invoice, index)}
            className="w-full flex justify-center py-2 px-4 border border-transparent
        text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download as PDF
          </button>
        </div>
      ))}
    </>
  );
}
