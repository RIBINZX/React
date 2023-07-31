import React from "react";

var x=10

function abc(){
    x++;
    console.log(x)
}

function Demo(){
    return(
        <div>
            <button onClick={ abc }>click</button>
        </div>
    )
}

export default Demo