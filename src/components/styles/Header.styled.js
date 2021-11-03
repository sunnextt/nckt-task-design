import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
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
  font-size: 1.5rem;
  line-height: 32px;
  color:#262626;
  transition: 0.4s ease;
  margin: auto 2rem;
  font-weight: bold;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  `;
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   padding: 0.5rem;
  // }