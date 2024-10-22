import React from "react";

import { useState, useEffect } from "react";

import style from './ListItem.module.css'

import ItemCard from '../CardItem'
import Container from '../layout/Container'
import ContainerItem from "../Layout/ContainerItem";

// import cavernas from '../../assets/livros/cavernas_aco.jpg'

const ListItem = ()=>{

    const [itens, setItens] = useState([]);

    /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
    useEffect(()=>{

        fetch('http://localhost:5000/listagemLivros', {
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
                                titulo={item.nome_livro}
                                autor={item.autor_livro}
                                imagem={cavernas}
                                key={item.cod_livro}
                            />
                        ))
                    }
                </ContainerItem> 

            </section>

        </Container>
    )
}


export default ListItem