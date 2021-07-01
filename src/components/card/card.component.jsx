import React from 'react'

const Card = (props) => {
    return (
        <div className="bg-gray-200 p-2 h-80 flex flex-col justify-center items-center transition transform hover:scale-110 duration-200 rounded-lg shadow-lg">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <p className="text-gray-600 text-2xl" key={props.monster.id}> {props.monster.name}
            </p>
            <p className="text-green-400 text-normal font-medium">{props.monster.email}</p>
        </div>
    )
}

export default Card
