import React  from 'react';
import resume from '../assets/louievi1.pdf';

function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="title">Resume</div>
            <object className='doc' data={resume} type="application/pdf" width="50%" height="80%">
            </object>
        </div>
    );  
}

export default Resume;