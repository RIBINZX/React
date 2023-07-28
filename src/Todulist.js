import React from "react";

class Todolist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: ["item1", "item2" , "vibin"],
            txtcontent:""
        }
    }

    textbox=(e)=> {
        
        this.setState({txtcontent:e.target.value})
    }

    additem=(e)=>{

        let text=this.state.txtcontent;
        let items=this.state.item;
        items.push(text)
        this.setState({items:items})
    }

    removeItem = (i) => {
         
        const itemToRemove = this.state.item[i];
    
        if (!window.confirm(`Are you sure you want to remove "${itemToRemove}"?`)) {
            return;
        }
    
        let remove = this.state.item.slice();
        remove.splice(i, 1);
        this.setState({ item: remove });
    }



    render() {
        return (
            <div>
                <input onChange ={this.textbox} type="text" />
                <button onClick={this.additem}>add</button>
                <ul>
                    {
                        this.state.item.map((itm, k) => {
                            return (
                                <li key={k}>{itm} <button onClick={ ()=>{this.removeItem(k)} }>delete</button></li>
                            )
                        })
                    }


                </ul>
                <p>{this.state.txtcontent}</p>
            </div>
        )
    }
}
export default Todolist