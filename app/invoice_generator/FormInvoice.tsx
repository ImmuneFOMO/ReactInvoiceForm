"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { InvoiceFormData, invoiceSchema } from "@/lib/types";
import { Input } from "@/components/InputField";
import { TextArea } from "@/components/TextAreaField";
import { saveInvoiceToLocalStorage } from "./saveInvoices";
import { useRouter } from "next/navigation";
import { createInvoice } from "../action";

export const FormInvoice = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<InvoiceFormData> = async (data) => {
    const result = await createInvoice(data);

    if (!result) {
      console.log("Submitting error!");
      return;
    }

    if (result.error) {
      return;
    }

    saveInvoiceToLocalStorage(result);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="max-w-md w-full px-4 sm:px-6 lg:px-8 space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="company-name"
          name="companyName"
          type="text"
          placeholder="Company Name"
          required
          register={register("companyName")}
          error={errors.companyName}
        />
        <Input
          id="vat-number"
          name="vatNumber"
          type="text"
          placeholder="VAT Number"
          required
          register={register("vatNumber")}
          error={errors.vatNumber}
        />
        <Input
          id="purchase-value"
          name="purchaseValue"
          type="number"
          placeholder="Purchase Value"
          required
          register={register("purchaseValue", { valueAsNumber: true })}
          error={errors.purchaseValue}
        />
        <TextArea
          id="description"
          placeholder="Description"
          required
          register={register("description")}
          error={errors.description}
        />
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent
            text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
};
