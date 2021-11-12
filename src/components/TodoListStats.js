import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../state/todo";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Total completed: {totalCompletedNum}</li>
      <li>Total uncompleted: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}%</li>
    </ul>
  );
}

export default TodoListStats;
