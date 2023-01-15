import classNames from 'classnames';
import { TaskStatus, taskStatusOrder } from 'types';
import { Column } from 'components/Column/Column';
import './table.scss';

interface Props {
  className?: string;
}

export const Table = ({ className }: Props) => {
  return (
    <div className={classNames('table', className)}>
      {taskStatusOrder.map((status: TaskStatus) => (
        <Column key={status} columnType={status} />
      ))}
    </div>
  );
};
