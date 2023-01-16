import AddIcon from '@mui/icons-material/Add';
import { useTasks } from 'hooks/useTasks';
import { Button } from 'components/Button/Button';
import './formModalButton.scss';

export const FormModalButton = () => {
  const { toggleFormModal } = useTasks();
  return (
    <Button className="form-modal-button" onClick={toggleFormModal}>
      <AddIcon />
    </Button>
  );
};
