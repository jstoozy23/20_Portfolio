import React from 'react';
import ZR1 from '../images/ZR-1-Stop-Shop.png';


const styles = {
  
};

function Portfolio () {
    return (
        <section className="container">

            <br/>

                <div className="card mb-3" style={styles.cards}>
                    <div className="row g-0">
                        
                        <div className="col-md-7">
                            <img src={ZR1} className="img-fluid rounded-start"  alt="..."/>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Project 3 - Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL and Sequelize for database structure</li>
                                <li>Node.js and Express.js for our Restful API</li>
                                <li>GET and POST routing</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" className="btn btn-primary">Click to go to the deployed Application</a>
                            <br/>
                            <a href="https://github.com/jstoozy23/Project-2" target="_blank" className="btn btn-primary" style={styles.cardA}>Go to my Github Repo Page</a>
                            </div>
                        </div>
                        

                    </div>
                  </div>


        </section>
    )
};

export default Portfolio;