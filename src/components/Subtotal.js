import React from 'react'
import { Button } from './styles/PaymentInfo.styled'
import { SubtextDiv, SubtotalDiv } from './styles/Subtotal.styled'
import styled from 'styled-components'

export const Subtotal = () => {
    return (
        <SubtotalSection>
            <SubtotalDiv>
                <div style={styles}>
                    <SubtextDiv>Subtotal</SubtextDiv>
                    <SubtextDiv>$2,49700</SubtextDiv>
                </div>
                <div style={styles}>
                    <SubtextDiv>Estimated TAX</SubtextDiv>
                    <SubtextDiv>$119.64</SubtextDiv>
                </div>
                <div style={styles}>
                    <SubtextDiv>
                        Promotinal Code: <Span>ZAKXLM9A</Span>
                    </SubtextDiv>
                    <SubtextDiv>$60.0</SubtextDiv>
                </div>
            </SubtotalDiv>
            <TotalDiv>
                <Button width="25%" fontSize="18px" fontWeight="400" sm="45%">
                    Complete Payment
                </Button>
                <Margin></Margin>
                <TotalText>
                    TOTAL: <span>$2556.64</span>
                </TotalText>
            </TotalDiv>
        </SubtotalSection>
    )
}

const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const SubtotalSection = styled.section`
margin-bottom: 3rem;
`

const TotalDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-around;
;
}
`
const TotalText = styled.h4`
    font-size: 22px;
    font-weight: 800;
    margin: auto 0;

`

const Span = styled.span`
    color: #bbb;
`
const Margin = styled.div`

@media (max-width: ${({ theme }) => theme.mobile}) {
margin: 1rem
}
`
