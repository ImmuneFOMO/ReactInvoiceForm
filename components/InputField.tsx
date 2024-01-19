import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export const Input: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  required = false,
  register,
  error,
  ...props
}: InputFieldProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        required={required}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border 
        border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
        focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
        {...register}
        {...props}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};
