"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Button } from "./ui/button";
import { BinaryIcon } from "lucide-react";
import { toast } from "sonner";
import { accept, reject } from "@/actions/action";
type Payment = {
  id: number;
  customerName: string;
  customerEmail: string;
  paymentAmount: string;
  merchantAccountNumber: string;
  customerAccountNumber: string;
  paymentPurpose: string;
  customerBankName: string;
  customerId: number;
  merchantId: number;
  paymentStatus: string;
  created_at: Date;
  updated_at: Date;
};

type Props = {
  payments: Payment[];
};
const TableComponent = ({ payments }: Props) => {
  async function handleReject(id: number) {
    try {
      const result = await reject(id);
      if (result?.success) {
        toast.success("Payment Rejected");
      }
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  }
  async function handlePay(id: number) {
    console.log(id);
    try {
      const result = await accept(id);
      console.log(result);
      if (result?.success) {
        toast.success("Paid");
      }
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  }
  return (
    <Table className="overflow-x-scroll w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] font-bold">
            CUSTOMER ACCOUNT NO.
          </TableHead>
          <TableHead className="w-[100px] font-bold">
            MERCHANT ACCOUNT NO.
          </TableHead>
          <TableHead className="w-[100px] font-bold">STATUS</TableHead>
          <TableHead className="w-[100px] font-bold">DESCRIPTION</TableHead>
          <TableHead className="font-bold">TIME</TableHead>
          <TableHead className="w-[100px] font-bold">DATE</TableHead>
          <TableHead className="font-bold">AMOUNT</TableHead>
          <TableHead className="font-bold">ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments &&
          payments.map((item) => (
            <>
              <TableRow>
                <TableCell className="text-blue-400">
                  {item.customerAccountNumber}
                </TableCell>
                {item.paymentStatus === "pending" && (
                  <div className="bg-gray-100 text-gray-600 rounded-full ">
                    <TableCell className="text-center w-full">
                      Pending
                    </TableCell>
                  </div>
                )}
                {item.paymentStatus === "succeeded" && (
                  <div className="bg-green-100 text-green-600 rounded-full ">
                    <TableCell className="text-center w-full">
                      Succeeded
                    </TableCell>
                  </div>
                )}
                {item.paymentStatus === "rejected" && (
                  <div className="bg-red-100 text-red-600 rounded-full ">
                    <TableCell className="text-center w-full">
                      Rejected
                    </TableCell>
                  </div>
                )}
                <TableCell>{item.paymentPurpose}</TableCell>
                <TableCell>{item.customerBankName}</TableCell>
                <TableCell>
                  {new Date(item.created_at)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </TableCell>
                <TableCell className="flex flex-row items-center justify-center gap-2">
                  <Image src={logo} alt={"logo"} className="rounded-full" />
                  {item.customerName}
                </TableCell>
                <TableCell className="font-bold">
                  ${item.paymentAmount}
                </TableCell>
                <TableCell className="flex gap-x-3">
                  <Button
                    onClick={() => handlePay(item.id)}
                    variant={"default"}
                  >
                    Pay
                  </Button>
                  <Button
                    onClick={() => handleReject(item.id)}
                    variant={"destructive"}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
