import React from 'react'

import style from './ContainerItem.module.css'

const ContainerItem = (props) => {
    return (
        <div className={style.container_item}>
            {props.children}
        </div>
    )
}

export default ContainerItem
