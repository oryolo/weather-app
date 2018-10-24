import React from 'react';

const Footer = () => {
    let info = ['About', 'Contact', 'Recources']
    return <div className="fixed pin-b pin-l w-full h-8 text-center bg-blue-lighter">
        <ul className="list-reset flex">
            {info.map((item, index) => <li key={index} className="flex-1 mx-2 my-2 text-grey hover:text-white">{item}</li>)}
        </ul>
    </div>
}

export default Footer;