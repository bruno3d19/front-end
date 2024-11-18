import React from "react";
import { useState, useEffect } from "react";

import style from './CreateItem.module.css'

import Input from "../Forms/Input";
import Select from "../Forms/Select";
import Button from "../Forms/Button";

const CreateItens = ()=>{

    const [cadastro, setCadastro] = useState([])

    const [item, setItem] = useState({})

    
    function handlerChangeItem(event) {
        setItem({...item, [event.target.name] : event.target.value});
        console.log(item)
    }

     function handleChangeCategory(event) {
        setItem({...item, cod_cadastro: event.target.value});
        console.log(item);
    }


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
                resp.json()
        ).then(
            (data)=>{
                console.log('DATA: ' + data.data[3].nome_cadastro)
                setCadastro(data.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }, []);

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
                }
        )
        .catch(
                    (err)=>{ console.log(err) }
        )
    }

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
                handlerChangeItem={handlerChangeItem}
            />

            <Input  
                type='text'
                name='autor_item'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
                handlerChangeItem={handlerChangeItem}
            />

            <Input  
                type='text'
                name='descricao_item'
                placeHolder='Digite a descrição do item'
                text='Descrição do item'
                handlerChangeItem={handlerChangeItem}
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de item'
                options={cadastro}
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