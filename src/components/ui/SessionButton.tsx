"use client";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useState} from "react";

const SessionButton = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleOpen = () => {
  setIsOpen(!isOpen);
 };

 const {data: session, status}: {data: any; status: string} = useSession();
 return (
  <div>
   {status === "authenticated" ? (
    <div className="flex">
     <button
      onClick={toggleOpen}
      className="cursor-pointer">
      {session?.user?.fullname}
     </button>
     {isOpen && (
      <div className="absolute bg-white shadow-lg mt-8 text-black w-48 right-10">
       <ul className="rounded-[8px] w-full">
        <li className="px-4 py-2 hover:bg-gray-200">Item A</li>
        <button className="px-4 py-2 hover:bg-gray-200 w-full cursor-pointer text-start">
         <Link href="/master">Master</Link>
        </button>
        <button
         onClick={() => signOut()}
         className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
         Sign Out
        </button>
       </ul>
      </div>
     )}
    </div>
   ) : (
    <button
     className="cursor-pointer"
     onClick={() => signIn()}>
     Sign In
    </button>
   )}{" "}
  </div>
 );
};

export default SessionButton;
