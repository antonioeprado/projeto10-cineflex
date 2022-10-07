import React from 'react';
import styled from 'styled-components';


function Movie(props) {

  const {id, title, posterURL, overview, releaseDate} = props.movie;

  return (
    <MovieComp poster={posterURL} />
  )
}

export default Movie;

const MovieComp = styled.div`
  background: url(${props => props.poster}) center/129px 193px no-repeat;
  width: 129px;
  height: 193px;
  cursor: pointer;
  margin: auto;
`;