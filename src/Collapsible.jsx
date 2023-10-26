import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Collapsible = (props) => {
  const [isVisible, setVisible] = useState(true);

  const { title = "click me", children } = props;

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div
        onClick={handleVisibility}
        style={{
          width: 300,
          padding: "0.8rem 1.2rem",
          backgroundColor: "#ddd"
        }}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            style={{ overflow: "hidden", border: "1px solid #ddd" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            // transition={{ duration: 2 }}
          >
            <div style={{ width: 300, padding: "0.8rem 1.2rem" }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collapsible;
