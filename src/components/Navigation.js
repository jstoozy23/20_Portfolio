import React from 'react';

const styles = {
    navbarCollapse: {
        marginTop: 40,
    },
    h1: {
        marginLeft: 40,
    },

}

function Navigation () {
    return (
        <nav className="navbar navbar-expand-lg text-white">
            <div className="container-fluid">
              <div className = " navbar-collapse" style={styles.navbarCollapse} id="navbarText">
                <h1 className="navbar-nav me-auto mb-2 mb-lg-0" style={styles.h1}>Jeff Stuzman</h1>
                <div id="navbarNavDropdown" style="margin-right: 65px;">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#aboutMe">About Me</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    )
}

export default Navigation;