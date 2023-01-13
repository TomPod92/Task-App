import AutorenewIcon from '@mui/icons-material/Autorenew';
import './loader.scss';
interface Props {
  isOpen: boolean;
}

export const Loader = ({ isOpen }: Props) => {
  if (!isOpen) {
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
