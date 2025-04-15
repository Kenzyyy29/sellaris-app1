"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function RegistForm({
 searchParams,
}: {
 searchParams?: {callbackUrl?: string};
}) {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(false);

 const callbackUrl = searchParams?.callbackUrl || "/login";

 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  const res = await fetch("/api/auth/register", {
   method: "POST",
   body: JSON.stringify({
    fullname: e.target.fullname.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    password: e.target.password.value,
   }),
  });
  if (res.status === 200) {
   e.target.reset();
   setIsLoading(false);
   push(callbackUrl);
  } else {
   setError("Email already exists");
   setIsLoading(false);
  }
 };

 return (
  <div>
   <form
    onSubmit={handleSubmit}
    className="bg-white shadow-xl p-4 max-w-[320px] w-full flex flex-col items-center gap-2 rounded-[8px]">
    <h1 className="text-2xl font-bold">Sellaris Register</h1>
    <div className="flex flex-col gap-2 w-full">
     <input
      type="text"
      name="fullname"
      id="fullname"
      placeholder="Fullname"
      className="w-full border border-gray-400 text-gray-400 focus:outline-none p-2 rounded-[8px]"
     />
    </div>
    <div className="flex flex-col gap-2 w-full">
     <input
      type="email"
      name="email"
      id="email"
      placeholder="Email"
      className="w-full border border-gray-400 text-gray-400 focus:outline-none p-2 rounded-[8px]"
     />
    </div>
    <div className="flex flex-col gap-2 w-full">
     <input
      type="text"
      name="phone"
      id="phone"
      placeholder="Phone"
      className="w-full border border-gray-400 text-gray-400 focus:outline-none p-2 rounded-[8px]"
     />
    </div>
    <div className="flex flex-col gap-2 w-full">
     <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      className="w-full border border-gray-400 text-gray-400 focus:outline-none p-2 rounded-[8px]"
     />
    </div>
    <button
     type="submit"
     className="w-full bg-slate-800 p-2 rounded text-gray-400 cursor-pointer hover:bg-slate-700">
     {isLoading ? "Loading..." : "Register"}
    </button>
   </form>
   <div className="flex gap-2 text-[14px]">
    <h1 className="text-white">Already have an account?</h1>
    <Link href="/login">
     <h1 className="text-blue-300 hover:underline">Login</h1>
    </Link>
   </div>
  </div>
 );
}
