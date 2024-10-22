import { Outlet, Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () =>{
    return(
        <>
            <nav className={style.navbar}>

                <ul className={style.list}>
                    <Link to='/'>
                        <li className={style.item}><img className = {style.logo} src="./otaku.png"/> </li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='createItem'>
                        <li className={style.item}>CADASTRAR ITEM</li>
                    </Link>

                    <Link to='listItem'>
                        <li className={style.item}>LISTAR ITEM</li>
                    </Link>
                </ul>

            </nav>

            <Outlet/>
        </>
    )
}

export default NavBar