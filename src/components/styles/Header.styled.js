import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 20px;
  }
`
export const NavLink = styled.a`
  font-size: 1.2rem;
  line-height: 32px;
  color:#262626;
  transition: 0.4s ease;
  margin: auto 2rem;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    color: #e0e;
    opacity: 1;
    cursor: pointer;
  }
    @media (max-width: ${({ theme }) => theme.mobile}) {

      font-size: 1rem;
      line-height: 30px;
      margin: 0;
      padding-right: 1rem;
      }

  `
 