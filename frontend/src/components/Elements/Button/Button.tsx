import styled from '@emotion/styled'
import type { MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  isActive?: boolean
  isDisable?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export const Button = ({ isActive = false, isDisable = false, onClick, children }: ButtonProps) => {
  return (
    <ButtonWrap isActive={isActive} isDisable={isDisable} onClick={onClick}>
      {children}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.button<Required<Pick<ButtonProps, 'isActive' | 'isDisable'>>>`
  cursor: pointer;
  padding: 20px 0;
  min-width: 240px;
  font-size: ${(props) => props.theme.fonts.sizes.body1};
  border: solid 5px #000;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary.main : props.theme.colors.white};
  opacity: ${(props) => (props.isDisable ? 0.6 : 1)};
`
