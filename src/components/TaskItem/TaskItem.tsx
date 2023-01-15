import classNames from 'classnames';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Button } from 'components/Button/Button';
import { PriorityIcon } from 'components/PriorityIcon/PriorityIcon';
import { Task as TaskType, taskStatusOrder } from 'types';
import { useTask } from 'hooks/useTask';
import './taskItem.scss';

interface Props {
  task: TaskType;
  className?: string;
}

export const TaskItem = ({ task, className }: Props) => {
  const { changeTaskStatus, setSelectedTask } = useTask();

  const handleMoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    changeTaskStatus(task);
  };

  return (
    <li
      className={classNames('task-item', className)}
      onClick={() => setSelectedTask(task)}
    >
      <div className="task-item-info">
        <PriorityIcon priority={task.priority} />
        <p className="task-item-text">{task.title}</p>
      </div>

      {task.status !== taskStatusOrder[taskStatusOrder.length - 1] && (
        <Button onClick={handleMoveClick}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      )}
    </li>
  );
};
