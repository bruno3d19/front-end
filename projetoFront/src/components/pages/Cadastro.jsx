import {useEffect, useState} from 'react'

import NavBar from '../Layout/NavBar'
import style from './Cadastro.module.css'

import Input from '../Forms/Input' 
import Select from '../Forms/Select' 
import Button from '../Forms/Button' 

const Cadastro = (itemData) => {

    const [cadastro, setCadastro] = useState([])

    const [item, setItem] =useState(itemData || {})

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value })
        console.log(item)
    }

    useEffect(() =>{
        fetch("http://localhost:5000/listagemCadastro", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            },
        })  
            .then(
                (resp) =>
                     
                    resp.json()
                ).then(
                    (data) =>{
                        console.log('DATA: ' + data.data[3].cadastro)
                setCadastro(data.data)
            })
            .catch((err) => console.log(err))
    }, []);

    function createPost (item) {

        console.log(JSON.stringify(item))

        // project.cost = 0
        // project.services = []

        fetch("http://localhost:5000/inserirItem" ,{
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

    const submit = (e) => {
        e.preventDefault();
        //console.log(project)
        createPost(item);
        
    }

    // function handleCategory(e) {
    //     setProject({ ...project, category: {
    //         id: e.target.value,
    //         name: e.target.options[e.target.selectedIndex].text,
    //     },
    //  })
    // }


    return (
        
        <section>

             <NavBar/> 
            <div className={style.cad_item}>
            <h1>CADASTRO</h1>

            <form onSubmit={submit}>

            <Input
                type='text'
                name='txt_item'
                placeHolder='Digite o Titulo aqui'
                text='Titulo:'
                handleOnChange={handleChange}
            />

            <Input  
                type='text'
                name='txt_descricao_item'
                placeHolder='Digite a item aqui'
                text='item:'
                handleOnChange={handleChange}
            />

            <Select
                name='categoria' 
                text='Escolha uma categoria de items' 
                options={cadastro}
                // handleOnChange={handleCategory}
                // value={project.category ? project.category.id : ''}
            />

            <Button
                rotulo='Cadastrar item'
                // handleSubmit={createPost}
            />
            </form>

            </div>


        </section>
        
    )
}

export default Cadastro