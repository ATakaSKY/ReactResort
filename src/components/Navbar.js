import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    state = {
        isOpen : false
    }

    toggleMenu = () => {
        this.setState({isOpen : !this.state.isOpen});
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link path='/'>
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <button onClick={this.toggleMenu} type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
