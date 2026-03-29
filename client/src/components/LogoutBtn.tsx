"use client";

import { useRouter } from "next/navigation";

export default function LogoutBtn() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "auth=false; path=/";
        router.push("/login")
    };

    return (
        <button onClick={handleLogout} className="text-red-500">
            Logout
        </button>
    )
}