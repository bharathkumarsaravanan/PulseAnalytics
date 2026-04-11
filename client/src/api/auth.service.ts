import { api } from "all/lib/api";

export async function loginUser(data:{
    email: string,
    password: string,
}) {

    try {
        const res = await api("/auth/login", {
        method: "POST",
        body: JSON.stringify(data)
    });
    const result = await res.json();

    if (!res.ok) {
        throw new Error("Request failed");
    }
    return result;
    } catch (er: any) {
        throw new Error(er || "Something went wrong!");
    }
}
