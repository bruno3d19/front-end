import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <>
            <nav className={style.navbar}>
                <ul className={style.list}>
                    <Link to='/Home'>
                        <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/Cadastro'>
                        <li className={style.item}>CADASTRO</li>
                    </Link>

                    <Link to='/List'>
                    <li className={style.item}>LISTA DE ITEMS</li>
                    </Link>

                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar