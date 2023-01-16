import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useTasks } from 'hooks/useTasks';
import './loader.scss';

export const Loader = () => {
  const { tasksLoading } = useTasks();

  if (!tasksLoading) {
    return null;
  }

  return (
    <div className="loader">
      <div className="loader-icon">
        <AutorenewIcon />
      </div>
    </div>
  );
};
