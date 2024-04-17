import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../services/favoritos";
import { Title } from "../components/Title/index"
import imagemBook from "../images/livro.png"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #003d4f 35%, #94e1e2 165%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CardFavorite = styled.div`
  width: 200px;
  height: 310px;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    color: #EB9B00;
  }

  p {
    margin: 0;
  }
`;

function Favorites() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

async function deletarFavorito(id) {
  await deleteFavorito(id)
  await fetchFavoritos()
  alert(`Livro de id:${id} deletado!`)
}

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Title setBackgroundColor="#FFF" setColor="#EB9B00" setFontSize="30px">LIVROS FAVORITOS</Title>
      <br/>
      <CardContainer>
        {favoritos.map((favorito) => (
          <CardFavorite key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
            <img src={imagemBook} alt={favorito.nome} />
            <h3>{favorito.nome}</h3>
            <p>{favorito.autor}</p>
          </CardFavorite>
        ))}
      </CardContainer>
    </AppContainer>
  );
}

export default Favorites;