import { useEffect, useRef } from 'react'
import { InputTypes } from '../types'
import { FormInputProps } from './types'
import './styles.scss'

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  value,
  placeholder,
  type = InputTypes.TEXT,
  disabled,
  onChange,
  onBlur,
  autoFocus,
  error,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  return (
    <div className="form-input-container">
      {label ? <p className="form-input-label">{label}</p> : null}
      <input
        {...rest}
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        ref={inputRef}
      />
      {error && <p className="form-input-error">{error}</p>}
    </div>
  )
}
