import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";
import Collapsible from "./Collapsible";
import Filter from "./Filter";

import { data } from "./data";
import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [show, setShow] = useState(false);

  const pVariants = {
    hidden: {
      x: 1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const listVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5
      }
    }),
    hidden: { opacity: 0, y: 100 }
  };

  const items = ["Text 1", "Text 2", "Text 3"];

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>
            <Collapsible title="Toggle content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam nemo, autem ex dolore debitis consequatur nulla ad suscipit cupiditate iusto similique illo distinctio eos sed dolores quo totam consectetur laborum.
            </Collapsible>
          </div>
          <div>
            <motion.img
              src={logo}
              className="App-logo"
              alt="logo"
              animate={{ rotate: 360 }}
              transition={{
                delay: 3,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                repeatType: "reverse",
                type: "tween",
                ease: "easeInOut"
              }}
            />
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: 0.5 }}
              variants={pVariants}
            >
              Edit <code>src/App.js</code> and save to reload.
            </motion.p>
            <motion.a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                color: "white"
              }}
            >
              Learn React
            </motion.a>
            {items.map((el, i) => (
              <motion.li
                key={el}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {el}
              </motion.li>
            ))}
          </div>
          <Filter data={data} />
        </div>
      </header>
    </div>
  );
}

export default App;
