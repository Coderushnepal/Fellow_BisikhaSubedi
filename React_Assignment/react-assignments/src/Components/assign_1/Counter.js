import React, { Component } from "react";
import ReactDOM from "react-dom";
import withCount from "./withCount";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    isVowel = (char) => {
        const Vowels = ["A" , "E", "I", "O", "U"];
        return Vowels.includes(char);
    } 

    render() {
        return(
            <div className="content-wrapper">
                <h1 className={this.isVowel(this.props.NAMES[0]) ? "red" : "blue"}>{this.props.NAMES}</h1>
                <div className="buttons">
                    <button className="btn" onClick= {this.props.add}> +</button>
                    <button className="btn" onClick= {this.props.subtract}>-</button>
                </div>
                {/* To display the output after the click event */}
                <h2 className="count">{this.props.count}</h2>
            </div>
        ) 
    }
}

export default withCount(Counter);
