import React from "react"
import { Button } from "antd"
import styled from "styled-components"

type ButtonType = "primary" | "ghost"
interface ButtonProps {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  type?: ButtonType
  loading?: boolean
}
const StyledButton = styled<any>(Button)``

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  type = "primary",
  loading,
}) => {
  return (
    <StyledButton icon={icon} onClick={onClick} loading={loading}>
      {children}
    </StyledButton>
  )
}
export { ButtonComponent }
