import React from "react";
import { Button } from "./ui/button";
import iconwallet from "@/public/icons8-wallet-50.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between container">
      <div className="flex items-center justify-center gap-2">
        <Image src={iconwallet} alt="wallet" />
        <h1 className="font-extrabold">Customer Portal</h1>
      </div>
      <div>
        <Button className="bg-white border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300">
          Create
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
