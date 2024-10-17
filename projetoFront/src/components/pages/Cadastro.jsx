import {useEffect, useState} from 'react'

import NavBar from '../Layout/NavBar'
import style from './Cadastro.module.css'

import Input from '../Forms/Input' 
import Select from '../Forms/Select' 
import Button from '../Forms/Button' 

const Cadastro = (handleSubmit, projectData) => {

    const [categorias, setCategorias] = useState([])
    const [project, setProject] =useState(projectData || {})

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    useEffect(() =>{
        fetch("http://localhost:5000/categorias", {
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
                        console.log('DATA: ' + data.data[3].categorias)
                setCategorias(data.data)
            })
            .catch((err) => console.log(err))
    }, []);

    function createPost (project) {

        console.log(JSON.stringify(project))

        // project.cost = 0
        // project.services = []

        fetch("http://localhost:5000/categorias" ,{
            method:'POST',
            mode:'cors',
            headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*'
            },
            body: JSON.stringify(project)
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

    const submit = (e) => {
        e.preventDefault();
        //console.log(project)
        createPost(project);
        
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

            {/* <NavBar/> */}
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
                options={categorias}
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