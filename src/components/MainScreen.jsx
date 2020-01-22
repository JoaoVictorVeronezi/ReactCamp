import React, { useState, useEffect } from "react";
import logo from "../assets/poke_logo.png";
import styled, { keyframes } from "styled-components";
import {getPokemons} from "../requests/poke";
import PokeCard from "./PokeCard";

const MainScreen = () => {

  const [pokeList, setPokeList] = useState([]); // Colocar que é um estado para o react entender que é um estado.
  const [page, setPage] = useState(0);
  const pokesList = () => { //Função para salvar a lista de pokemons no estado.
    getPokemons(0, (pokes) => setPokeList(pokes));
  }

  const proximo = () => setPage(page + 1);
  const anterior = () => {
    if(page === 0) {
      alert("Não é possível voltar!")
    }else {
      setPage(page - 1)
    }
  };
  useEffect(() => {
    getPokemons(page, (result) => setPokeList(result));
  },[page]);

  return (
    <StyledContainer>
      <StyledContainer>
        <StyledImage  src={logo}/>
        <StyledButton onClick={pokesList}>Clique aqui</StyledButton>
        <StyledButton onClick={proximo}>Próximo</StyledButton>
    <StyledButton onClick={anterior}>Anterior</StyledButton>
      </StyledContainer>
      <div>
      <StyledRow>{pokeList.map((poke, index) => <PokeCard pokemon={poke} index = {page * 20 + ( index + 1 )} />)}</StyledRow>
      </div>
    </StyledContainer>
  );
};

const StyledRow = styled.div`
display: flex;
flex-wrap: wrap;
`;

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

const StyledLabel = styled.p`
  color: white;
  font-size: 20;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  :focus {
    outline: 0;
  }
  margin-top: 5%;
`;

const StyledImage = styled.img`
  height: 100px;
  width: 300px;
  
`;

export default MainScreen;
