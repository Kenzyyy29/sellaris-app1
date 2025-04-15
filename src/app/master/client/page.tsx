import { Metadata } from "next";
import ClientViews from "@/components/layouts/Master/ClientViews";

export const metadata: Metadata = {
 title: "Sellaris - Client Information",
 description: "Sellasis - Client Information",
}

export default function ClientPage() {
 return (
  <div className="flex flex-col gap-4">
   <h1 className="text-2xl font-bold">Client Information</h1>
   <ClientViews />
  </div>
 );
}
