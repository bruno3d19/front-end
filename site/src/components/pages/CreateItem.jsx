import React from "react";
import { useState, useEffect } from "react";

import style from './CreateItem.module.css'

import Input from "../Forms/Input";
import Select from "../Forms/Select";
import Button from "../Forms/Button";

const CreateItens = ()=>{

    //DEFINE O STATE DA DADOS DAS CATEGORIAS
    const [categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [item, setItem] = useState({})

    
    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeItem(event) {
        setItem({...item, [event.target.name] : event.target.value});
        console.log(item)
    }

     /* CAPTURA OS DADOS DA SELECT */
     function handleChangeCategory(event) {
        setItem({...item, cod_cadastro: event.target.value});
        console.log(item);
    }


    //RECUPERA OS DADOS DE CATEGORIA DA APIREST
    useEffect(()=>{
        fetch('http://localhost:5000/listagemCadastro', {
            method:'GET',
            headers:{
                'Content-Type':'applicatio/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            }
        }).then(
            (resp)=>
                // console.log('RESPOSTA' + resp)
                resp.json()
        ).then(
            (data)=>{
                console.log('DATA: ' + data.data[3].nome_cadastro)
                setCategorias(data.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }, []);

    /* INSERÇÃO DOS DADOS DE LIVRO */
    function CreateItem(item) {
        
        console.log(JSON.stringify(item))

        fetch('http://localhost:5000/inserirItem', {
                method:'POST',
                mode:'cors',
                headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
                },
                body: JSON.stringify(item)
        })
        .then(
                    (resp)=>resp.json()
        )
        .then(
                    (data)=>{
                    console.log(data);
                // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                }
        )
        .catch(
                    (err)=>{ console.log(err) }
        )
    }

            /* FUNÇÃO DE SUBMIT */
                function submit(event) {
                    event.preventDefault();
                    CreateItem(item);
            }

    return(
        <section className={style.create_item_container}>

            <h1>CADASTRO DE ITENS</h1>

            <form onSubmit={submit}>

            <Input
                type='text'
                name='nome_item'
                placeHolder='Digite o nome do item aqui'
                text='Titulo do item'
                handleChangeItem={handlerChangeItem}
            />

            <Input  
                type='text'
                name='autor_item'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
                handleChangeItem={handlerChangeItem}
            />

            <Input  
                type='text'
                name='descricao_item'
                placeHolder='Digite a descrição do item'
                text='Descrição do item'
                handleChangeItem={handlerChangeItem}
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de item'
                options={categorias}
                handleChangeCategory={handleChangeCategory}
            />

            <Button
                rotulo='Cadastrar Item'
            />
            </form>

        </section>
    )

}
export default CreateItens