import { Spin } from "antd"
import React from "react"
import styled from "styled-components"
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
  position: relative;
  z-index: 3;
`
const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spin size={"large"} className={"loader"} />
    </LoaderWrapper>
  )
}

export { Loader }
