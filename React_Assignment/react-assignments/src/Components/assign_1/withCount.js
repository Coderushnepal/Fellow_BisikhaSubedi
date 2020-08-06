import React, { Component } from "react";

const withCount = (WrappedComponent) => {
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
            return <WrappedComponent count={this.state.count} add={this.add} subtract={this.subtract} {...this.props} />;
        }
    }
    return NumberAlter;
}
export default withCount;