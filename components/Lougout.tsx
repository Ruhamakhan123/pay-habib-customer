"use client";
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/lib/helper";
function Lougout() {
  async function handleLogout() {
    await logout();
  }
  return (
    <div>
      <Button
        onClick={() => handleLogout()}
        className="bg-white border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
      >
        Logout
      </Button>
    </div>
  );
}

export default Lougout;
