/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './UpdateItem.module.css'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Button from '../Forms/Button'

const UpdateItens = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
        const [item, setItem] = useState([]);

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const {cod_item} = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [cadastro, setCadastro] = useState([])

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

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemCadastro', {
                    method:'GET',
                    headers:{
                        'Content-Type':'applicatio/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*',
                    },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setCadastro(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
        useEffect(()=>{

                fetch(`http://localhost:5000/listagemItens/${cod_item}`, {
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
                        console.log('ITENS: ' + data.data.cod_item);
                        setItem(data.data);
                        console.log('STATE: ' + item.nome_item);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        /* ALTERAÇÃO DOS DADOS DE LIVRO */
        function UpdateItem(item) {
        
                console.log(JSON.stringify(item))
        
                fetch('http://localhost:5000/alterarItem', {
                        method:'PUT',
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
                                navigate('/listItem',{state:'ITEM ALTERADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                UpdateItem(item);
        }

        return (
                <section className={style.create_book_container}>
                        
                        <h1>ALTERAÇÃO DE ITENS</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_item'
                                        id='nome_item'
                                        placeholder='Digite o título do item'
                                        text='Digite o título do item'
                                        handlerChangeItem={handlerChangeItem}
                                        value={item.nome_item} />

                                <Input 
                                        type='text'
                                        name='autor_item'
                                        id='autor_item'
                                        placeholder='Digite o nome do autor'
                                        text='Digite o nome do autor'
                                        handlerChangeItem={handlerChangeItem} 
                                        value={item.autor_item}/>

                                <Input 
                                        type='text'
                                        name='descricao_item'
                                        id='descricao_item'
                                        placeholder='Digite uma descrição para item'
                                        text='Descrição'
                                        handlerChangeItem={handlerChangeItem}
                                        value={item.descricao_item} />
                                
                                <Select 
                                        name="categoria_id"
                                        text="Selecione a categoria do livro"
                                        options={cadastro}
                                        handleChangeCategory={handleChangeCategory} />

                                <Button 
                                rotulo='Editar livro'/>

                        </form>

                </section>
        )
        }

export default UpdateItens