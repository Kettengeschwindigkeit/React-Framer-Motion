import { forwardRef } from "react";
import { motion } from "framer-motion";

const Button = forwardRef(({ children }, ref) => {
  return (
    <button
      ref={ref}
      style={{
      padding: "15px 26px",
      color: "#FFFFFF",
      backgroundColor: "#2196F3",
      border: "none",
      borderRadius: "12px"
      }}
    >
      {children}
    </button>
  );
});

export const MButton = motion(Button);
