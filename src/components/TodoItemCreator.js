import { useState } from "react";
import { useRecoilState } from "recoil";
import { getId, todoListState } from "../state/todo";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();

    setTodoList((oldTodoList) =>
      oldTodoList.concat([{ id: getId(), text: inputValue, isComplete: false }])
    );

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={onChange} value={inputValue} />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
}

export default TodoItemCreator;
