import AddIcon from '@mui/icons-material/Add';
import { useTask } from 'hooks/useTask';
import { Button } from 'components/Button/Button';
import './formModalButton.scss';

export const FormModalButton = () => {
  const { toggleFormModal } = useTask();
  return (
    <Button className="form-modal-button" onClick={toggleFormModal}>
      <AddIcon />
    </Button>
  );
};
