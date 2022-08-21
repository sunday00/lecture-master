import { useRecoilValue } from 'recoil';
import { todoListStateState } from '@/stores/todo.jsx';

export default () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStateState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Complete: {totalCompletedNum}</li>
      <li>Uncompleted: {totalUncompletedNum}</li>
      <li>Completed Ratio: {formattedPercentCompleted}</li>
    </ul>
  )
}