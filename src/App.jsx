
import './App.css'
import CategorySection from './Components/CategorySection/CategorySection'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import TorrentContainerTable from './Components/TorrentContainerTable/TorrentContainerTable'

function App() {
  

  return (
    <>
 <Navbar></Navbar>
 <Main></Main>
  <CategorySection></CategorySection>
  <TorrentContainerTable></TorrentContainerTable>
    </>
  )
}

export default App
