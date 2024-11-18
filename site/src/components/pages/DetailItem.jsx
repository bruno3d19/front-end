import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from './DetailItem.module.css';
import Button from "../Button";
import imagens from '../../assets/imagens/blackClover.jpeg'

const DetailItem = () => {

    const {cod_item} = useParams()
    console.log('CODIGO DO ITEM' + cod_item)

    const[item, setItem] = useState({})

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
                            router='/updateItens/'
                            cod_item={item.cod_item}
                        />
    
                        <Button 
                            label='EXCLUIR'
                            router='/deleteItem/'
                            cod_item={item.cod_item}
                        />
    
                    </div>
    
                </div>
    
            </div>
        )
    }

    export default DetailItem
