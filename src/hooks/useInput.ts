import { useState, useEffect } from 'react';

interface Options {
  required?: boolean;
}

export const useInput = ({ required }: Options) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (touched && required && !value.trim().length) {
      setError(true);
    } else {
      setError(false);
    }
  }, [required, value, touched]);

  useEffect(() => {
    if (value) {
      setTouched(true);
    }
  }, [value]);

  return { value, setValue, error, setError };
};
