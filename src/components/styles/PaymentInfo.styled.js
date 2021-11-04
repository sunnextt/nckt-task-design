import styled from 'styled-components'

export const Wrapper = styled.section`
    max-width: 100%;
    padding: 0 1rem;
    margin: auto 4rem;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    color: #262626;
`

export const Form = styled.form``

export const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const InputLabel = styled.label`
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-top: 1rem;
    display: block;
    width: 100%;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    text-align: left;
    font-weight: 300;
    color: grey;
`
export const Button = styled.button`
    background-color: #007fff;
    padding: 24px 20px;
    border-radius: 3px;
    color: #fff;
    font-weight: ${(props) => props.fontWeight || 600};
    font-size: ${(props) => props.fontSize || '14px'};
    width: ${(props) => props.width || '100%'};
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
        background-color: #0059b2;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 18px 20px;
        font-size: 15px;
        width: ${(props) => props.sm || '100%'};
    }
`

export const ImageCard = styled.img`
    width: 80%;
`

export const Input = styled.input`
  margin: 1rem auto;
  width: 100%;
  padding: 11px 16px;
  line-height: 25px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.inputColor || '#000'};
  background: #DEDEDE;
  border: none;
  border-radius: 5px;
  flex: 1
  transition: border .3s ease;
    &::placeholder {
        color: #0e0e0e;
    }

  :focus {
	outline: none;
  	border: none;
}
`

export const RadioInput = styled.input`
    margin-right: 10px;
`
