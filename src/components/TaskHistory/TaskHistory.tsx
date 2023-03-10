import classNames from 'classnames';
import { HistoryEntry } from 'types';
import './taskHistory.scss';

interface Props {
  history?: HistoryEntry[];
  className?: string;
}

export const TaskHistory = ({ history, className }: Props) => {
  const intlF = new Intl.DateTimeFormat('en-EN', { dateStyle: 'full' });

  if (!history?.length) {
    return null;
  }

  return (
    <div className={classNames('task-history-container', className)}>
      <h3 className="task-history-title">Task history</h3>
      <ul className="task-history-list">
        {history.map((entry) => (
          <li className="task-history-entry" key={entry.date.toISOString()}>
            {intlF.format(entry.date)} - {entry.changeDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};
