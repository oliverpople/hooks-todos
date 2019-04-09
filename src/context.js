import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat Breakfast", complete: false },
    { id: 2, text: "Do Laundry", complete: false },
    { id: 3, text: "Finish Project", complete: true }
  ],
  currentTodo: {}
});

export default TodosContext;
