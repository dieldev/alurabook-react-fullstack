import { useEffect, useState } from "react";
import styled from "styled-components";
import { postFavorito } from "../../services/favoritos";
import { getLivros } from "../../services/livros";
import Input from "../Input";
import imagemBook from "../../images/livro.png"

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
    border: 1px solid #fff;
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
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
  }

  async function insertFavorito(id) {
    await postFavorito(id)
    alert(`Livro de id:${id} inserido!`)
  }

  return (
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(evento) => {
          const textoDigitado = evento.target.value;
          if (textoDigitado === "") {
            setlivrosPesquisados([]);
          } else {
            const resultadoPesquisa = livros.filter((livro) =>
              livro && livro.nome
                ? livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                : false
            );
            setlivrosPesquisados(resultadoPesquisa);
          }
        }}
      />
      <ResultadoContainer>
        {livrosPesquisados.map((livro) => (
          <Resultado onClick={() => insertFavorito(livro.id)}>
            <p>{livro.nome}</p>
            <img src={imagemBook} alt={livro.nome} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </SearchContainer>
  );
}

export default Search;
