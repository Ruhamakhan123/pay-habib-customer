import RequestForm from "@/components/RequestForm";
import { getSession } from "@/lib/helper";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  console.log(session);
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <h1 className="font-semibold text-4xl">Instant Payment</h1>
      </div>
      <RequestForm user={session?.userWithoutPassword} />
    </div>
  );
};

export default page;
