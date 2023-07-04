import React from "react";
import './HomepageHero.css';
import hero1 from "./images/hero1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan,faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const HomepageHero =()=>{

    return(
        <div className="homepagehero_container">
            <FontAwesomeIcon className="less_than_fa_icon"icon={faLessThan} />
            <div className="content_wrapper">
            <h3>Smart Products</h3>
            <h1>Winter Offer 2024 Collection</h1>
            <button className="cta">SHOP NOW</button>
            </div>
            <div className="hero_image_wrapper">
            <img className="parent_img"src={hero1} alt="hero 1"/>
            </div>
            <FontAwesomeIcon className="greater_than_fa_icon" icon={faGreaterThan} />
        </div>
    );
};

export default HomepageHero;