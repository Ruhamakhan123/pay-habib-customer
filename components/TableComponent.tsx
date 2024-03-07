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

const TableComponent = () => {
  return (
    <Table>
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
        <TableRow>
          <TableCell className="text-blue-400">12345678901234</TableCell>
          <div className="bg-green-100 text-green-600 rounded-full items-center">
            <TableCell>Succeeded</TableCell>
          </div>
          <TableCell>Payment Purpose</TableCell>
          <TableCell>Bank AL Habib</TableCell>
          <TableCell>Feb 15, 2023</TableCell>
          <TableCell className="flex flex-row items-center justify-center gap-2">
            <Image src={logo} alt={"logo"} className="rounded-full" />
            Ryan Young
          </TableCell>
          <TableCell className="font-bold">500 PKR</TableCell>
          <TableCell className="flex space-x-2 font-bold">
            <Button className="bg-green-500 hover:bg-green-700">Pay</Button>
            <Button className="bg-red-500 hover:bg-red-700">Reject</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableComponent;
