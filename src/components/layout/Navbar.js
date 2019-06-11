import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
            <i className={icon} /> {title}
            </h1>
        </nav>
    )
}
    // Default props to display
    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    //Validator for information going into props
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

export default Navbar
