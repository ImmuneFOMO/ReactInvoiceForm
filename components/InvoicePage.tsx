"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { downloadAsPDF } from "../lib/downloadPDF";
import { invoiceFormDataId } from "@/lib/types";

export const InvoicePage = () => {
  const [invoices, setInvoices] = useState<invoiceFormDataId[]>([]);
  const router = useRouter();
  const handleClearList = () => {
    localStorage.removeItem("invoices");
    setInvoices([]);
  };

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices") ?? "[]");
    setInvoices(storedInvoices);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-8 w-full">
      <div className="flex justify-between items-center max-w-xl mx-auto mb-4">
        <button
          onClick={handleClearList}
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Clear List
        </button>
        <button
          onClick={() => router.push("/invoice_generator")}
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Generate New Invoice
        </button>
      </div>
      <div className="flex flex-col-reverse items-center w-full mx-auto">
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
      </div>
    </div>
  );
};
