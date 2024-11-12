import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from './DetailItem.module.css';
import Button from "../Button";
import imagens from '../../assets/imagens/blackClover.jpeg'

const DetailItem = () => {

    //RECUPERA O CODIGO DO LIVRO
    const {cod_item} = useParams()
    console.log('CODIGO DO ITEM' + cod_item)

    //CRIAÇÃO DA STATE DOS DADOS DO LIVROS
    const[item, setItem] = useState({})

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemItens/${cod_item}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setItem(data.data);
            console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

        return(
            <div className={style.grid}>
                
                <div className={style.container_img}>
                    <img className={style.img_item_detail} src={imagens} alt='Capa do Item: Black Clover' />
                </div>
    
                <div className={style.info}>
    
                    <span className={style.titulo}>{item.nome_item}</span>
                    <span className={style.autor}>{item.autor_item}</span>
    
                    <span className={style.descricao}>
                        {item.descricao_item}
                    </span>
    
                    <div className={style.container_buttons}>
                        <Button 
                            label='EDITAR'
                        />
    
                        <Button 
                            label='EXCLUIR'
                        />
    
                    </div>
    
                </div>
    
            </div>
        )
    }

    export default DetailItem
