import { HistoryEntry } from 'types';
import './taskHistory.scss';

interface Props {
  history?: HistoryEntry[];
}

export const TaskHistory = ({ history }: Props) => {
  // console.log('history', history);
  if (!history?.length) {
    return null;
  }

  return (
    <div className="task-history-container">
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
