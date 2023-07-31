import { Component } from "react";

class Testobject extends Component{

    constructor(props){
        super(props);
        this.state={
            a:""
        }

    }

    render(){
        return(
            <div>
                <p>
                    hooi baakha <br/>
                    {this.props.name}
                </p>
                <p>
                    {this.props.test}
                </p>
            </div>
        )
    }

}

export default Testobject