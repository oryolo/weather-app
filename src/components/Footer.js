import React, { Component } from 'react';


class Footer extends Component {
    render() {
        let info = ['About', 'Contact', 'Recources'];
        return (
            <div className="fixed pin-b pin-l w-full h-8 text-center bg-blue-lighter">
                <ul className="list-reset flex">
                    {info.map((item, index) => {
                        return <li
                            key={index}
                            className="flex-1 mx-2 my-2 text-grey hover:text-white"
                            onClick={this.handleToggle}>
                            {item}
                        </li>
                    })}
                </ul>

            </div>
        );
    }

}

export default Footer;