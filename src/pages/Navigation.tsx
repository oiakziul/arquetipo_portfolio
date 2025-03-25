import { Link } from "react-router-dom"
import styles from '../assets/styles/components/navigation.module.css'

export const Navigation = ()=> {
    
  return (
    <div className={styles.navigation}>
    <ul className={styles.menu}>
        <li><Link to='/arquetipo_portfolio/'>Início</Link></li>
        <li><Link to='Temporario'>Sobre mim</Link></li>
        <li><Link to='ProjetosFaculdade'>Faculdade</Link></li>
        <li><Link to='GradeCurricular'>Grade</Link></li>
    </ul>
</div>
  )
}
