import classNames from 'classnames';
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
    <div className={classNames('radio-button', className)}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <Button
        className={classNames('task-priority-button', {
          checked: checked,
        })}
        onClick={handleChange}
      >
        <PriorityIcon priority={value} />
        <p>{label}</p>
      </Button>
    </div>
  );
};
