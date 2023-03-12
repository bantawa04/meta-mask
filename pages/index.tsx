import Head from "next/head"
import { GlobalStyles } from "@/utils"
import { Col, Layout, Row } from "antd"
import styled from "styled-components"
import { ConversionForm, MetamaskCard } from "@/components"

const { Content } = Layout
const LayoutWrapper = styled(Layout)<any>`
  min-height: 100vh;
  .content {
    background: #fff;
  }
`
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Neptune Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />

      <LayoutWrapper>
        <Content className="content">
          <Row>
            <Col span={16} offset={4}>
              <Row gutter={16}>
                <ConversionForm />
                <MetamaskCard />
              </Row>
            </Col>
          </Row>
        </Content>
      </LayoutWrapper>
    </>
  )
}
