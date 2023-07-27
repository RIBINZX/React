import React from "react";

class Demonew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            enable: false,
            texcontent:"nothing"
            

        }
    }

    decriment = () => {
        this.setState((prev, props) => (
            { counter: prev.counter - 1 }
        ))
    }

    incriment = () => {
        this.setState((prev, props) => (
            { counter: prev.counter + 1 }
        ))
    }

    checkbox = () => {
        this.setState((prev, props) => (
            { enable: !prev.enable }

        ))
    };


    changeevent =(e)=>{

        this.setState( {texcontent:e.target.value})

    }


    render() {
        return (
            <div>
            
                <input onChange={this.changeevent} type="text"/>
                <h3>{this.state.texcontent}</h3>
                <br/>
                <button onClick={this.incriment}>+</button>
                <button onClick={this.decriment}>-</button>
                <p>u clicked {this.state.counter} times</p>
                <br />


                <label>
                    pls enable this
                    <input onClick={this.checkbox} type="checkbox" />
                </label>
                <p>this is {this.state.enable ? "Enabled" : "Disable"}</p>



            </div>

        )
    }
}

export default Demonew;