import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dataSearch";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #003d4f 35%, #94e1e2 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultadoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  width: 20%;
  margin: 15px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid #FFF;
    border-radius: 15px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    transition: all 0.5s ease;
  }
  transition: all 0.5s ease;
`;

function Search() {
  const [livrosPesquisados, setlivrosPesquisados] = useState([]);

  return (
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setlivrosPesquisados(resultadoPesquisa);
        }}
      />
      <ResultadoContainer>
        {livrosPesquisados.map((livro) => (
          <Resultado>
            <p>{livro.nome}</p>
            <img src={livro.src} alt={livro.nome} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </SearchContainer>
  );
}

export default Search;
