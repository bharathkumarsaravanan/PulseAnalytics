import { redirect } from "next/navigation";

const serverURL = process.env.NEXT_PUBLIC_API_URL;

export async function api(path:string, options:RequestInit= {}, retry:boolean = true) {
    const isServer = typeof window === "undefined";
    let fetchOptions: RequestInit  = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers as HeadersInit),
        }

    }
    if (isServer) {
        const { cookies } = await import("next/headers");
        const cookiestore = cookies();
        const cookieheader =  (await cookiestore).getAll().map(c => `${c.name}=${c.value}`).join("; ");
        fetchOptions = {
            ...fetchOptions,
            headers: {
                ...fetchOptions.headers,
                    Cookie: cookieheader
            },
            cache: "no-store"
        }
    }
    const response = await fetch(`${serverURL}${path}`, {
        credentials: "include",
        ...fetchOptions
    })
    if (response.status === 401 && retry) {
        if (isServer) {
            redirect('/login')
        }
        console.log("reached inside retrying");
        try {
            const refreshRes = await fetch(`${serverURL}/auth/refresh`, {
                ...fetchOptions,
                method: "POST",
                credentials: "include",
            });

            const result = await refreshRes.json();
            console.log("result", result)
            if (result.success) {
                return api(path, options, false);
            }
        } catch (er) {
            console.error("Refresh failed")
        }
    }

    return response;
}