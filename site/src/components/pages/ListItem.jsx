import React from "react";

import { useState, useEffect } from "react";

import style from './ListItem.module.css'

import ItemCard from '../CardItem'
import Container from '../layout/Container'
import ContainerItem from "../Layout/ContainerItem";

import imagens from '../../assets/imagens/blackClover.jpeg'
// import cavernas from '../../assets/livros/cavernas_aco.jpg'

const ListItem = ()=>{

    const [itens, setItens] = useState([]);

    /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
    useEffect(()=>{

        fetch('http://localhost:5000/listagemItens', {
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log('ITENS: ' + data.data);
                setItens(data.data);
                console.log('STATE: ' + itens);
            })
            .catch((err)=>{console.log(err)});

    }, []);

    return(
        
        <Container>

            <section className={style.list_item_container}>
                
                <h1>LIST ITENS</h1>

                 <ContainerItem> 
                    {
                        itens.map((item)=>(
                            // console.log(book.nome_livro)
                            <ItemCard
                                titulo={item.nome_item}
                                autor={item.autor_cadastro}
                                imagem={imagens}
                                cod_item={item.cod_item}
                                key={item.cod_cadastro}
                            />
                        ))
                    }
                </ContainerItem> 

            </section>

        </Container>
    )
}


export default ListItem