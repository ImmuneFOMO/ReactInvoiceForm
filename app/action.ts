// actions/createInvoice.ts
'use server';
import { invoiceSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function createInvoice(request: Request) {
    const body: unknown = await request.json();

    const result = invoiceSchema.safeParse(body);
    let zodErrors = {};
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        });
    }

    return Object.keys(zodErrors).length > 0
        ? NextResponse.json({ errors: zodErrors })
        : NextResponse.json({...result});
}
