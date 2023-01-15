import classNames from 'classnames';
import { TaskPriority } from 'types';
import './priorityIcon.scss';

interface Props {
  priority: TaskPriority;
  className?: string;
}

export const PriorityIcon = ({ priority, className }: Props) => {
  return (
    <div
      className={classNames(
        `priority-icon priority-icon-${priority}`,
        className
      )}
    >
      !
    </div>
  );
};
