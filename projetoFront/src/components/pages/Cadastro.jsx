import NavBar from '../Layout/NavBar'
import style from './Cadastro.module.css'

import Input from '../Forms/Input' 
import Select from '../Forms/Select' 
import Button from '../Forms/Button' 

function Cadastro() {
    return (
        
        <section>

            <NavBar/>
            <div className={style.cad_item}>
            <h1>CADASTRO</h1>

            <Input
                type='text'
                name='txt_item'
                placeHolder='Digite o nome do item aqui'
                text='Titulo do item'
            />

            <Input  
                type='text'
                name='txt_descricao_item'
                placeHolder='Digite a descrição do item'
                text='Descrição do item'
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de items'
            />

            <Button
                rotulo='Cadastrar item'
            />

            </div>


        </section>
        
    )
}

export default Cadastro