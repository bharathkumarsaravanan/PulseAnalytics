import { api } from "all/lib/api";
import ProfileForm from "all/features/settings/components/ProfileForm";

export default async function SettingsPage() {
    const res = await api('/settings/get-user');
    if (!res.ok) {
        throw new Error("Failed to fetch!")
    }
    const { success, user } = await res.json();

    return (
        <div>
            <ProfileForm initData={user} />
        </div>
    )
}  