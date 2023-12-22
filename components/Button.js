import React from 'react'

function Button({
    title ,
    varient= "contained" ,
    color="primary"
}) {
    let className = "w-100 py-1 pt-1";
    if(varient=== "contained")
    {
        className+="bg-"+color+ "text-white";
    }
    else if(varient==="outlined"){
        className+="border-"+color+"text-"+color;
    }
  return (
    <button className={className}>
        {title}
    </button>
  )
}

export default Button