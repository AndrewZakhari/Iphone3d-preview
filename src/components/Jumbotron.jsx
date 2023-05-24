import React from 'react';
import iPhone from '../assets/images/iphone-14.jpg';
import HoldingiPhone from '../assets/images/iphone-hand.png';

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className='title'>New</h2>
            <img className="logo" src={iPhone} alt="iPhone 14 Pro" />
            <p className='text'>Big and bigger.</p>
            <span className='description'>
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className='links'>
                <li>
                    <button style={{border: "none"}} className='button'>Buy</button>
                </li> 
                <li>
                    <a onClick={handleLearnMore} className='link'>Learn more</a>
                </li> 
            </ul>
            <img className='iphone-img' alt="iPhone"  src={HoldingiPhone} />
        </div>
    );
}
export default Jumbotron