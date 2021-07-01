import React from 'react'
import Card from '../card/card.component'
const CardList = (props) => {
    return (
        <>
            {props.monsters.map(monster => (
                <Card monster={monster} />
            ))}
        </>
    )
}

export default CardList
