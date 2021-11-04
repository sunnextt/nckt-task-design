import React, { useState } from 'react'
import { Flex } from './styles/Flex.styled'
import styled from 'styled-components'

import {
    
    Wrapper,
    ImageCard,
    Form,
    Paragraph,
    TextInputWrapper,
    Title,
    InputLabel,
    Input,
    Button,
    RadioInput,
} from './styles/PaymentInfo.styled'
import { RadioGroup, Radio } from 'react-radio-group'
import { Subtotal } from './Subtotal'

export const PaymentInfo = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event)
    }
    console.log(value)

    return (
        <Wrapper>
            <Flex style={{ borderTop: '1px solid #ccc' }}>
                <div>
                    <Title>Payment Information</Title>
                    <Paragraph>choose your method of payment</Paragraph>
                    <ImageCard src="./images/mastercard.jpg" alt="" />
                </div>
                <div>
                    <Form>
                        <div>
                            <RadioGroup
                                name="fruit"
                                selectedValue={value}
                                onChange={handleChange}
                                style={RadioStyle}
                            >
                                <Radio
                                    value="paypal"
                                    style={{ marginLeft: '2rem' }}
                                />
                                <img
                                    src="./images/Paypal-logo.png"
                                    alt=""
                                    width="10%"
                                />
                                <Radio
                                    value="visa"
                                    style={{ marginLeft: '2rem' }}
                                />
                                <img
                                    src="./images/visa-logo.jpg"
                                    alt=""
                                    width="30px"
                                />
                                <Radio
                                    value="discover"
                                    style={{ marginLeft: '2rem' }}
                                />
                                <img
                                    src="./images/discover.png"
                                    alt=""
                                    width="50px"
                                />
                            </RadioGroup>
                        </div>
                        <TextInputWrapper>
                            <InputDiv>
                                <InputLabel>credit card number</InputLabel>
                                <Input
                                    name="creditCardNumber"
                                    placeholder="1257 7466 7484 8484"
                                />
                            </InputDiv>
                            <div style={{ width: '100%' }}>
                                <InputLabel>Expiration date</InputLabel>
                                <Input
                                    name="expirationDate"
                                    placeholder="03/24"
                                />
                            </div>
                        </TextInputWrapper>
                        <TextInputWrapper>
                            <InputDiv>
                                <InputLabel>Security code</InputLabel>
                                <Input name="SecurityCode" placeholder="420" />
                            </InputDiv>
                            <div style={{ width: '100%' }}>
                                <InputLabel>Postal code</InputLabel>
                                <Input name="postalCode" placeholder="10119" />
                            </div>
                        </TextInputWrapper>
                        <label
                            style={{
                                display: 'block',
                                margin: '1rem auto',
                                textAlign: 'left',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#000'
                            }}
                        >
                            <RadioInput type="radio" />
                            Use this card for next time purchase
                        </label>
                        <Button fontSize="18px" fontWeight="400">Add Card</Button>
                    </Form>
                </div>
            </Flex>
            <Subtotal />
        </Wrapper>
    )
}

const RadioStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '1rem auto',
}



const InputDiv = styled.div`
    width: 100%; 
    padding-right: 2rem

    @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-right: 0
`