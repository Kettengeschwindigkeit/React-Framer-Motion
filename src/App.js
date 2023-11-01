import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";
import Collapsible from "./Collapsible";
import Filter from "./Filter";

import { data } from "./data";
import { useState } from "react";
import Menu from "./Menu";
import { MButton } from "./MButton";
import { Todos } from "./Todos";
import { CreateTodo } from "./CreateTodo";

const defaultTodos = [
  { id: 1, title: "Learn Framer Motion", completed: false },
  { id: 2, title: "Create nice animation", completed: false },
  { id: 3, title: "Use Reorder component", completed: false }
];

function App() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState(defaultTodos);

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

  const textVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };

  const textVariants1 = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
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

  const featureAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
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
        <motion.section initial="hidden" whileInView="visible">
          <motion.h1 variants={textVariants} custom={1}>Некоторый заголовок</motion.h1>
          <motion.p variants={textVariants} custom={2}>Некоторый подзаголовок</motion.p>
          <MButton variants={textVariants} custom={3}>Кнопка</MButton>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.h2 variants={textVariants1} custom={1}>Some header</motion.h2>
          <motion.p variants={textVariants1} custom={2}>Some subheader</motion.p>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.h2 variants={textVariants1} custom={1}>Some another header</motion.h2>
          <motion.p variants={textVariants1} custom={2}>Some another subheader</motion.p>
          <motion.div
            style={{ display: "flex", justifyContent: "center", gap: 15 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <motion.div style={{ width: 80, height: 65, color: "black", backgroundColor: "white" }} variants={featureAnimation} custom={1}>card</motion.div>
            <motion.div style={{ width: 80, height: 65, color: "black", backgroundColor: "white" }} variants={featureAnimation} custom={2}>card</motion.div>
            <motion.div style={{ width: 80, height: 65, color: "black", backgroundColor: "white" }} variants={featureAnimation} custom={3}>card</motion.div>
          </motion.div>
        </motion.section>
        <CreateTodo onCreate={setTodos} />
        <Todos todos={todos} setTodos={setTodos} onRemove={onRemove} />
      </header>
    </div>
  );
}

export default App;
