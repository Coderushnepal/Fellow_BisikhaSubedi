import React, {Component} from 'react';
import withCount from "./withCount";


class NumberCounter extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
        <div>
            <button onClick= {this.props.add}>
                +
            </button>
            <button onClick= {this.props.subtract}>
                -
            </button>

            {/* To display the output after the click event */}
            <h2>{this.props.label} {this.props.count}</h2>
        </div>
        )
    }
}

export default withCount(NumberCounter);