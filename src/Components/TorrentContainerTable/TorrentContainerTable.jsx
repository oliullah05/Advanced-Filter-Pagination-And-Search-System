import React, { useEffect, useState } from 'react';
import movies from './../../assets/all-icon/movies.png';
import download from './../../assets/all-icon/download.png'
import TorrentMoviesData from '../TorrantData/TorrentMoviesData';
import TorrentDatahead from '../TorrantData/TorrentDatahead';

const TorrentContainerTable = () => {

        const [datas, setDatas]= useState([])
        useEffect(()=>{
            fetch('../../../public/moviesData.json')
             .then(res=> res.json())
             .then(data=> setDatas(data))
        },[])


    return (
        <div className=' w-10/12 mx-auto my-5'>
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center w-14">
                        type
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                  DL
                </th>
                <th scope="col" className="px-6 py-3">
                    Uploader
                </th>
                <th scope="col" className="px-6 py-3">
                    comm
                </th>
                <th scope="col" className="px-6 py-3">
                    size
                </th>
                <th scope="col" className="px-6 py-3">
                    s
                </th>
                <th scope="col" className="px-6 py-3">
                    l
                </th>
                <th scope="col" className="px-6 py-3">
                    c
                </th>
            </tr>
        </thead>


         <tbody>
        {/* {
                datas.map(data=> 
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                               <img className='h-14 w-14' src= {movies}></img>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Mirandas Victim 2023 1080p AMZN WEB-DL DDP5 1 H 264-FLUX
                        </th>
                        <td className="px-6 py-4">
                           <img className='h-8 w-8' src={download}></img>
                        </td>
                        <td className="px-6 py-4">
                        Cool_Hathuru
                        </td>
                        <td className="px-6 py-4">
                            6
                        </td>
                        <td className="px-6 py-4">
                        22.21 GiB
                        </td>
                        <td className="px-6 py-4">
                        43
                        </td>
                        <td className="px-6 py-4">
                        6
                        </td>
                        <td className="px-6 py-4">
                        156
                        </td>
                    </tr>)
        } */}
        {
                datas.map(data=> <TorrentMoviesData data={data} key={data.id}></TorrentMoviesData>)
        }


        





           
            
        </tbody> 
    </table>
</div>

        </div>
    );
};

export default TorrentContainerTable;