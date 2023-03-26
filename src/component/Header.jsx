import React from 'react';
import Navbar from'./Navbar';
function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>What are possible scenarios for employment growth?</span></h1>
    <p className='details'> Workers displaced by automation are easily identified,
     while new jobs that are created indirectly
     from technology are less visible and spread across different sectors and geographies. 
     We model some potential sources
     of new labor demand that may spur job creation to 2030, even net of automation.</p>
            </div>
        </div>
    )
}

export default Header;
