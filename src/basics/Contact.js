import React from "react";

function Contact(props) {

    // var st1={color:"green",padding:"10px"};
    let button={backgroundColor:"blue",color:"black",borderRadius: '5px!important'}
    

    return (


        <div style={props.st}>
            <h2>this is {props.name}</h2>
            <input type="text" placeholder="name" /><br />
            <input type="number" placeholder="number" /><br />
            <input type="email" placeholder="email" /><br />
            <button style={button}>hshshs</button>
        </div>


    )
}

export default Contact