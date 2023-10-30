import { motion } from "framer-motion";

const Button = (props) => {
  const { text, handleClick = Function.prototype, isSelected } = props;

  return (
    <motion.button
      layout
      style={btnStyle}
      whileHover={{ backgroundColor: "#ddd" }}
      whileTap={{ backgroundColor: "#ccc" }}
      onClick={handleClick}
    >
      {isSelected && <BgSelector />}
      <motion.span
        style={{ position: "relative" }}
        animate={{ color: isSelected ? "#fff" : "#000" }}
      >{text}</motion.span>
    </motion.button>
  );
};

export default Button;

const btnStyle = {
  position: "relative",
  padding: "12px 16px",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer"
};

const BgSelector = () => {
  return (
    <motion.div
      layoutId="activeMenuItem"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        zIndex: 0
      }}
    />
  );
};
