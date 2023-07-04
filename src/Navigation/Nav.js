import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser,faShuffle,faHeart,faBagShopping } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  return (
    <div className="nav_container">
      <span className="test_name_chld">TestName.</span>
      <span className="parent_li_chld">
        <li>Home</li>
        <li>Shop</li>
        <li>Collection</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </span>
      <span className="parent_icon_chld">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faShuffle} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faBagShopping} />
      </span>
    </div>
  );
};

export default Nav;
