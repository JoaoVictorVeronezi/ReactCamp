import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {getPokemons} from "../requests/poke.js";

const PokeCard = (props) => {
  return (
    <StyledCard>
      <StyledRow>
      <h5>{props.pokemon.name}</h5>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.index}.png`}/>
      </StyledRow>    
    </StyledCard>
  );
};


const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 10%;
`;

const StyledRow = styled.div`
background-color: #f1f1f1;
margin: 10px;
text-align: center;
line-height: 75px;
font-size: 20px;
`;


export default PokeCard;
