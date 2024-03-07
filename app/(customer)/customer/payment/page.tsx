import CardComponent from "@/components/CardComponent";
import TableComponent from "@/components/TableComponent";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-4xl">Payments</h1>
          </div>
          <div className="flex gap-2">
            <Button className="bg-white border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Upload
            </Button>
            <Button className="bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
              Export
            </Button>
            <Button className="bg-cyan-500 text-white hover:bg-cyan-500 hover:opacity-80">
              + payment request
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <CardComponent />

        <TableComponent />
      </div>
    </div>
  );
};

export default page;
