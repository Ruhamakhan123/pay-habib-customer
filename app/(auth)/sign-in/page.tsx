"use client";
import Image from "next/image";
import React from "react";
import SignImage from "@/public/icons8-wallet-50.png";
import Chart from "@/public/undraw_personal_info_re_ur1n.svg";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/lib/validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createCustomer } from "@/actions/action";
import { toast } from "sonner";

const SignIn = () => {
  const initialValues = {
    username: "",
    accountNumber: "",
    email: "",
    password: "",
    bankName: "",
    phoneNumber: "",
  };

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    console.log(data);

    try {
      const result = await createCustomer(data);
      if (result.success) {
        toast.success("Account Created");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="  text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-[#FAFAFA] shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex flex-col items-center justify-center lg:w-[300px] xl:w-[600px] p-6 sm:[200px]">
          <div className="flex items-center justify-center  gap-5">
            <Image src={SignImage} alt="sign" className="" />
            <div className="flex w-full ">
              <h1 className="font-bold">Customer Portal</h1>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <div className="flex pt-3 space-x-2">
                  <h1 className="text-3xl font-bold text-cyan-700">
                    Customer Portal
                  </h1>
                  <div className="flex">
                    {" "}
                    <h1 className="text-3xl font-bold">account</h1>
                  </div>
                </div>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-2 mx-auto max-w-xs mt-5 "
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Username *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Username"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Account Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Account Number"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Email *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Password *</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Bank Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Bank Name"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-2 tracking-wide font-semibold bg-cyan-700 text-white w-full py-4 rounded-md hover:bg-cyan-700 hover:opacity-80 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    Sign up
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-cyan-200 rounded-r-lg text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <Image src={Chart} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
