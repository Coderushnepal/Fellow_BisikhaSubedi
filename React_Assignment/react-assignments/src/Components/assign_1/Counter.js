import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    isVowel = (char) => {
        const Vowels = ["a" , "e", "i", "o", "u"];
        return Vowels.includes(char);
    } 

    render() {
        return(
            <div>
                <p className={this.isVowel(this.props.NAMES[0]) ? "red" : "blue"}>{this.props.NAMES}</p>
            </div>
        ) 
    }
}

export default Counter;