import React, { Component } from "react";
import Counter from "./Counter";

const withCount = (Counter) => {
    class NumberAlter extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count : 0,
            }
        };

        add = () => {
            this.setState({ count: this.state.count + 1})
        }

        subtract = () => {
            this.setState({ count: this.state.count - 1})
        }

        render() {
            // Hoc function ma aayera counter vannay component lai enhance garera withCount ko props lai pass garda, counter component ko original props
            // yo case ma {this.props.NAMES} harauchha. original component ko props lai preserve garna {...this.props} use garnay
            return <Counter count={this.state.count} add={this.add} subtract={this.subtract} {...this.props}/>;
        }
    }
    return NumberAlter;
}
export default withCount;