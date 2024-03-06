import Navbar from "@/components/Navabr";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="  py-5 border-b-2 ">
        <Navbar />
      </div>
      <div className="flex">
        <div className="w-1/4 bg-[#FAFAFA] border-r-2 ">
          <div className="mt-10 px-5 py-5">
            <Sidebar />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
