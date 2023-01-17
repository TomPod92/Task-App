import classNames from 'classnames';
import { Task } from 'components/Task/Task';
import { useTasks } from 'hooks/useTasks';
import { TaskStatus, Task as TaskType } from 'types';
import { getTasksByStatus } from 'utils/utils';
import './column.scss';

interface Props {
  columnType: TaskStatus;
  className?: string;
}

export const Column = ({ columnType, className }: Props) => {
  const { tasks } = useTasks();
  const filteredTasks = getTasksByStatus(tasks, columnType);

  return (
    <div className={classNames('column', className)}>
      <h2 className="column-title">{columnType}</h2>
      <div className="task-list" data-testid="task-list">
        {filteredTasks.map((task: TaskType) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
