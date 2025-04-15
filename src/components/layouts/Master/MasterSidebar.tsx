"use client";

import {signOut} from "next-auth/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FaCreditCard, FaUser} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";
import {GoGear} from "react-icons/go";
import {MdDashboard} from "react-icons/md";
import {RiCustomerService2Fill} from "react-icons/ri";
import {TbReport} from "react-icons/tb";

const links = [
 {name: "Dashboard", path: "/master", icon: <MdDashboard />},
 {name: "Product", path: "/master/settings", icon: <FaCartShopping />},
 {name: "Reports", path: "/master/settings", icon: <TbReport />},
 {name: "Payment Method", path: "/master/settings", icon: <FaCreditCard />},
 {name: "Client", path: "/master/client", icon: <FaUser />},
 {name: "Services", path: "/master/settings", icon: <RiCustomerService2Fill />},
 {name: "Settings", path: "/master/settings", icon: <GoGear />},
];

const MasterSidebar = () => {
 const pathname = usePathname();
 return (
  <div className="fixed left-0 top-0 h-full max-w-[250px] w-full bg-white/40 p-5 flex flex-col justify-between items-center rounded-[8px] shadow-sm ">
   <ul className="flex flex-col w-full items-center">
    <Link href="/">
     <h1 className="text-3xl italic font-bold text-[#337367]">Sellaris</h1>
    </Link>
    <ul className="flex flex-col gap-2 w-full mt-10">
     {links.map((link, index) => (
      <Link
       href={link.path}
       key={index}
       className={`flex items-center gap-4 p-2 hover:bg-[#337367] hover:text-white rounded-[8px] w-full transition-all duration-500 ${
        link.path === pathname && "bg-[#337367] text-white"
       }`}>
       <li className="text-xl">{link.icon}</li>
       <p>{link.name}</p>
      </Link>
     ))}
    </ul>
   </ul>
   <button
    onClick={() => signOut()}
    className="bg-[#337367] text-white w-full py-2 rounded-[8px] cursor-pointer">
    Sign Out
   </button>
  </div>
 );
};
export default MasterSidebar;
