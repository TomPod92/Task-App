import { TaskStatus, taskStatusOrder } from 'types';
import { Column } from 'components/Column/Column';
import './table.scss';

export const Table = () => {
  return (
    <div className="table-container">
      <div className="table">
        {taskStatusOrder.map((status: TaskStatus) => (
          <Column key={status} columnType={status} />
        ))}
      </div>
    </div>
  );
};
