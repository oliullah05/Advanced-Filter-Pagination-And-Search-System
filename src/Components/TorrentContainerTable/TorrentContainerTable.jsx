import{ useEffect, useState } from 'react';

import TorrentMoviesData from '../TorrantData/TorrentMoviesData';


const TorrentContainerTable = () => {

        const [moviesdata, setMoviesdata]= useState([])

        const [documentCount,setDocumentCount]=useState({})

        


















        // console.log(datas);
        useEffect(()=>{
            fetch('http://localhost:2000/movies')
             .then(res=> res.json())
             .then(data=> setMoviesdata(data))
        },[])

       useEffect(()=>{
        fetch(`http://localhost:2000/count`)
        .then(res=> res.json())
             .then(data=> setDocumentCount(data.totalData))
       },[])
      



    return (
        <>

  

<div className='w-10/12 mx-auto my-1'>dfghf</div>


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
       
        {
                moviesdata.map(data=> <TorrentMoviesData data={data} key={data._id}></TorrentMoviesData>)
        }


        





           
            
        </tbody> 
    </table>
</div>

        </div>
        </>
    );
};

export default TorrentContainerTable;