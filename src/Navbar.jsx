import React from 'react';

const NavBar = ({totalCounters}) =>{
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand m-2 h1">
                    Navbar {" "}
                    <span className="badge bg-success text-white">{totalCounters}</span>
                    </span>
            </nav>
        )
}

export default NavBar;