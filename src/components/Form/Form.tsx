import { useState, useEffect } from 'react';

import { Input } from 'components/Input/Input';
import { TaskStatus, Task } from 'types';
import './form.scss';
import { useInput } from 'hooks/useInput';

interface Props {
  selectedTask: Task | null;
}

export const Form = ({ selectedTask }: Props) => {
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

  const handleSave = (event: any) => {
    event?.preventDefault();
    setTitleError(!title);
    setDescriptionError(!description);
  };

  return (
    <form className="form" onSubmit={handleSave}>
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

      <button type="submit">Click</button>
    </form>
  );
};
