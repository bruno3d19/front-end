import NavBar from "../Layout/NavBar"
import style from "./List.module.css"

function List() {
    return (
        <section className={style.list_container}>
            <NavBar/>
            <h1>LISTA DE ITEMS</h1>
        </section>
    )
}

export default List