import { motion } from "framer-motion";
import React from "react";

interface ColorCircleButtonProps {
  color: string;
  size?: number; // default 32px
  borderWidth?: number; // default 4
  outlineWidth?: number; // default 2
  onClick?: () => void;
  className?: string;
}

const ColorCircleButton: React.FC<ColorCircleButtonProps> = ({
  color,
  size = 32,
  borderWidth = 4,
  outlineWidth = 2,
  onClick,
  className = "",
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      onClick={onClick}
      className={`rounded-full transition-all cursor-pointer  ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: `${borderWidth}px solid ${color}`,
        outline: `${outlineWidth}px solid ${color}`,
        outlineOffset: 2,
      }}
    />
  );
};

export default ColorCircleButton;
