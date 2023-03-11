import { Input } from "antd"
import React, { useCallback } from "react"
import styled from "styled-components"

interface InputProps {
  showCounting?: boolean
  value?: any
  maxLength?: number
  minLength?: number
  placeholder?: string
  type?: string
  width?: number
  className?: string
  labelClassName?: string
  inputClassName?: string
  errorClassName?: string
  label?: string
  required?: boolean
  borderRadius?: string
  height?: string
  error?: string
  onChange?: any
  onBlur?: any
  rows?: number
  prefix?: React.ReactNode
  name?: string
  icon?: any
  disabled?: boolean
  iconClassName?: string
  pattern?: any
  step?: string
}

const subLabel = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "24px",
  fontFamily: "'Noto Sans JP',sans-serif",
}

const labelHeader = {
  fontSize: "22px",
  fontWeight: 400,
  lineHeight: "27px",
  fontFamily: "'Inter',sans-serif",
}
const header = {
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "24px",
  fontFamily: "'Noto Sans JP',sans-serif",
}
const InputStyled = styled(Input)`
  border-radius: ${({ borderRadius }: InputProps) => borderRadius || "4px"};
  height: ${({ height }: InputProps) => height || "60px"};
`

const TextFieldWrapperStyled = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  display: flex;
  flex-direction: column;
  width: ${({ width }: InputProps) => {
    return width ? width : "auto"
  }};
  .ant-input[disabled] {
    background-color: transparent;
  }
  border-color: #d9d9d9;
  .ant-input {
    &:focus,
    &:hover,
    &:active {
      border-color: #8b94a5;
    }
  }
  .label-container {
    display: flex;
    margin-bottom: 10px;
    .label {
      ${({ labelClassName }: InputProps) => {
        return labelClassName ? labelClassName : `${labelHeader}`
      }}

      opacity: 1;
      margin-right: 5px;
      font-weight: 500;
    }
    .required-label {
      ${labelHeader};
      color: 3EE3636;
      display: flex;
      justify-content: left;
    }
  }
  .error-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    .error {
      ${subLabel};
      color: #ee3636 !important;
      ${({ errorClassName }: InputProps) => {
        return errorClassName ? errorClassName : ` ${header}`
      }};

      margin-top: 2px;
      margin-left: 2px;
    }
  }
`

const InputField: React.FC<InputProps> = ({
  showCounting,
  value,
  maxLength,
  minLength,
  type,
  className,
  onBlur,
  label,
  required,
  error,
  onChange,
  placeholder,
  errorClassName,
  labelClassName,
  inputClassName,
  iconClassName,
  rows,
  prefix,
  name,
  icon,
  disabled,
  step,
  ...rest
}) => {
  return (
    <TextFieldWrapperStyled className={className}>
      {label && (
        <span className={"label-container"}>
          <span className={"label"}>{label}</span>
          {required && <span className={"required-label"}>{"*"}</span>}
        </span>
      )}
      <InputStyled
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
        disabled={disabled}
        className={inputClassName}
        placeholder={placeholder}
        maxLength={maxLength}
        step={step}
        {...rest}
      />
    </TextFieldWrapperStyled>
  )
}

export { InputField }
