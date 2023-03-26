import React, {useState} from 'react';
import logo from '../images/logo.png';

function Navbar() {
    const [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrolly>=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={nav ?'nav active':'nav'}>
        <a href='#' className='logo'>
        
        </a>
        <input type='checkbox'className='menu-btn'id='menu-btn'/>
        <lable className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
        </lable>
        <ul className='menu'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>JOBS</a></li>
        <li><a href='#'>NEAR ME INSTANT WORK</a></li>
        <li><a href='#'>CONTACT US</a></li>
        </ul>
        </nav>
            
        //</div>
    )
}

export default Navbar;
