import { HomeMain, HomeProdutos } from './Componentes/Home.module.css';
import { AnimeLeft } from './Componentes/Anime.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Head from '../../001-router/src/Head';

const Home = () => {
  const [produto, setProduto] = React.useState([]);

  React.useEffect(() => {
    async function Api() {
      const url = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const json = await url.json();
      setProduto(json);
    }
    Api();
  }, []);

  return (
    <main className={`${HomeMain} ${AnimeLeft}`}>
      <Head title="Home" description="Produtos de alta qualidade" />{' '}
      {/* Aplica a animação ao main */}
      {produto.map((item) => (
        <div key={item.id} className={HomeProdutos}>
          <Link to={`produto/${item.id}`}>
            <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />{' '}
          </Link>
          <h1>{item.nome}</h1>
        </div>
      ))}
    </main>
  );
};

export default Home;
