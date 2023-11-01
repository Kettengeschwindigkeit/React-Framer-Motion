import { AnimatePresence, Reorder } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    height: 0
  },
  animate: {
    opacity: 1,
    height: "auto"
  },
  exit: {
    opacity: 0,
    height: 0
  }
};

export const Todos = ({ todos = [], setTodos, onRemove }) => {
  return (
    <Reorder.Group style={{ listStyle: "none" }} as="ol" axys="y" values={todos} onReorder={setTodos}>
      <AnimatePresence initial={false}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

const TodoItem = ({ todo, onRemove }) => {
  return (
    <Reorder.Item
      style={{
        width: "500px",
        margin: "16px 0px",
        border: "1px solid white",
        borderRadius: "10px"
      }}
      value={todo}
      onDoubleClick={() => onRemove(todo.id)}
      whileDrag={{
        scale: 1.1,
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      }}
      {...variants}
    >
      <span>{todo.title}</span>
    </Reorder.Item>
  );
};
