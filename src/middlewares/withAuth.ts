import {getToken} from "next-auth/jwt";
import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";

const onlyWebMasters = "/masters";
const authPage = ["/login", "/register"];

export default function withAuth(
 middleware: NextMiddleware,
 requireAuth: string[] = []
) {
 return async (req: NextRequest, next: NextFetchEvent) => {
  const pathname = req.nextUrl.pathname;

  if(requireAuth.includes(pathname) || pathname.startsWith(onlyWebMasters)){
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    })

    if(!token && !authPage.includes(pathname)){
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(url);
    }

    if(token){
        if(authPage.includes(pathname)){
            return NextResponse.redirect(new URL("/", req.url));
        }

        if(pathname.startsWith(onlyWebMasters) && token.role !== "web masters"){
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
  }
  return middleware(req, next)
 };
}
