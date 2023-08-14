import React  from 'react';

function Nav() {
    return (
        <div className="navItems">
            <a title="Main" href="#top">Vincent Louie</a>
            <div className="navButtons">
                <a title="Home" href="#top">Home</a>
                <a title="About" href="#about">About</a>
                <a title="Projects" href="#projects">Projects</a>
                <a title="Resume" href="#resume">Resume</a>
            </div>
        </div>
    );
}

export default Nav;