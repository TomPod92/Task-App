import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useTask } from 'hooks/useTask';
import './loader.scss';

export const Loader = () => {
  const { tasksLoading } = useTask();

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
