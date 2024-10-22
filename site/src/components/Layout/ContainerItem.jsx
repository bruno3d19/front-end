import React from 'react'

import style from './ContainerItem.module.css'

const ContainerItem = (props) => {
    return (
        <div className={style.container_book}>
            {props.children}
        </div>
    )
}

export default ContainerItem
