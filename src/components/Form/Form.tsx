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
    setSelectedTask,
    createTask,
    toggleFormModal,
  } = useTask();

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [priority, setPriority] = useState(TaskPriority.Low);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
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

    setTitle(selectedTask.title);
    setDescription(selectedTask.description);
    setPriority(selectedTask.priority);

    setSelectedTask(null);

    setIsModalOpen(false);
  };

  useEffect(() => {
    // console.log('selectedTask', selectedTask);
    // console.log('title', title);
    // console.log('description', description);
    // console.log('-----------');
    if (selectedTask && (title || description)) {
      setIsModalOpen(true);
    }
    // console.log('selectedTask', selectedTask);
  }, [selectedTask, title, description]);

  return (
    <Modal
      open={isFormModalOpen}
      onOverlayClick={toggleFormModal}
      onCancel={handleCancelModal}
      onConfirm={handleConfirmModal}
      title={selectedTask ? 'Edit task' : 'Create Task'}
    >
      <form className={classNames('form', className)} onSubmit={handleSave}>
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
