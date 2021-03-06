import React from 'react';
import logo from '../../Images/logo.jpg'
import './Header.css';
import '../../Assets/bootstrap.min.css';
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div>
                        <nav class="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;