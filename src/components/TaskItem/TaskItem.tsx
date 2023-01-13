import React from 'react';
import { Task as TaskType, TaskStatus, taskStatusOrder } from 'types';
import { Button } from 'components/Button/Button';
import EditIcon from '@mui/icons-material/Edit';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './taskItem.scss';

interface Props {
  task: TaskType;
  onTaskClick: React.Dispatch<React.SetStateAction<TaskType | null>>;
  onMoveTask: (clickedTask: TaskType) => void;
}

export const TaskItem = ({ task, onTaskClick, onMoveTask }: Props) => {
  const handleMoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onMoveTask(task);
  };

  return (
    <li className="task-item" onClick={() => onTaskClick(task)}>
      <p className="task-item-text">{task.title}</p>
      {task.status !== taskStatusOrder[taskStatusOrder.length - 1] && (
        <Button onClick={handleMoveClick}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      )}
    </li>
  );
};
