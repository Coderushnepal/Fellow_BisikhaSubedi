import React, {Component} from "react";
import withRedBull from "./withRedBull";

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="individual">
                <button class='individual-btn' onClick={this.props.flyAway}>{this.props.PEOPLE}</button>
            </div>
        )
    }
}
export default withRedBull(User);