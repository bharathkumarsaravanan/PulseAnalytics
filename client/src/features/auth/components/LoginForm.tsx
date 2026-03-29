"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "all/features/auth/schemas/auth";
import { useState } from "react";
import { loginUser } from "all/services/auth.service";
import { useRouter } from "next/navigation";
import Button from "all/components/ui/Button";
import Input from "all/components/ui/Input";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setApiError("");

    try {
      const res = await loginUser(data);
      console.log("login success");
      router.push("/dashboard");
    } catch (err: any) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-black">Email</label>
          <Input
            {...register("email")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm mb-1 text-black">Password</label>
          <Input
            {...register("password")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {apiError && <p className="text-red-500 text-sm">{apiError}</p>}
        <Button
          disabled={loading}
        >
          {loading ? "loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
