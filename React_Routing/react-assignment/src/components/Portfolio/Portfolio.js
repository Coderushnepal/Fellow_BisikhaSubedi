import React from 'react';

import './portfolio.css';
import  SideNav from '../../constants/SideNav/SideNav';

export const Portfolio = ({ handleSectionClick }) => {
    // let handleMethod = props.handleMethod;
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav handleSectionClick={handleSectionClick}/>
            </div>  
            <div className="main-section-container">
                <p>main section container</p>
            </div>
        </div>
    )
}