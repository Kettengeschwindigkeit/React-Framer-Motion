import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Button from "./Button";

const Filter = ({ data }) => {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState(0);

  const buttons = data.reduce((acc, el) => {
    if (acc.includes(el.category)) return acc;

    return [...acc, el.category];
  }, ["all"]);

  const handleFilter = (selector) => {
    if (selector === "all") return setCards(data);

    setCards(data.filter(el => el.category === selector));
  };

  return (
    <LayoutGroup>
      <motion.div layout>
        <motion.div style={{ backgroundColor: "#f1f1f1" }}>
          {buttons.map((btn, index) => (
            <Button
              key={btn}
              text={btn}
              handleClick={() => {handleFilter(btn); setSelected(index)}}
              isSelected={selected === index}
            />
          ))}
        </motion.div>
        <motion.div style={{ maxWidth: 400, border: "1px solid #ccc", overflow: "hidden" }} layout>
          <AnimatePresence initial={false} mode="wait">
            {cards.map(el => (
              <motion.div
                layout
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
        </motion.div>
      </motion.div>
    </LayoutGroup>
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
