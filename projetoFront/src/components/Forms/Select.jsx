import styles from './Select.module.css'

function Select({name, text}) {
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>HQS</option>
                <option>MANGÁS</option>
                <option>FIGURE</option>
                <option>POSTERS</option>
                <option>OUTROS</option>
            </select>

        </div>

    )
}

export default Select