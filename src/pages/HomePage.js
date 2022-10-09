import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Movie from '../components/Movie';

const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

function HomePage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <>
      <Header text={"Selecione o filme"} color={"#293845"} />
      <MoviesWrapper>
        {Object.keys(movies).length !== 0 ? (movies.map((movie, index) => <Movie key={index} movie={movie} />)) : "Carregando..."}
      </MoviesWrapper>

    </>
  )
}

export default HomePage;

const MoviesWrapper = styled.main`
    display: flex;
    flex-flow: row wrap;
    gap: 45px 25px;
    width: 375px;
    margin: auto;
`;