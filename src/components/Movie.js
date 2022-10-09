import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


function Movie(props) {

  const { id, posterURL, ...rest } = props.movie;

  return (
    <Link to={`/sessoes/${id}`} style={{ margin: "auto" }}>
      <MovieComp poster={posterURL} />
    </Link>
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