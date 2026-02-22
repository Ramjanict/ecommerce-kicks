import clsx from "clsx";
import React, { type ReactNode } from "react";

interface CommonHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
  size?: "large";
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  children,
  className = "",
  size = "large",
  ...props
}) => {
  const baseStyles = "break-words leading-relaxed";

  const sizeStyles: Record<typeof size, string> = {
    large:
      " text-[40px] md:text-[74px] fon-semibold uppercase text-white leading-none tracking-normal",
  };

  const HeadingTag = size === "large" ? "h1" : "h2";

  return (
    <HeadingTag
      className={clsx(baseStyles, sizeStyles[size], className)}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default CommonHeader;
