import Link from "next/link";

export default function AuthLayout({children}: {children: React.ReactNode}) {
 return (
  <div>
   <nav className="fixed p-5 px-10 top-0 left-0 z-10 w-full flex justify-between items-center bg-[#337367] text-white">
    <ul className="flex justify-center w-[200px] items-center">
     <Link href="/">
      <h1
       className="text-3xl font-bold italic"
       style={{fontFamily: "Raleway"}}>
       Sellaris
      </h1>
     </Link>
    </ul>
    <ul className="w-[200px] flex justify-center">
     <Link href="/login">Contact Us</Link>
    </ul>
   </nav>
   {children}
  </div>
 );
}
