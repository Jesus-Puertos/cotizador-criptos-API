import styled from '@emotion/styled'


const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 12px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Onest', sans-serif;
    font-weight: 900;
    text-align: center;
    border-radius: 8px;
`


const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error