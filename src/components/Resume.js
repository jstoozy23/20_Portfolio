import React, { useState } from 'react';
// import ResumeImg from '../images/Resume.png'

const styles = {
    button: {
        width: '25%',
        height: '15%',
        marginLeft: '38%',
        marginTop: '10%',
    },
    divImg: {
        width: '45%',
        marginLeft: '27%'
    }
};

function Resume () {

    const [resume, setResume] = useState(false)

    return (
        <div>
            {resume ? (
            <div>

                {/* <img style={styles.divImg} src={ResumeImg} alt="..."/> */}

            </div>

            ) : (

                <button className="btn btn-dark opacity-40 border border-warning border-5 border-opacity-50" type="button" style={styles.button} onClick={() => setResume(true)}> <h1>View Resume</h1></button>

            )}
        </div>
    )
};

export default Resume;