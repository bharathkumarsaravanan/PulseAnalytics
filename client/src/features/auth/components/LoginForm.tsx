"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "all/features/auth/schemas/auth";
import { loginUser } from 'all/api/auth.service';
import { useRouter } from 'next/navigation';
import Button from 'all/components/ui/Button';
import Input from 'all/components/ui/Input';
import { useMutation } from '@tanstack/react-query';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      router.push('/dashboard');
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className='w-full max-w-md bg-white p-6 rounded-lg shadow'>
      <h1 className='text-2xl font-bold mb-6 text-center text-black'>Login</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4'>
        <div>
          <label className='block text-sm mb-1 text-black'>Email</label>
          <Input
            {...register('email')}
            className='w-full border px-3 py-2 rounded'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className='block text-sm mb-1 text-black'>Password</label>
          <Input
            {...register('password')}
            className='w-full border px-3 py-2 rounded'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>
        {mutation.isError && (
          <p className='text-red-500 text-sm'>{mutation.error?.message}</p>
        )}
        <Button disabled={mutation.isPending}>
          {mutation.isPending ? 'loading...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}
