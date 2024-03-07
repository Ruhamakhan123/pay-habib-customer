import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-5 flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
