import NavBar from '../Layout/NavBar'
import style from './Cadastro.module.css'

import Input from '../Forms/Input' 
import Select from '../Forms/Select' 
import Button from '../Forms/Button' 

function Cadastro() {
    return (
        <section className={style}>
            <NavBar/>
            <h1>CADASTRO</h1>

            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do livro aqui'
                text='Titulo do livro'
            />

            <Input  
                type='text'
                name='txt_descricao_livro'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livro'
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de livro'
            />

            <Button
                rotulo='Cadastrar Livro'
            />


        </section>
    )
}

export default Cadastro