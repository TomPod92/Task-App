import { TaskItem } from 'components/TaskItem/TaskItem';
import { useTask } from 'hooks/useTask';
import { TaskStatus, Task } from 'types';
import { sortAndFilterTasks } from 'utils/utils';
import './column.scss';

interface Props {
  columnType: TaskStatus;
}

export const Column = ({
  columnType,
}: 
Props) => {
  const { tasks } = useTask();
  const filteredTasks = sortAndFilterTasks(tasks, columnType);

  return (
    <div className="column">
      <h2 className="column-title">{columnType}</h2>
      <ul className="task-list">
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
