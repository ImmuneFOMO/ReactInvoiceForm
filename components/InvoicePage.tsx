"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { invoiceFormDataId } from "@/lib/types";
import { InvoicesList } from "./InvoicesList";
import Button from "./InvoiceButtons";

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
        <Button
          onClick={handleClearList}
          buttonColor="red"
          className="custom-class"
        >
          Clear List
        </Button>
        <Button
          onClick={() => router.push("/invoice_generator")}
          buttonColor="green"
          className="custom-class"
        >
          Generate New Invoice
        </Button>
      </div>
      <div className="flex flex-col-reverse items-center w-full mx-auto">
        <InvoicesList invoices={invoices} />
      </div>
    </div>
  );
};
