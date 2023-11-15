
import movies from './../../assets/all-icon/movies.png';
import anime from './../../assets/all-icon/anime.png';
import games from './../../assets/all-icon/games.png';
import tutorials from './../../assets/all-icon/tutorials.png';
import music from './../../assets/all-icon/music.png';
import tv from './../../assets/all-icon/tv.png';
import ebooks from './../../assets/all-icon/ebooks.png';
import download from './../../assets/all-icon/download.png'

const TorrentMoviesData = (props) => {
    const {name, uploader, size, comm,leeching,seeding,type , downComplete}= props.data;
    // console.log(props.data)
    return (
        
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                    
                    <img className={`h-14 w-14 ${type=="movies"? "" :"visibility: hidden" }`} src= {movies}></img>
                    <img className={`h-14 w-14 ${type=="music"? "" :"visibility: hidden" }`} src= {music}></img>
                    <img className={`h-14 w-14 ${type=="tutorial"? "" :"visibility: hidden" }`} src= {tutorials}></img>
                    <img className={`h-14 w-14 ${type=="anime"? "" :"visibility: hidden" }`} src= {anime}></img>
                    <img className={`h-14 w-14 ${type=="games"? "" :"visibility: hidden" }`} src= {games}></img>
                    <img className={`h-14 w-14 ${type=="tv"? "" :"visibility: hidden" }`} src= {tv}></img>
                    <img className={`h-14 w-14 ${type=="ebooks"? "" :"visibility: hidden" }`} src= {ebooks}></img>
                    
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