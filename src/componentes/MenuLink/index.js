import { NavLink } from "react-router-dom";
import styles from './MenuLink.module.css'

export default function MenuLink({ caminho, children }) {

  return (
    <NavLink className={({isActive}) => `
    ${styles.link} 
    ${isActive ? styles.linkSelecionado : ''} `
    }
      to={caminho}
      end>
      {children}
    </NavLink>
  )
}