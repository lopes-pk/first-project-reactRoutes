import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NotFound from 'paginas/NotFound'
import PaginaPadrao from 'componentes/PaginaPadrao'
import styles from './Post.module.css'
import Postagem from 'componentes/Postagem'

export default function Post() {
  const parametros = useParams()
  const post = posts.find((post) => {
    return (
      post.id === Number(parametros.id)
    )
  })

  if (!post) {
    return <NotFound />
  }

  const postRecomendados = posts.filter((post) =>
    post.id !== Number(parametros.id)).sort((a, b) =>
      b.id - a.id).slice(0, 4);
  console.log(postRecomendados)

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={<PostModelo
          titulo={post.titulo}
          fotoCapa={`/assets/posts/${post.id}/capa.png`}>
          <div className='post-markdown-container'>
            <ReactMarkdown>{post.texto}</ReactMarkdown>
          </div>

          <h2 className={styles.tituloOutrosPosts}>
            Outros posts que você pode gostar:
          </h2>
          <ul className={styles.postsRecomendados}>
            {postRecomendados.map((post) => (
              <li key={post.id}>
                <Postagem post={post} />
              </li>
            ))}
          </ul>
        </PostModelo>} />
      </Route>
    </Routes>


  )
}
