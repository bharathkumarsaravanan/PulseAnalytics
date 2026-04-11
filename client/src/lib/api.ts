
export async function api(path:string, options:RequestInit= {}, retry:boolean = true) {
    const isServer = typeof window === "undefined";
    let fetchOptions = {
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
            } as HeadersInit,
            cache: "no-store"
        }
    }
    const response = await fetch(`http://localhost:5000${path}`, {
        credentials: "include",
        ...fetchOptions
    })
    console.log("reached inside", fetchOptions);
    if (response.status === 401 && retry) {
        console.log("reached inside retrying");
        try {
            const refreshRes = await fetch("http://localhost:5000/auth/refresh", {
                method: "POST",
                credentials: "include",
                ...fetchOptions
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