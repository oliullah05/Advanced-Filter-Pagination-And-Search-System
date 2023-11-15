import React from 'react';
import setting from "./../../assets/all-icon/setting.png"

const Main = () => {
    return (
        <div className=' flex text-3xl  justify-between p-2 mx-auto w-10/12 items-center text-white bg-[#284766] my-2'>
            <h1 className='ms-5'>Torrants</h1>
            <img  className='h-14 me-5' src={setting}></img>
        </div>
    );
};

export default Main;