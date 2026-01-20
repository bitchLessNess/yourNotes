import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navItems = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" }
    ];
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <h2>Your Notes</h2>
                </div>
                <ul>
                    {navItems.map((item) => {
                        return <li key={item.name}>
                            <Link to={item.path} id="listItem">
                                {item.name.toUpperCase()}
                            </Link>
                        </li>
                    })}
                </ul>



            </nav>


        </>
    )

}

export default Navbar;