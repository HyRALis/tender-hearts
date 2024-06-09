import { IRegisterFormInputs } from '@/app/[locale]/(auth)/register/_components/RegisterForm';
import { RoleEnum } from '../types/shared';

export interface RegisterUserServiceData
  extends Omit<IRegisterFormInputs, 'confirmPassword' | 'allowExtraEmails'> {
  role: RoleEnum;
}

export const registerUser = async (data: RegisterUserServiceData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error || 'Something went wrong');
  }
};
