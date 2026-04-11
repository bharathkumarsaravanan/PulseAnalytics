'use client';
import { useMutation } from '@tanstack/react-query';
import {
  ProfileFormData,
  profileFormSchema
} from 'all/features/auth/schemas/profileForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from 'all/components/ui/Input';
import Button from 'all/components/ui/Button';
import { addUser } from 'all/api/settings.service';
import { useState } from 'react';

type ProfileFormProps = { name: string; email: string };

export default function ProfileForm({
  initData
}: {
  initData: ProfileFormProps;
}) {
  const [successRes, setSuccessRes] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: initData
  });
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      setSuccessRes(data.message);
    }
  });

  const onSubmit = async (data: ProfileFormProps) => {
    addUserMutation.mutate(data);
  };

  return (
    <div>
      {successRes && <p className='text-green-500 text-sm'>{successRes}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4'>
        <label className='block text-sm mb-1 text-black'>Email</label>
        <Input
          {...register('name')}
          className='w-full border px-3 py-2 rounded'
        />
        {errors.name && (
          <p className='text-red-500 text-sm'>{errors.name.message}</p>
        )}
        <Input
          {...register('email')}
          className='w-full border px-3 py-2 rounded'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
        {addUserMutation.isError && (
          <p className='text-red-500 text-sm'>
            {addUserMutation.error?.message}
          </p>
        )}
        <Button
          disabled={addUserMutation.isPending}
          type='submit'>
          {addUserMutation.isPending ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
