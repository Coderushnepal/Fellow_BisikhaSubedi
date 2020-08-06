import React, {Component} from "react";
import Wing from './images/wings.jpg';

const withRedBull = (UserComponent) => {
    class UserEnhance extends Component {
        constructor(props) {
            super(props);

            this.state = {
                img_path : Wing,
                alt: 'wing',
                wings : 2,
            }
        };
    
        flyAway = () => {
            const imgg = './images/wings.jpg';
            this.setState({img_path: imgg})
        }

        render() {
            return <UserComponent wings={this.state.wings} flyAway={this.flyAway} {...this.props}/>;
        }

    }
    return UserEnhance;
}
export default withRedBull;