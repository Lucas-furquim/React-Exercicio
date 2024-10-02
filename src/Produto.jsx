import {
  img,
  ProdutoMain,
  ProdutoDesc,
  ProdutoDescPreco,
} from './Componentes/Produto.module.css';
import { loading, spinner } from './Componentes/Carregando.module.css';
import React from 'react';
import Head from '../../001-router/src/Head';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    async function Api() {
      const url = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      const json = await url.json();
      setProduto(json);
    }
    Api();
  }, [params.id]);

  // if (produto.fotos[1]) {
  //   console.log('existe');
  // } else {
  //   console.log('nn existe');
  // }

  if (!produto)
    return (
      <div className={loading}>
        <div className={spinner}></div>
      </div>
    );

  return (
    <div className={ProdutoMain}>
      <Head
        title="Produto"
        description="Os melhores produtos de qualidade para sua vida."
      />{' '}
      <div>
        <img
          className={img}
          src={produto.fotos[0].src}
          alt={produto.fotos[0].titulo}
        />{' '}
        {produto.fotos[1] ? (
          <img
            className={img}
            src={produto.fotos[1].src}
            alt={produto.fotos[1].titulo}
          />
        ) : (
          ''
        )}
      </div>
      <div className={ProdutoDesc}>
        <h2>{produto.nome}</h2>
        <p className={ProdutoDescPreco}>R$ {produto.preco}</p>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
