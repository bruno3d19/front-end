import NavBar from "../Layout/NavBar"
import style from "./Home.module.css"

function Home() {
    return (
        <section className={style.home_container}>
            <NavBar/>
            <h1>BEM VINDO</h1>
            <p>Explore tudo em relação a CULTURA POP</p>
        </section>
    )
}

export default Home