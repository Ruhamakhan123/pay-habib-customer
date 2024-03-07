import React from "react";
import { Button } from "./ui/button";
import iconwallet from "@/public/icons8-wallet-50.png";
import Image from "next/image";
import { getSession } from "@/lib/helper";
import Lougout from "./Lougout";
const Navbar = async () => {
  const session = await getSession();
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center justify-center gap-2">
        <Image src={iconwallet} alt="wallet" />
        <h1 className="font-extrabold">Customer Portal</h1>
      </div>
      <div>
        <Lougout />
      </div>
    </div>
  );
};

export default Navbar;
