import { useRecoilState } from "recoil";
import { todoListState } from "../state/todo";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todoItem) => todoItem.id === item.id);

  const editItemText = (e) => {
    const editItem = { ...todoList[index], text: e.target.value };
    const newList = replaceItemAtIndex(todoList, index, editItem);

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const toggledItem = {
      ...todoList[index],
      isComplete: !todoList[index].isComplete,
    };
    const newList = replaceItemAtIndex(todoList, index, toggledItem);

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <span>{item.id}</span>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

const replaceItemAtIndex = (list, index, newItem) => {
  return [...list.slice(0, index), newItem, ...list.slice(index + 1)];
};

const removeItemAtIndex = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

export default TodoItem;
