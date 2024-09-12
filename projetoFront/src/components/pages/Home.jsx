import NavBar from "../Layout/NavBar";
import style from "./Home.module.css";

function Home() {
  return (
    <section className={style.home_container}>

      <NavBar/>
      <div className={style.grid}>
        <h1>BEM VINDO</h1>
        <p>Explore tudo em relação a CULTURA POP</p>
      </div>
    </section>
  );
}

export default Home;
