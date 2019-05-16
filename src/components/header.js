import React from 'react';
import '../css/style.scss';

const Header = (props) => {   
    return (
        <header>
            <div className="logo"> News App </div>
            <input type="text" placeholder="Search here" onChange={ props.keywords}/>           
        </header>
    )
}

export default Header;
