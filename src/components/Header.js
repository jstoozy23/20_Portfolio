import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: '#269695',
  
    },
    h1: {
        marginLeft: 15,
        fontSize: 65,
    },
    navbarNav: {
        marginRight: 15,
    },
}
function Header () {
    return (
        <header className='header' style={styles.header}>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className = " navbar-collapse" id="navbarText">

                <h1 className="navbar-nav me-auto" style={styles.h1}>Jeff Stutzman</h1>
        
                <div id="navbarNavDropdown">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/AboutMe" >About Me</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/Portfolio" >Portfolio</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/Contact" >Contact</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/Resume" >Resume</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;