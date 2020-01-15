import React from "react";
import Menu from './Menu';
import SetBottom from './../assets/Images/Sep-bot.png';
import Mouse from './../assets/Icons/mouse_scrolling-50.png';
import Logo from './../assets/Icons/idea-100.png';

const Header = () => {
    return <header>
        <div className="container">
            <Menu />
        </div>
        <div className="header_center container">
            <div id="hexagon">
            <img src={Logo} alt="_logo" />
                <p>Arrow</p>
            </div>
            <h5>Lorem ipsum is simply dummy text of printing and typesetting industry. Lorem ipsum has been industry's standart dummy text ever since the 1500s.</h5>
            <button>Know More</button>
        </div>
        <img className="setBottom" alt="_setbottom" src={SetBottom} />
        <div className="mouseBottom">
            <img alt="_scroll" src={Mouse} />
            <h4>Scroll down</h4>
        </div>
    </header>;
};

export default Header;