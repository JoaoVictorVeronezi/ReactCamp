import React, { useState } from "react";
import styled, { keyframes } from "styled-components";


const PokeCard = (props) => {
  return (
    <StyledCard>
      <StyledFlipCardInner>
      <StyledRow>
      <StyledFront>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.index}.png`}/>
      </StyledFront>
      <StyledBack>
      <h4>{props.pokemon.name}</h4> 
      </StyledBack>
      </StyledRow>   
      </StyledFlipCardInner> 
    </StyledCard>
  );
};



const StyledBack = styled.div`
  color: black;
  transform: rotateY(180deg);
`;

const StyledFlipCardInner = styled.div `
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const StyledCard = styled.div`
  background-color: transparent;
  transition: 0.3s;
  width: 10%;
  
  &:hover ${StyledFlipCardInner} {
    transform: rotateY(180deg);
  }
`;  

const StyledFront = styled.div`

  color: black;
`;
const StyledRow = styled.div`
background-color: #f1f1f1;
margin: 10px;
text-align: center;
font-size: 20px;
height: 200px;
`;


export default PokeCard;
