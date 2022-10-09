import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import Header from '../components/Header'

function Sucess(props) {

    const location = useLocation();
    const { from } = location.state;
    const { ids, name, cpf, movie, date, time } = from;

    return (
        <Wrapper>
            <Header text={"Pedido feito com sucesso!"} color={"#247A6B"} weight={"700"} />
            <InfoParagraph data-identifier="movie-session-infos-reserve-finished">
                <p>Filme e sessão</p>
                <p>{movie}</p>
                <p>{date} - {time}</p>
            </InfoParagraph>
            <InfoParagraph data-identifier="seat-infos-reserve-finished">
                <p>Ingressos</p>
                {ids.map((seat) => <p>{seat}</p>)}
            </InfoParagraph>
            <InfoParagraph data-identifier="buyer-infos-reserve-finished">
                <p>Comprador</p>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </InfoParagraph>
            <Link to={"/"} style={{ textDecoration: "none" }} data-identifier="back-to-home-btn">
                <button>Voltar para home</button>
            </Link>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: auto;
    width: 375px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #fff;
        margin: 30px auto;
    }
`;

const InfoParagraph = styled.div`

    letter-spacing: 4%;
    color: #293845;
    margin: 25px;

    p:first-child {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
    }

    p:not(first-child) {
        font-size: 22px;
        line-height: 26px;
    }
`;

export default Sucess