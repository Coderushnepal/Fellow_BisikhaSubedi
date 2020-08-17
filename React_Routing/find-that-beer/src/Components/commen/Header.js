import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            searchText : "",
        }
    }

    handleTextChange = (event) => {
        this.setState({
            searchText : event.target.value,
        })
    }

    search = (event) => {
        //this.props.setSearchText ma ekota string pathauna parthyo which is state ko searchText
        event.preventDefault();
        this.props.setSearchText(this.state.searchText);
    } 

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__top">
                        <ul className="nav">
                            <li>
                                <Link to={routes.HOME} title="home">Home</Link>
                            </li>
                            <li>
                                <Link to={routes.FAVOURITES} title="favourites">Favourites</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__bottom">
                        <h1>The beer bank</h1>
                        <span>Find your favorite beer here</span>
                        <form onSubmit={this.search}>
                            <input type="text" placeholder="search beer here" value={this.state.searchText} onChange={this.handleTextChange} />
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    setSearchText: PropTypes.func,
}

export default Header;