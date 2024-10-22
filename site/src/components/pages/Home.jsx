import React from "react"; 

import style from './Home.module.css'

const Home = ()=>{
    return(
        <section className={style.home_container}>
            <h1>Bem vindo <span>JOVEM NERD</span></h1>
            <p>Explore tudo relacionado a cultura pop</p>
            <img src="./nerd.jpg" />
        </section>
    )

}

export default Home
