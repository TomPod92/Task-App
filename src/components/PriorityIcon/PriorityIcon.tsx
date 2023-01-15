import { TaskPriority } from 'types';
import './priorityIcon.scss';

interface Props {
  priority: TaskPriority;
}

export const PriorityIcon = ({ priority }: Props) => {
  return <div className={`priority-icon priority-icon-${priority}`}>!</div>;
};
