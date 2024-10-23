import styles from './Select.module.css'

function Select({name, text, options, handleChangeCategory}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleChangeCategory}>

                <option>Selecione uma categoria</option>

                {
                    options.map((option)=>{
                        // console.log(option.cod_categoria + ' - ' + option.nome_categoria)
                        return <option value={option.cod_cadastro} key={option.cod_cadastro}>{option.nome_cadastro}</option>
                    })
                }

            </select>
        </div>

    )
}

export default Select