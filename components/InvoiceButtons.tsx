import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonColor?: "red" | "green" | "indigo";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
 buttonColor,
  ...otherProps
}) => {
  const buttonColorOptions = {
    red: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
    green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
    indigo: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
  };

  const buttonClassNames = clsx(
    "py-2 px-4 text-white text-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2",
    buttonColor && buttonColorOptions[buttonColor],
    className
  );

  return (
    <button className={buttonClassNames} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
