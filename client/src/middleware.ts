import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { sidebarItems } from './features/dashboard/config/sidebar';

let routeAccess: Record<string, string[]> = {};
sidebarItems.forEach(item => routeAccess[item.href] = item.access);

const publicRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value;
    const userRole = request.cookies.get("role")?.value || "user";
    const pathname:string = request.nextUrl.pathname;
    const unKnown = !accessToken || !userRole; 

    if (pathname == "/") {
        if (unKnown) {
            return NextResponse.redirect(new URL("/login", request.url));
        } 
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (unKnown) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // const allowedRoles = routeAccess[pathname];
    const matchedRoutes = Object.keys(routeAccess)
        .sort((a, b) => b.length - a.length)
        .find(route => pathname.startsWith(route));
    
    const allowedRoles = matchedRoutes ? routeAccess[matchedRoutes] : null;

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next()
}   

export const config = {
  matcher: ['/dashboard/:path*', "/"]
};