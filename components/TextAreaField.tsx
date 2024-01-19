import { TextareaHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export const TextArea: React.FC<TextAreaFieldProps> = ({
  id,
  placeholder,
  required = false,
  register,
  error,
  ...props
}: TextAreaFieldProps) => {
  return (
    <>
      <textarea
        id={id}
        required={required}
        {...register}
        className="appearance-none rounded-none relative block w-full px-3 py-2 
        border border-gray-300 placeholder-gray-500 text-gray-900 
        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
        focus:z-10 sm:text-sm"
        placeholder={placeholder}
        {...props}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};
