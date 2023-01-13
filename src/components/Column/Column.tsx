import { TaskItem } from 'components/TaskItem/TaskItem';
import { TaskStatus, Task } from 'types';
import { sortAndFilterTasks } from 'utils/utils';
import './column.scss';

interface Props {
  tasks: Task[];
  columnType: TaskStatus;
  onTaskClick: React.Dispatch<React.SetStateAction<Task | null>>;
  onMoveTask: (clickedTask: Task) => void;
}

export const Column = ({
  tasks,
  columnType,
  onTaskClick,
  onMoveTask,
}: Props) => {
  const filteredTasks = sortAndFilterTasks(tasks, columnType);

  return (
    <div className="column">
      <h2 className="column-title">{columnType}</h2>
      <ul className="task-list">
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskClick={onTaskClick}
            onMoveTask={onMoveTask}
          />
        ))}
      </ul>
    </div>
  );
};
