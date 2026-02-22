import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full mx-auto max-w-330 px-4 sm:px-6 lg:px-8", ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
