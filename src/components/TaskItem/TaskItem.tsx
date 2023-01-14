import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from 'components/Button/Button';
import { Task as TaskType, taskStatusOrder } from 'types';
import { useTask } from 'hooks/useTask';
import './taskItem.scss';

interface Props {
  task: TaskType;
}

export const TaskItem = ({ task }: Props) => {
  const { changeTaskStatus, setSelectedTask } = useTask();

  const handleMoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    changeTaskStatus(task);
  };

  return (
    <li className="task-item" onClick={() => setSelectedTask(task)}>
      <p className="task-item-text">{task.title}</p>
      {task.status !== taskStatusOrder[taskStatusOrder.length - 1] && (
        <Button onClick={handleMoveClick}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      )}
    </li>
  );
};
