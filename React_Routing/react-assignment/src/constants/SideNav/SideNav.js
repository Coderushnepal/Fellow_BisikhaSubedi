import React from 'react';
import { Link } from "react-router-dom";
import * as routes from '../routes';

import './SideNav.css';
import avatar from '../../assets/images/avatar.jpg';
import { Component } from 'react';

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidenav">
                <img src="https://winstemplymouth.org/wp-content/uploads/2018/02/Female-Avatar-5-e1518176677210-300x300.png" className="avatar" alt="avatar"></img>
                <h2 className="main-name">Bisikha Subedi</h2>
                <p className="subtitle">Learning to CODE!!</p>

                <div className="section-list">
                    <p className="section-list-element">
                        <Link to={routes.HOME} title="home" style={{ textDecoration: 'none' }}>Home</Link>
                    </p>
                    <p className="section-list-element">
                        <Link to={routes.BLOGS} title="blogs" style={{ textDecoration: 'none' }}>Blogs</Link>
                    </p>
                    <p className="section-list-element">
                        <Link to={routes.GALLERY} title="gallery" style={{ textDecoration: 'none' }}>Gallery</Link>
                    </p>
                    <p className="section-list-element">
                        <Link to={routes.ABOUT} title="about" style={{ textDecoration: 'none' }}>About</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default SideNav;
