import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextAreaFieldProps {
  id: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export const TextAreaField = ({
  id,
  placeholder,
  required = false,
  register,
  error,
}: TextAreaFieldProps) => {
  return (
    <>
      <textarea
        id={id}
        required={required}
        {...register}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};
