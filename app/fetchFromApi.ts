"use client"

import { InvoiceFormData } from "@/lib/types";

const fetchFromApi = async (data: InvoiceFormData) =>  {
  const result = await fetch("/api/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return result;
}

export default fetchFromApi;
