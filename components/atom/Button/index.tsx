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
  className?: string
}
const StyledButton = styled<any>(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  type = "primary",
  loading,
  className,
}) => {
  return (
    <StyledButton
      icon={icon}
      onClick={onClick}
      loading={loading}
      className={className}
    >
      {children}
    </StyledButton>
  )
}
export { ButtonComponent }
