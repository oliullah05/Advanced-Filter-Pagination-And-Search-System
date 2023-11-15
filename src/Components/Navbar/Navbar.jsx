import React from 'react';

import torrant from "./../../assets/all-icon/torratnt.png" 
import torrantSearch from "./../../assets/all-icon//torrant-search.png" 

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-[#284766] p-2'>
            <img  className=' h-[55px]' src={torrant} alt="" />     
            <div className="flex gap-6 ms-5 text-2xl text-white me-5 justify-center items-center">
                <a href="">Movie</a>
                <a href="">TV</a>
                <a href="">Torrent</a>
                <a href="">Forum</a>
                <a href="">Request</a>
                <a href="">User</a>
                <a href="">Help</a>
                <a href="">More</a>
                <a href="">Donate</a>
                <img className='h-14' src={torrantSearch}></img>
            </div>
        </nav>
    );
};

export default Navbar;