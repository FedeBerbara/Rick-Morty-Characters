import React from 'react';

//* Styles
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="col-12">
                    <h1 className="title">Rick & Morty APP</h1>
                    <p className="text">Characters of TV Series Rick and Morty</p>
                </div>
            </div>
        </header>
    )
}

export default Header;