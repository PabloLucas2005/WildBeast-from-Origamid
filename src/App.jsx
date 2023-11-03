import './App.css'
import Headerr from './components/Headerr'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Button from '@mui/material/Button'
function App() {
  

  return (
    <div className='estrutura'>
      <Headerr></Headerr>
      <Sidenav></Sidenav>
      <Main></Main>
      <Aside></Aside>
      <Footer></Footer>
    </div>
  )
}



export default App
