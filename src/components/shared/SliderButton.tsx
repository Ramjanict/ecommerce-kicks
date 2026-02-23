import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderButtonProps {
  direction?: "left" | "right";
  onClick: () => void;
  className?: string;
}

const SliderButton = ({
  direction = "right",
  onClick,
  className = "",
}: SliderButtonProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors ${className}`}
    >
      <Icon size={20} />
    </button>
  );
};

export default SliderButton;
