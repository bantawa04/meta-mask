import React, { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { Card, Col } from "antd"
import { InputField } from "@/components"

const StyledCard = styled(Card)`
  margin-top: 50px;
  .ant-card-body {
    div {
      margin-bottom: 20px;
    }
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
  }
`

const ConversionForm: React.FC = () => {
  const [npr, setNpr] = useState<number | "">(0)
  const [busd, setBusd] = useState<number | "">(0)

  const handleNprChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setNpr(value === "" ? "" : Number(value))
    setBusd(value === "" ? "" : Number(value) * 3)
  }

  const handleBusdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setBusd(value === "" ? "" : Number(value))
    setNpr(value === "" ? "" : Number(value) / 3)
  }

  return (
    <Col span={12}>
      <StyledCard title={"NPR to CRYPTO"}>
        <div className="firstField">
          <InputField
            height="40px"
            label="NPR"
            value={npr === "" ? "" : npr}
            onChange={handleNprChange}
            type="number"
            step="0.01"
          />
        </div>

        <div className="secondField">
          <InputField
            height="40px"
            label="BUSD"
            value={busd === "" ? "" : busd}
            onChange={handleBusdChange}
            type="number"
            step="0.01"
          />
        </div>
      </StyledCard>
    </Col>
  )
}

export { ConversionForm }
