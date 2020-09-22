import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}
const Nav = () => {
    return (
        <div className="navbar">
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Home</NavLink>
                <NavLink
                    to="/products"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Products</NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >About</NavLink>
            </div>
        </div>
    )
}

export default Nav