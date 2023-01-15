import { Button } from 'components/Button/Button';
import { PriorityIcon } from 'components/PriorityIcon/PriorityIcon';
import { TaskPriority } from 'types';
import './radioButton.scss';

interface Props {
  name: string;
  label: string;
  value: TaskPriority;
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<TaskPriority>>;
  className?: string;
}

export const RadioButton = ({
  name,
  label,
  value,
  checked,
  onChange,
  className,
}: Props) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className={`radio-button ${className ? className : ''}`}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <Button className={checked ? 'checked' : ''} onClick={handleChange}>
        {label}
        {/* <PriorityIcon priority={TaskPriority[label]} /> */}
      </Button>
    </div>
  );
};
