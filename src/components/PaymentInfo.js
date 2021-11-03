import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { ImageCard, Paragraph, Title } from './styles/PaymentInfo.styled'

export const PaymentInfo = () => {
    return (
        <Container>
            <Flex>
                <div>
                    <Title>
                        Payment Information
                    </Title>
                    <Paragraph>
                        choose your method of payment
                    </Paragraph>
                    <ImageCard src='./images/mastercard.jpg' alt='' />
                </div>
                <div>
                    hello
                </div>
            </Flex>
        </Container>
    )
}
