import React from 'react';
import movies from './../../assets/all-icon/movies.png';
import download from './../../assets/all-icon/download.png'

const TorrentMoviesData = (props) => {
    const {name, uploader, size, comm,leeching,seeding,type , downComplete}= props.data
    console.log(props.data)
    return (
        
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                       <img className='h-14 w-14' src= {movies}></img>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
                </th>
                <td className="px-6 py-4">
                   <img className='h-8 w-8' src={download}></img>
                </td>
                <td className="px-6 py-4">
                {uploader}
                </td>
                <td className="px-6 py-4">
                    {downComplete}
                </td>
                <td className="px-6 py-4">
                {size}
                </td>
                <td className="px-6 py-4">
                {seeding}
                </td>
                <td className="px-6 py-4">
                {leeching}
                </td>
                <td className="px-6 py-4">
                {comm}
                </td>
            </tr>
            
        
    );
};

export default TorrentMoviesData;