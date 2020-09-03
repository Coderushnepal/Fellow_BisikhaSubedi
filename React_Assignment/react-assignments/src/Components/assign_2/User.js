import React, {Component} from "react";
import withRedBull from "./withRedBull";

class User extends Component {
    constructor(props) {
        super(props);
        console.log('Helloooooo', this.props.flyAway);

    }
    render() {
        return(
            <div className="individual">
                <button className='individual-btn' onClick={this.props.flyAway}>{this.props.PEOPLE}</button>
                {/* {console.log(this.props.wings)} */}
                {this.props.wings ? (
                    <div className="get-wings">
                        <img src={this.props.wings}></img>
                    </div>
                ) : (
                    <p>She can fly!</p>
                )}
            </div>
        )
    }
}
export default withRedBull(User);