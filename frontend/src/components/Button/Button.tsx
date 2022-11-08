import styled from '@emotion/styled'
import type { MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  isActive?: boolean
  isDisable?: boolean
  handleClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export const Button = ({ isActive, isDisable, handleClick, children }: ButtonProps) => {
  return (
    <ButtonWrap isActive={isActive} isDisable={isDisable} onClick={handleClick}>
      {children}
    </ButtonWrap>
  )
}

type ButtonStyleProps = {
  isActive?: boolean
  isDisable?: boolean
}

const ButtonWrap = styled.button<ButtonStyleProps>`
  cursor: pointer;
  padding: 20px 0;
  min-width: 240px;
  border: solid 5px #000;
  box-sizing: border-box;
  background-color: ${(props) => (props.isActive ? '#FF8A00' : '#fff')};
  opacity: ${(props) => (props.isDisable ? 0.6 : 1)};
`
