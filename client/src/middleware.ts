import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const routeAccess: Record<string, string[]> = {
    "/dashboard": ["admin", "user"],
    "/dashboard/analytics": ["admin", "user"],
    "/dashboard/settings": ["admin"],
}

const publicRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value;
    const userRole = request.cookies.get("role")?.value || "user";
    const pathname:string = request.nextUrl.pathname;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (!accessToken || !userRole) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const allowedRoles = routeAccess[pathname];

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
};