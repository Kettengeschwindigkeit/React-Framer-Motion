import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const pVariants = {
    hidden: {
      x: -1000,
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
      </header>
    </div>
  );
}

export default App;
