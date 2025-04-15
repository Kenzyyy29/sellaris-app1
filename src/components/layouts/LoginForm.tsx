"use client";
import {signIn} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function LoginForm({
 searchParams,
}: {
 searchParams?: {callbackUrl?: string};
}) {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(false);

 const callbackUrl = searchParams?.callbackUrl || "/";

 const handleLogin = async (e: any) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
   const res = await signIn("credentials", {
    email: e.target.email.value,
    password: e.target.password.value,
    redirect: false,
    callbackUrl,
   });
   if (!res?.error) {
    e.target.reset();
    setIsLoading(false);
    push(callbackUrl);
   } else {
    setError(res.error);
    if (res.status === 401) {
     e.target.reset();
     setError("Invalid email or password");
    }
   }
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <div className="bg-white/50 backdrop-blur-sm max-w-sm w-full p-5 flex flex-col gap-4 justify-center items-center rounded-[8px] shadow-xl shadow-gray-300 ">
   <h1
    className="text-2xl font-bold text-center italic"
    style={{fontFamily: "Raleway"}}>
    Sellaris <span>Login</span>
   </h1>
   <form
    onSubmit={(e) => handleLogin(e)}
    className="w-full flex flex-col items-center justify-center gap-4">
    <div className="flex flex-col gap-2 w-full">
     <input
      type="email"
      name="email"
      id="email"
      placeholder="Email"
      className="w-full border border-gray-300 text-gray-400 focus:text-black focus:outline-none p-2 rounded-[8px]"
     />
    </div>
    <div className="flex flex-col gap-2 w-full">
     <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      className="w-full border border-gray-300 text-gray-400 focus:text-black focus:outline-none p-2 rounded-[8px] "
     />
    </div>
    {error && <p className="text-red-500">{error}</p>}
    <button
     disabled={isLoading}
     type="submit"
     className="w-full bg-[#337367] font-semibold p-2 rounded text-white cursor-pointer hover:bg-[#50857a]">
     {isLoading ? "Loading..." : "Sign In"}
    </button>
   </form>
   <div className="flex gap-2 text-[14px]">
    <h1 className="text-gray-400">Doesn't have an account?</h1>
    <Link href="/register">
     <h1 className="text-blue-300 hover:underline">Create Account</h1>
    </Link>
   </div>
  </div>
 );
}
