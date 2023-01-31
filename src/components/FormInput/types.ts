import { InputTypes } from '../types'

export interface FormInputProps {
  name: string
  label?: string
  error?: string
  disabled?: boolean
  autoFocus?: boolean
  children?: React.ReactNode
  placeholder?: string
  showHidePassword?: boolean
  type?: InputTypes
  [k: string]: any
}
