import React from 'react'

function Button({
    title,
    variant= "contained",
    color = "primary", type = 'button',
    onClick,
}){

    let className= "w-100 py-1 pt-1 ";
    if(variant==='contained'){
        className +='bg-' + color+'text-' + color
    }
    return(
        <button
        className = {className}
        type = {type}
        onClick = {onClick}
        >
            {title}
        </button>
    )
}