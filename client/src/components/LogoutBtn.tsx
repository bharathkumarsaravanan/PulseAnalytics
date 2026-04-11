"use client";

import { useRouter } from "next/navigation";
import { api } from "all/lib/api";

export default function LogoutBtn() {
    const router = useRouter();

    const handleLogout = async () => {
        document.cookie = "auth=false; path=/";
        const res = await api("/auth/logout", {
            method: "POST"
        });
        console.log(await res.json());
        router.push("/login");
    };

    return (
        <button onClick={handleLogout} className="text-red-500">
            Logout
        </button>
    )
}