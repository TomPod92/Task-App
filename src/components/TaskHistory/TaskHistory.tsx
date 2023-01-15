import classNames from 'classnames';
import { HistoryEntry } from 'types';
import './taskHistory.scss';

interface Props {
  history?: HistoryEntry[];
  className?: string;
}

export const TaskHistory = ({ history, className }: Props) => {
  // console.log('history', history);
  if (!history?.length) {
    return null;
  }

  return (
    <div className={classNames('task-history-container', className)}>
      <h3>Task history</h3>
      <ul className="task-history-list">
        {history.map((entry) => (
          <li className="task-history-entry">
            {entry.date}-{entry.changeDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};
