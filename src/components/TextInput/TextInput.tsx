import './textInput.scss';

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  disabled?: boolean;
  outerClassName?: string;
  innerClassName?: string;
}

export const TextInput = ({
  name,
  label,
  value,
  onChange,
  error,
  disabled,
  outerClassName,
  innerClassName,
}: Props) => {
  const outerClass = `text-input-outer-container ${
    outerClassName ? outerClassName : ''
  } ${error ? 'input-error' : ''}`;

  const innerClass = `text-input-inner-container ${innerClassName} ${
    error ? 'input-error' : ''
  }`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <label
          htmlFor={name}
          className={`text-input-label ${
            value ? 'text-input-label-translated' : ''
          }`}
        >
          {label}
        </label>
        <input
          className="text-input"
          type="text"
          id={name}
          name={name}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-input-error">{error}</p>}
    </div>
  );
};
