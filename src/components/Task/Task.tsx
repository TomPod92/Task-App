import classNames from 'classnames';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from 'components/Button/Button';
import { PriorityIcon } from 'components/PriorityIcon/PriorityIcon';
import { Task as TaskType, taskStatusOrder } from 'types';
import { useTasks } from 'hooks/useTasks';
import './task.scss';
import Drawer from 'components/Drawer/Drawer';
import { useState } from 'react';
import { TaskHistory } from 'components/TaskHistory/TaskHistory';

interface Props {
  task: TaskType;
  className?: string;
}

export const Task = ({ task, className }: Props) => {
  const { changeTaskStatus, handleSelectTaskToEdit } = useTasks();
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((p) => !p);
  };

  const handleTaskClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    task: TaskType
  ) => {
    e.stopPropagation();
    handleSelectTaskToEdit(task);
  };

  const handleMoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    changeTaskStatus(task);
  };

  const showChangeStatusButton =
    task.status !== taskStatusOrder[taskStatusOrder.length - 1];

  return (
    <Drawer
      isOpen={isOpen}
      head={
        <div
          className={classNames('task-item-head', className)}
          onClick={toggleIsOpen}
        >
          <div className="task-item-head-info">
            <PriorityIcon priority={task.priority} />
            <p className="task-item-head-text">{task.title}</p>
          </div>

          <div className="task-item-head-buttons-container">
            <Button onClick={(e) => handleTaskClick(e, task)}>
              <EditIcon />
            </Button>
            {showChangeStatusButton && (
              <Button onClick={handleMoveClick}>
                <KeyboardDoubleArrowRightIcon />
              </Button>
            )}
          </div>
        </div>
      }
    >
      <div className="task-item-body">
        <p>{task.description}</p>
        <TaskHistory history={task.history} />
      </div>
    </Drawer>
  );
};
