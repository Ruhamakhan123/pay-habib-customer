import { getSession } from "@/lib/helper";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  console.log(session);
  if (!session) {
    redirect("/login");
  } else {
    redirect("/customer/payment");
  }
  return <div>page</div>;
}
