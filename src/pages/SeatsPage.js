import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components';
import Header from '../components/Header';
import Seat from '../components/Seat'


function SeatsPage() {

    const [session, setSession] = useState({});
    const [buyer, setBuyer] = useState("");
    const [buyerId, setBuyerId] = useState("");
    const [reservedSeats, setReservedSeats] = useState([]);

    const { name, day, movie, seats, ...rest } = session;
    const { sessionId } = useParams();

    const cpfRegEx = "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}";

    const completeForm = {
        ids: reservedSeats,
        name: buyer,
        cpf: buyerId,
        movie: Object.keys(session).length !== 0 ? movie.title : null,
        date: Object.keys(session).length !== 0 ? day.date : null,
        time: name
    }

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
            .then((response) => {
                setSession(response.data);
            })
            .catch((error) => console.log(error.response));
    }, [])

    function submitForm(event) {

        event.preventDefault();
        const form = {
            ids: reservedSeats,
            name: buyer,
            cpf: buyerId
        };

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", form)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    return (
        <Wrapper>
            <Header text={"Selecione o(s) assento(s)"} color={"#293845"} />
            <SeatsComp>
                {Object.keys(session).length !== 0 ? seats.map((seat) =>
                (
                    <Seat key={seat.id} available={seat.isAvailable} name={seat.name} reserved={reservedSeats} setReserved={setReservedSeats} />
                )
                ) : "Carregando..."}
            </SeatsComp>
            <LegendContainer>
                <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", fontSize: "13px" }}>
                    <Legend bgColor={"#1AAE9E"} border={"#0E7D71"} />
                    Selecionado
                </div>
                <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", fontSize: "13px" }}>
                    <Legend bgColor={"#C3CFD9"} border={"#7B8B99"} />
                    Disponível
                </div>
                <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center", fontSize: "13px" }}>
                    <Legend bgColor={"#FBE192"} border={"#F7C52B"} />
                    Indisponível
                </div>
            </LegendContainer>
            <FormComp onSubmit={submitForm}>
                <label htmlFor="name">Nome do comprador:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome..."
                    onChange={(event) => setBuyer(event.target.value)}
                    required
                />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    placeholder="Digite seu CPF..."
                    onChange={(event) => setBuyerId(event.target.value)}
                    pattern={cpfRegEx}
                    title="287.987.176-97"
                    required
                />
                <Link to={`/sucesso`} state={{ from: completeForm }} style={{ textDecoration: "none" }}>
                    <button type='submit'>Reservar assento(s)</button>
                </Link>
            </FormComp>
            <Footer>
                {Object.keys(session).length !== 0 ? <MoviePoster src={movie.posterURL} /> : "Carregando..."}
                <MovieData>
                    {Object.keys(session).length !== 0 ? (<><p>{movie.title}</p><p>{day.weekday} - {name}</p></>) : "Carregando..."}
                </MovieData>
            </Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 375px;
    max-height: 810px;
    margin: auto;
`;

const LegendContainer = styled(Wrapper)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    margin: auto;
    padding-top: 15px;
`;

const FormComp = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 375px;
    margin: auto;

    label {
        margin: 15px 0 10px 20px;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        display: flex;
        align-items: center;
        width: 327px;
        height: 51px;
        background-color: #fff;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
        margin: auto;
    }

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

const Legend = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${(props) => props.bgColor};
    border: ${props => props.border};
    cursor: "default";
`;

const SeatsComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 325px;
    gap: 24px 7px;
    align-items: center;
    margin: auto;
`;

const Footer = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    align-items: center;
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    margin: auto;
    font-size: 24px;
    line-height: 30px;
    color: #293845;
`;

const MovieData = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const MoviePoster = styled.img`
    width: 48px;
    height: 72px;
    margin: 20px;
`;

export default SeatsPage