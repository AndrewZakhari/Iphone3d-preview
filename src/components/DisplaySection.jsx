import React from 'react';

function DisplaySection({triggerPreview}) {
    return (
        <div className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>Brilliant.</p>
            <span className='description'>A display that's up to 2x brighter in the sun</span>
            <button onClick={triggerPreview} style={{border : "none"}} className='button'>Try me!</button>
            <button onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }} className='back-button'>TOP</button>
        </div>
    );
}

export default DisplaySection