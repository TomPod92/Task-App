import { useState, useEffect } from 'react';
import { Input } from 'components/Input/Input';
import { TaskStatus, Task, TaskPriority } from 'types';
import './form.scss';
import { useInput } from 'hooks/useInput';
import { Button } from 'components/Button/Button';
import { RadioButton } from 'components/RadioButton/RadioButton';

interface Props {
  selectedTask: Task | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  onTaskCreate: (task: Task) => void;
}

export const Form = ({
  selectedTask,
  setSelectedTask,
  onTaskCreate,
}: Props) => {
  const {
    value: title,
    setValue: setTitle,
    error: isTitleError,
    setError: setTitleError,
  } = useInput({ required: true });

  const {
    value: description,
    setValue: setDescription,
    error: isDescriptionError,
    setError: setDescriptionError,
  } = useInput({ required: true });

  const resetFormValues = () => {
    setTitle('');
    setTitleError(false);
    setDescription('');
    setDescriptionError(false);
    setPriority(TaskPriority.Low);
  };

  const [priority, setPriority] = useState(TaskPriority.Low);

  const handleSave = (event: any) => {
    event?.preventDefault();

    const titleValue = title.trim();
    const descriptionValue = description.trim();

    const hasErrors = !titleValue || !descriptionValue;

    if (hasErrors) {
      setTitleError(!titleValue);
      setDescriptionError(!descriptionValue);
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: titleValue,
      description: descriptionValue,
      priority: priority,
      status: TaskStatus.Open,
      history: [],
    };
    resetFormValues();
    onTaskCreate(newTask);
  };

  useEffect(() => {
    console.log('selectedTask', selectedTask);
  }, [selectedTask]);

  return (
    <form className="form" onSubmit={handleSave}>
      <h2 className="form-title">
        {selectedTask ? 'Edit task' : 'Create new task'}
      </h2>
      <Input
        type="text"
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        error={isTitleError}
        errorMessage={'Title is invalid'}
      />

      <Input
        type="textarea"
        name="description"
        label="Description"
        value={description}
        onChange={setDescription}
        error={isDescriptionError}
        errorMessage={'Description is invalid'}
      />

      <h3 className="form-subtitle">Task Priority</h3>
      <RadioButton
        name="priority"
        value={TaskPriority.Low}
        checked={priority === TaskPriority.Low}
        onChange={setPriority}
      />
      <RadioButton
        name="priority"
        value={TaskPriority.Medium}
        checked={priority === TaskPriority.Medium}
        onChange={setPriority}
      />
      <RadioButton
        name="priority"
        value={TaskPriority.High}
        checked={priority === TaskPriority.High}
        onChange={setPriority}
      />

      <Button type="submit" className="form-submit-button">
        {selectedTask ? 'Save' : 'Create'}
      </Button>
    </form>
  );
};
