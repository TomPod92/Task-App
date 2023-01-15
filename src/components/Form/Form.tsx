import { useState, useEffect } from 'react';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { RadioButton } from 'components/RadioButton/RadioButton';
import { Modal } from 'components/Modal/Modal';
import { TaskHistory } from 'components/TaskHistory/TaskHistory';
import { TaskStatus, Task, TaskPriority } from 'types';
import { useTask } from 'hooks/useTask';
import './form.scss';

export const Form = () => {
  const { selectedTask, setSelectedTask, createTask } = useTask();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [priority, setPriority] = useState(TaskPriority.Low);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
    setId('');
    setTitle('');
    setTitleError('');
    setDescription('');
    setDescriptionError('');
    setPriority(TaskPriority.Low);

    !selectedTask && setSelectedTask(null);
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
    createTask(newTask);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    // resetForm();
    if (!selectedTask) {
      return;
    }

    setId(selectedTask.id);
    setTitle(selectedTask.title);
    setDescription(selectedTask.description);
    setPriority(selectedTask.priority);

    setSelectedTask(null);

    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log('selectedTask', selectedTask);
    console.log('title', title);
    console.log('description', description);
    console.log('-----------');
    if (selectedTask && (title || description)) {
      setIsModalOpen(true);
    }
    // console.log('selectedTask', selectedTask);
  }, [selectedTask, title, description]);

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
        label="Low"
        value={TaskPriority.Low}
        checked={priority === TaskPriority.Low}
        onChange={setPriority}
      />
      <RadioButton
        name="priority"
        label="Medium"
        value={TaskPriority.Medium}
        checked={priority === TaskPriority.Medium}
        onChange={setPriority}
      />
      <RadioButton
        name="priority"
        label="High"
        value={TaskPriority.High}
        checked={priority === TaskPriority.High}
        onChange={setPriority}
      />

      <TaskHistory history={selectedTask?.history} />

      <div className="form-button-container">
        <Button version="secondary" type="submit" className="form-button">
          {id ? 'Save' : 'Create'}
        </Button>
        <Button type="button" onClick={resetForm} className="form-button">
          {id ? 'Cancel' : 'Clear'}
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleCancelModal}
        onConfirm={handleConfirmModal}
        title="You have unsaved changes"
      >
        <p>
          Are you sure you want to discard them and display selected task
          information?
        </p>
      </Modal>
    </form>
  );
};
