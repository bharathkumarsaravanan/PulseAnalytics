

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
    const response = await fetch(`/api${path}`, {
        credentials: "include",
        ...fetchOptions
    })
    if (response.status === 401 && retry) {
        if (isServer) {
            const { redirect } = await import("next/navigation")
            redirect('/login')
        }
        try {
            const refreshRes = await fetch(`/auth/refresh`, {
                ...fetchOptions,
                method: "POST",
                credentials: "include",
            });

            const result = await refreshRes.json();
            if (result.success) {
                return api(path, options, false);
            }
        } catch (er) {
            console.log("Refresh failed")
        }
    }

    return response;
}