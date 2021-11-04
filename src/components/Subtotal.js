import React from 'react'
import { Button } from './styles/PaymentInfo.styled'
import { SubtextDiv, SubtotalDiv } from './styles/Subtotal.styled'
import styled from 'styled-components'


export const Subtotal = () => {
    return (
        <div>
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
                    <SubtextDiv>Promotinal Code: <Span>ZAKXLM9A</Span></SubtextDiv>
                    <SubtextDiv>$60.0</SubtextDiv>
                </div>
            </SubtotalDiv>
            <TotalDiv>
                <Button width="25%" fontSize= "18px" fontWeight= "400" sm="45%">Complete Payment</Button>
                <TotalText>TOTAL: <span>$2556.64</span></TotalText>
            </TotalDiv>
        </div>
    )
}


const styles ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const TotalDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const TotalText = styled.h4`
font-size: 22px;
font-weight: 800;
margin :auto 0;

@media (max-width: ${({ theme }) => theme.mobile}) {
font-size: 20px;
font-weight: 800;
}
`

const Span =styled.span`
color: #bbb
`
