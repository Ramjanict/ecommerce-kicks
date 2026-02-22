import React, { type ReactNode } from "react";

interface CommonSpace {
  children: ReactNode;
  className?: string;
}

const CommonSpaceBottom: React.FC<CommonSpace> = ({ children, className }) => {
  return <div className={`pb-10 ${className}`}>{children}</div>;
};

export default CommonSpaceBottom;
