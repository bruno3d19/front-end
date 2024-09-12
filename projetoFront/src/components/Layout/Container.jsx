import style from './Container.module.css'
import NavBar from './NavBar'

const Container = (props)=>{

    return(
        <div className={style.container}>
            {props.children}
        </div>
    )

}

export default Container