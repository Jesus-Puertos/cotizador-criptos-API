import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Onest', sans-serif;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`

const Texto = styled.p`
 font-size: 18px;
    span {
        font-weight: 900;
    }
`

const Precio = styled.p`
    font-size: 28px;
    span {
        font-weight: 900;
    }

`


const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la criptomoneda" />
           <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
           </div>
        </Contenedor>
    );
}

export default Resultado