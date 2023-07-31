import React, { Component } from "react";

class SetColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            color: ""
        };
    }

    color = (a) => {
        this.setState({ content: a, color: a });
    }

    render() {
        return (
            <div>
                <h3 style={{color: this.state.color }}>
                    choose a color  {this.state.content}
                </h3>

                <button onClick={() => this.color("red")}>Red</button>
                <button onClick={() => this.color("green")}>Green</button>
                <button onClick={() => this.color("blue")}>Blue</button>
                <button onClick={() => this.color("yellow")}>Yellow</button>
                <button onClick={() => this.color("black")}>Black</button>
                <button onClick={() => this.color("violet")}>Violet</button>
            </div>
        );
    }
}

export default SetColor;
