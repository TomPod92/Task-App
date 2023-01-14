import './input.scss';

interface Props {
  type: 'text' | 'textarea';
  name: string;
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  required?: boolean;
  disabled?: boolean;
  outerClassName?: string;
  innerClassName?: string;
}

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  error,
  required,
  disabled,
  outerClassName,
  innerClassName,
}: Props) => {
  const outerClass = `input-outer-container ${
    outerClassName ? outerClassName : ''
  }`;

  const innerClass = `input-inner-container ${innerClassName} ${
    error ? 'input-with-error' : ''
  }`;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };
  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <label
          htmlFor={name}
          className={`input-label ${value ? 'input-label-translated' : ''}`}
        >
          {required && '*'}
          {label}
        </label>
        {type === 'text' ? (
          <input
            className="input"
            type="text"
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <textarea
            className="input"
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={handleChange}
          />
        )}
      </div>
      <p className={`input-error ${error ? 'input-error-visible' : ''}`}>
        {error}
      </p>
    </div>
  );
};
