import { TaskStatus, Task } from 'types';
import './form.scss';

interface Props {
  selectedTask: Task | null;
}

export const Form = ({ selectedTask }: Props) => {
  return <div className="form">{selectedTask?.title}</div>;
};
