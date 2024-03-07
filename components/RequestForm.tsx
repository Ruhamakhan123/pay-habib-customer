"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { requestFormSchema } from "@/lib/validator";
import Dropdown from "./Dropdown";
import { createPaymentRequest } from "@/actions/action";

type User = {
  id: number;
  username: string;
  bankName: string;
  accountNumber: string;
  email: string;
  phoneNumber: string;
  password: string | null;
  created_at: string;
  updated_at: string;
};

type Props = {
  user: User;
};

const RequestForm = ({ user }: Props) => {
  const [section, setSection] = useState<string>("Bank Habib");

  const handleSectionChange = (e: any) => {
    console.log(e);
    setSection(e.target.value);
  };
  const initialValues = {
    customerName: "",
    customerEmail: "",
    paymentAmount: "",
    merchantAcountNumber: "",
    customerAccountNumber: "",
    customerBankName: "",
    paymentPurpose: "",
  };
  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof requestFormSchema>) {
    console.log(user.id);
    console.log(values);
    const newValues = { ...values, customerBankName: section };
    console.log(newValues);
    const data = await createPaymentRequest(newValues, user.id);
    console.log(data);
  }
  return (
    <div className="bg-[#FAFAFA] rounded-md px-5 py-5 mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Input text"
                        {...field}
                        className="max-w-sm "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-[500px]">
                <FormField
                  control={form.control}
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Email Address (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Input text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="paymentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Payment Amount *</FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerAccountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Customer Account Number *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="merchantAcountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Merchant Account Number *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerBankName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">
                    Select Customer Bank Name *
                  </FormLabel>
                  <FormControl>
                    <select onChange={handleSectionChange} value={section}>
                      <option key={1} value={"Habib Bank"}>
                        Bank Al Habib
                      </option>
                      <option key={2} value={"Meezan Bank"}>
                        Meezan
                      </option>
                      <option key={3} value={"Allied Bank"}>
                        Allied Bank
                      </option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentPurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Payment Purpose *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input text"
                      {...field}
                      className="h-20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-cyan-500 text-white hover:bg-cyan-500 hover:opacity-80"
          >
            Pay
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RequestForm;
