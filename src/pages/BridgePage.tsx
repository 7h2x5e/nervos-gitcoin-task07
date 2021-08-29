import React from 'react'
import styled from 'styled-components'
// import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { Title } from '../typography/Title'

export function BridgePage() {
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Bridge</Title>
            {/* <AccountButton /> */}
          </SectionRow>
          <TableGrid>
            {/* <DepositEth /> */}
            {/* <WithdrawEth /> */}
          </TableGrid>
        </Section>
      </Container>
    </MainContent>
  )
}

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`
