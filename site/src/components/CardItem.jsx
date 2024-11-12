import style from './CardItem.module.css'
import Button from './Button'

const CardItem = ({titulo,autor,imagem,cod_item})=>{

    return(
        <div className={style.CardItem}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={{titulo}}/>
            <div>
                <Button label='DETALHE' router='/detailItem/' cod_item={cod_item}/> 
            </div>
        </div>
    )
}

export default CardItem