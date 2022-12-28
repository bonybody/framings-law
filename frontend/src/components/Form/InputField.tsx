import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Input } from './Input'

export type InputFieldProps = {
  label: string
  placeholder: string
  register: UseFormRegisterReturn
  backgroundColor: string
  width?: string
}

export const InputField = ({
  label,
  register,
  placeholder,
  backgroundColor,
  width
}: InputFieldProps) => {
  return (
    <InputFieldArea width={width}>
      <Label>{label}</Label>
      <Input register={register} placeholder={placeholder} backgroundColor={backgroundColor} />
    </InputFieldArea>
  )
}

const InputFieldArea = styled.div<{ width?: string }>`
  width: ${(props) => props.width}; ;
`

const Label = styled.label`
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`
