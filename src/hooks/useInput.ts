import { useState, useEffect } from 'react';

interface Options {
  required?: boolean;
}

export const useInput = ({ required }: Options) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (touched && required && !value.trim().length) {
      setError('Required value');
    } else {
      setError('');
    }
  }, [required, value, touched]);

  useEffect(() => {
    if (value) {
      setTouched(true);
    }
  }, [value]);

  return { value, setValue, error, setError };
};
