import React from 'react';

const TorrentDatahead = () => {
    return (
        <div>
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
        </div>
    );
};

export default TorrentDatahead;