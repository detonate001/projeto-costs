

import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Barnav.module.css'
import logo from '../layout/img/logo.png.png'


function Barnav () {
    return (
        <nav className={styles.barnav}>
            <Container>
            <Link to ="/">
            <img className={styles.logo} src={logo} alt="Costs"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/projects">Empresa</Link></li>
                <li className={styles.item}><Link to="/newproject">Projetos</Link></li>
                <li className={styles.item}><Link to="/contact">Contato</Link></li>
            </ul>


            </Container>
        </nav>
    )
}

export default Barnav