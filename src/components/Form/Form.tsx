import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { RadioButton } from 'components/RadioButton/RadioButton';
import { Modal } from 'components/Modal/Modal';
import { TaskHistory } from 'components/TaskHistory/TaskHistory';
import { TaskStatus, Task, TaskPriority } from 'types';
import { useTask } from 'hooks/useTask';
import './form.scss';

interface Props {
  className?: string;
}

export const Form = ({ className }: Props) => {
  const {
    selectedTask,
    isFormModalOpen,
    createTask,
    editTask,
    toggleFormModal,
    clearSelectedTask,
  } = useTask();

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

  const handleConfirmClick = () => {
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

    const now = new Date().toISOString();

    const newTask: Task = {
      id: selectedTask ? selectedTask.id : crypto.randomUUID(),
      title: titleValue,
      description: descriptionValue,
      priority: priority,
      status: TaskStatus.Open,
      history: selectedTask
        ? selectedTask.history
        : [{ date: now, changeDescription: 'Task created' }],
    };

    if (selectedTask) {
      editTask(newTask);
    } else {
      createTask(newTask);
    }
  };

  const handleCancelClick = () => {
    clearSelectedTask();
    resetForm();
    toggleFormModal();
  };

  useEffect(() => {
    console.log('selectedTask', selectedTask);
    if (selectedTask) {
      console.log('wchodze');
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setPriority(selectedTask.priority);
    }
  }, [selectedTask]);

  return (
    <Modal
      open={isFormModalOpen}
      onCancel={handleCancelClick}
      onConfirm={handleConfirmClick}
      title={selectedTask ? 'Edit task' : 'Create Task'}
      confirmButtonText={selectedTask ? 'Save changes' : 'Create'}
    >
      <form className={classNames('form', className)}>
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
        <div className="form-priority-container">
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
        </div>

        <TaskHistory history={selectedTask?.history} />
      </form>
    </Modal>
  );
};
