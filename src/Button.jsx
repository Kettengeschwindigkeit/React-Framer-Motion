import { motion } from "framer-motion";

const Button = (props) => {
  const { text, handleClick } = props;

  return (
    <motion.button
      style={btnStyle}
      whileHover={{ backgroundColor: "#ddd" }}
      whileTap={{ backgroundColor: "#ccc" }}
      onClick={handleClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;

const btnStyle = {
  padding: "12px 16px",
  backgroundColor: "#f1f1f1",
  border: "none",
  outline: "none",
  cursor: "pointer"
};
