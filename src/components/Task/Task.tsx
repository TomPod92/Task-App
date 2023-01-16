import classNames from 'classnames';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from 'components/Button/Button';
import { PriorityIcon } from 'components/PriorityIcon/PriorityIcon';
import { Task as TaskType, taskStatusOrder } from 'types';
import { useTasks } from 'hooks/useTasks';
import './task.scss';

interface Props {
  task: TaskType;
  className?: string;
}

export const Task = ({ task, className }: Props) => {
  const { changeTaskStatus, handleSelectTaskToEdit } = useTasks();

  const handleMoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    changeTaskStatus(task);
  };

  const showChangeStatusButton =
    task.status !== taskStatusOrder[taskStatusOrder.length - 1];

  return (
    <li
      className={classNames('task-item', className)}
      onClick={() => handleSelectTaskToEdit(task)}
    >
      <div className="task-item-info">
        <PriorityIcon priority={task.priority} />
        <p className="task-item-text">{task.title}</p>
      </div>

      {showChangeStatusButton && (
        <Button onClick={handleMoveClick}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      )}
    </li>
  );
};
