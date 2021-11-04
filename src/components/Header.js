import { StyledHeader, Nav, NavLink, Logo } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import styled from 'styled-components'
import Avatar from 'react-avatar'

const stylep = {
    position: 'absolute',
    right: '2rem',
    top: '2rem',
}

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo_sig.png" alt="" />
                    <LinksDiv>
                        <NavLink>Trips</NavLink>
                        <NavLink>Recently viewed</NavLink>
                        <NavLink>Bookings</NavLink>
                        <Avatar
                            style={stylep}
                            name="Cardi B"
                            src="./images/Cardi-B-album-cover.jpg"
                            round
                            size="60px"
                        />
                    </LinksDiv>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

const LinksDiv = styled.div`
    margin-right: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-right: 0;
    }
`
