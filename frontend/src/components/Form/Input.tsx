import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

export type InputProps = {
  placeholder: string
  register: UseFormRegisterReturn
  backgroundColor: string
  minWidth?: string
}

export const Input = ({ placeholder, register, backgroundColor, minWidth }: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      {...register}
      backgroundColor={backgroundColor}
      minWidth={minWidth}
    />
  )
}

const TextInput = styled.input<Pick<InputProps, 'backgroundColor' | 'minWidth'>>`
  font-family: inherit;
  width: 100%;
  min-width: ${(props) => props.minWidth};
  height: 56px;
  padding-left: 16px;
  font-size: 24px;
  color: white;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
  box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
`