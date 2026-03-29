export async function loginUser(data:{
    email: string,
    password: string,
}) {
    await new Promise((res) => setTimeout(res, 2000));

    if (data.email !== "admin@example.com") {
        throw new Error("Invalid email");
    }

    document.cookie = "auth=true; path=/"

    return { success: true };
}