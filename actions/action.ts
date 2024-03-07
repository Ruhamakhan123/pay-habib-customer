"use server";
import { requestFormSchema } from "@/lib/validator";
import * as z from "zod";
import prisma from "@/util/prismadb";

type PaymentRequest = z.infer<typeof requestFormSchema>;

//TODO Bank name is not coming from the form component
export async function createPaymentRequest(
  input: PaymentRequest,
  merchantID: number
): Promise<{ success: boolean; error?: string } | any> {
  try {
    const body = requestFormSchema.safeParse(input);
    if (!body.success) {
      return { success: false, error: body.error.format() };
    }

    const { data } = body;

    const customer = await prisma.customer.findFirst({
      where: {
        email: data.customerEmail,
      },
    });

    if (!customer) {
      return { success: false, error: "Customer not found" };
    }

    const merchantCustomer = await prisma.merchantCustomer.findFirst({
      where: {
        customerId: customer.id,
        //TODO add real Merchant ID from cookie
        merchantId: merchantID,
      },
    });
    let newCustomer = null;
    if (!merchantCustomer) {
      newCustomer = await prisma.merchantCustomer.create({
        data: {
          customerId: customer.id,
          merchantId: 1,
        },
      });
    }
    if (!newCustomer) {
      return { success: false, error: "Error Creating New Customer" };
    }

    const payment = await prisma.payment.create({
      data: {
        customerAccountNumber: data.customerAccountNumber,
        customerBankName: data.customerBankName,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
        merchantAccountNumber: data.merchantAcountNumber,
        paymentAmount: data.paymentAmount,
        paymentPurpose: data.paymentPurpose,
        cusomerId: customer.id,
      },
    });

    console.log(payment);

    return {
      success: true,
      data: { payment },
    };
  } catch (err) {
    console.log(err);
    return { success: false, error: "something went wrong" };
  }
}
