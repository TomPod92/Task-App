import { useState, useEffect } from 'react';

import { TextInput } from 'components/TextInput/TextInput';
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
    error: titleError,
    setError: setTitleError,
  } = useInput({ required: true });

  return (
    <div className="form">
      <TextInput
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        error={titleError}
      />
    </div>
  );
};
