import style from './CardItem.module.css'
import Button from './Button'

const CardItem = ({titulo,autor,imagem})=>{

    return(
        <div className={style.CardItem}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={{titulo}}/>
            <div>
                <Button label='DETALHE'/> 
            </div>
        </div>
    )
}

export default CardItem