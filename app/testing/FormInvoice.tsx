"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "../../lib/types";

export function FormInvoice() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: 432432432432,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("submtting erorr!");
      return;
    }

    console.log(responseData.errors);
    console.log()
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 max-w-96 mx-auto mt-36 bg-slate-500 p-3 rounded"
    >
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
        {...register("email")}
      />
      {errors.email && (
        <p className="bg-red-200 text-red-500 py-2 rounded">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="bg-red-200 text-red-500 py-2 rounded">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        required
        className="px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <p className="bg-red-200 text-red-500 py-2 rounded">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
