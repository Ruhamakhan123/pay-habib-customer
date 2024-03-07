"use client";
import { CurrencyIcon, DollarSign, QrCodeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 min-h-screen">
      <div
        className={`flex gap-2 ${
          pathname === "/customer/payment"
            ? "bg-cyan-400 text-white"
            : "hover:bg-cyan-700 hover:text-white"
        } font-bold hover:bg-cyan-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <DollarSign />
        <Link href={"/customer/payment"}>Payments</Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/customer/instant-payment"
            ? "bg-cyan-400 text-white"
            : "hover:bg-cyan-700 hover:text-white"
        } font-bold hover:bg-cyan-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <CurrencyIcon />
        <Link href={"/customer/instant-payment"}>Instant Payment</Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/customer/upload"
            ? "bg-cyan-400 text-white"
            : "hover:bg-cyan-700 hover:text-white"
        } font-bold hover:bg-cyan-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <QrCodeIcon />
        <Link href={"/customer/upload"}>QR Scan</Link>
      </div>
    </div>
  );
};

export default Sidebar;
