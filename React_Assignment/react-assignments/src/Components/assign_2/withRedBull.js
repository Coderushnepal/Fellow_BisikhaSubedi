import React, {Component} from "react";
// import Gif from 'react-gif';

// import Wing from './images/wings.jpg';
import Fly from './images/fly.gif'

const withRedBull = (UserComponent) => {
    class UserEnhance extends Component {
        constructor(props) {
            super(props);

            this.state = {
                wings : null,
            }
        };
    
        flyAway = () => {
            this.setState({
                wings: Fly
            })
        }

        render() {
            return <UserComponent wings={this.state.wings} flyAway={this.flyAway} {...this.props}/>;
        }

    }
    return UserEnhance;
}
export default withRedBull;