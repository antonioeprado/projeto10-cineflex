import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import Header from '../components/Header';
import styled from 'styled-components';

function MoviePage() {

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});

    const { title, posterURL, days, ...rest } = movie;

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Wrapper>
            <Header text={"Selecione o horário"} color={"#293845"} />
            {Object.keys(movie).length !== 0 ? (days.map((session, index) =>
            (
                <SessionComp key={session.id} data-identifier="session-date">
                    <p>{session.weekday} - {session.date}</p>
                    <div style={{ display: "flex" }}>
                        {session.showtimes.map((time, index) =>
                        (
                            <Link key={index} to={`/assentos/${time.id}`} style={{ textDecoration: "none" }}>
                                <TimeComp key={time.id} data-identifier="hour-minute-btn">{time.name}</TimeComp>
                            </Link>
                        )
                        )}
                    </div>
                </SessionComp>
            )
            )) : "Carregando..."}
            <Footer>
                <MoviePoster src={posterURL} data-identifier="movie-img-preview" />
                <p data-identifier="movie-and-session-infos-preview">{title}</p>
            </Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 375px;
    max-height: 810px;
    margin: auto;
`;

const SessionComp = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-left: 25px;
`;

const TimeComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    margin: 10px;
    color: #fff;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    cursor: pointer;
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
    font-size: 26px;
    line-height: 30px;
    color: #293845;
`;

const MoviePoster = styled.img`
    width: 48px;
    height: 72px;
    padding: 20px;
`;


export default MoviePage