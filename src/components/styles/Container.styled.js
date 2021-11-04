import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    padding: 0 1rem;
    margin: auto 3rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: auto 2rem;
}

    @media (max-width: ${({ theme }) => theme.sm}) {
    margin: auto 1rem;

    }
`
