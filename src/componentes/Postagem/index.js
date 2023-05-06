import React from 'react';
import styles from './Postagem.module.css';
import { Link } from 'react-router-dom';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function Postagem({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='imagem de capa do post' />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  )
}
