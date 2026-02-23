import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 sm:px-6 py-2 flex justify-center items-center flex-shrink-0  rounded-md text-sm font-medium transition bg-kicks-blue hover:bg-blue-700 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
