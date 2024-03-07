"use client";
import SignImage from "@/public/icons8-wallet-50.png";
import Chart from "@/public/undraw_online_transactions_-02-ka.svg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema } from "@/lib/validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/helper";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await login(formData);
    if (result) {
      router.replace("/");
    }
    if (result) {
      toast.success("Logged in successfully");
    } else {
      toast.error("Something went wrong");
    }

    console.log(result);
  }

  return (
    <div className="  text-gray-900 flex  justify-center">
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
                <h1 className="text-3xl font-bold">Login</h1>
                <div className="flex pt-3 space-x-2">
                  <h1 className="text-3xl font-bold text-cyan-500">
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
                        <FormLabel className="font-bold">Password</FormLabel>
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

                  <Button
                    type="submit"
                    className="mt-2 tracking-wide font-semibold bg-cyan-500 text-white w-full py-4 rounded-md hover:bg-cyan-700 hover:opacity-80 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    Sign in
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

export default Login;
