import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import Postagem from "../../componentes/Postagem";

export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Postagem post={post}/>
            </li>
          )
        })}
      </ul>
  )
}