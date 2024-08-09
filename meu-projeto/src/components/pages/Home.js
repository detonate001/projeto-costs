import styles from './Home.module.css'
import savings from '../layout/img/pngwing.com.png'
import LinkButton from '../layout/LinkButton'


function Home () {
    return(
        <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p1>Comece a gerenciar seus projetos agora mesmo!</p1>
        <LinkButton to="/newproject" text="criar projeto"/>
        <img src={savings} alt="Costs" />
        </section>

        
    )
}

export default Home