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
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [priority, setPriority] = useState(TaskPriority.Low);

  const resetForm = () => {
    setTitle('');
    setTitleError('');
    setDescription('');
    setDescriptionError('');
    setPriority(TaskPriority.Low);
  };

  const handleSave = (event: any) => {
    event?.preventDefault();

    const titleValue = title.trim();
    const descriptionValue = description.trim();

    const hasErrors = !titleValue || !descriptionValue;

    if (!titleValue) {
      setTitleError('Title is required');
    }

    if (!descriptionValue) {
      setDescriptionError('Description is required');
    }

    if (hasErrors) {
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

    resetForm();
    onTaskCreate(newTask);
  };

  useEffect(() => {
    // console.log('selectedTask', selectedTask);
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
        error={titleError}
        required
      />

      <Input
        type="textarea"
        name="description"
        label="Description"
        value={description}
        onChange={setDescription}
        error={descriptionError}
        required
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
      <div className="form-button-container">
        <Button type="button" className="form-button">
          Cancel
        </Button>

        <Button version="secondary" type="submit" className="form-button">
          {selectedTask ? 'Save' : 'Create'}
        </Button>
      </div>
    </form>
  );
};
