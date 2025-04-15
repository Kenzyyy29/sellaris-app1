import MasterSidebar from "@/components/layouts/Master/MasterSidebar";

export default function MasterLayout({children}: {children: React.ReactNode}) {
 return (
  <div>
   <MasterSidebar />
   <main className="ml-64 p-5">{children}</main>
  </div>
 );
}
