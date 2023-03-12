import { Card, Col, notification } from "antd"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { injected } from "@/utils/connector"
import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import { formatEther } from "@ethersproject/units"
import { CloudSyncOutlined } from "@ant-design/icons"
import { Button, Loader } from "@/components"
import { EventEmitter } from "events"

const StyledCard = styled(Card)`
  margin-top: 50px;
  .buttonWrapper {
    display: flex;
    justify-content: center;
  }
`
const MetamaskCard: React.FC = () => {
  const [balance, setBalance] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const { active, account, library, connector, activate } =
    useWeb3React<Web3Provider>()

  const provider = library
  const connect = async () => {
    try {
      setLoading(true)
      await activate(injected)
      localStorage.setItem("isWalletConnected", "true")
      notification.success({
        message: "Account connected ",
      })
      setLoading(false)
    } catch (ex) {
      notification.error({
        message: "Something went wrong. Please try again",
      })
      console.log(ex)
      setLoading(false)
    }
  }

  const disconnect = async () => {
    try {
      void connector?.deactivate()
      localStorage.setItem("isWalletConnected", "false")
    } catch (e) {
      console.log(e)
    }
  }
  console.log("Connector:", connector)

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected)
          localStorage.setItem("isWalletConnected", "true")
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  useEffect(() => {
    if (active && account) {
      provider?.getBalance(account).then((result) => {
        setBalance(Number(formatEther(result)))
      })
    }
  }, [active, account])

  if (loading) {
    return <Loader />
  }
  return (
    <Col span={12}>
      <StyledCard title={"Account Details"}>
        {active ? (
          <div>
            <h3>{"BNB balance: " + balance.toFixed(3)}</h3>
            <span>{"Connected with account: " + account}</span>
          </div>
        ) : (
          <span>{"Not Connected"}</span>
        )}
        <div className="buttonWrapper">
          {active ? (
            <Button onClick={disconnect}>{"Disconnect"}</Button>
          ) : (
            <Button
              icon={<CloudSyncOutlined />}
              type="primary"
              onClick={connect}
            >
              {"Connect"}
            </Button>
          )}
        </div>
      </StyledCard>
    </Col>
  )
}

export { MetamaskCard }
