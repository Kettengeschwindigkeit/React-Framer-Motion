import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Filter = ({ data }) => {
  const [cards, setCards] = useState(data.filter(el => el.category === "cars"));

  const buttons = data.reduce((acc, el) => {
    if (acc.includes(el.category)) return acc;

    return [...acc, el.category];
  }, []);

  const handleFilter = (selector) => {
    console.log("click", selector)
    setCards(data.filter(el => el.category === selector));
  };

  const handleFilter1 = () => {
    console.log("click-1")
  };

  return (
    <div>
      <div>
        {buttons.map(btn => (
          <Button key={btn} text={btn} handleClick={() => handleFilter(btn)} handlClick1={handleFilter1} />
        ))}
      </div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        <AnimatePresence initial={false} mode="wait">
          {cards.map(el => (
            <motion.div
              key={el.title}
              style={boxStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {el.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
};

export default Filter;

const boxStyle = {
  width: "100px",
  margin: "2px",
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "100px",
  color: "#ffffff",
  backgroundColor: "#2196F3",
  float: "left",
};
