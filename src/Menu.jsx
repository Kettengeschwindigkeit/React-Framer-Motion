import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const menuData = ["Short", "Very Loooooooooooooooooooooong item", "Normal item "];

function Menu() {
  const [activeIndex, setActive] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        backgroundColor: "#eee",
        borderRadius: "25px"
      }}
    >
      {menuData.map((item, index) => (
        <MenuItem
          key={item}
          item={item}
          isSelected={activeIndex === index}
          handleClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

export default Menu;
   
function MenuItem(props) {
  const { item, isSelected, handleClick = Function.prototype } = props;

  return (
    <motion.div
      onClick={handleClick}
      style={{ position: "relative", margin: "0 0.5rem", fontWeight: 900 }}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "rgba(255, 0, 0)" : "#000" }}
    >
      {item}
      {isSelected && <ActiveLine />}
    </motion.div>
  );
};

function ActiveLine() {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        position: "absolute",
        bottom: "-6px",
        left: "5px",
        width: "calc(100% - 10px)",
        height: "4px",
        backgroundColor: "rgb(255, 0, 0)"
      }}
    />
  );
};
