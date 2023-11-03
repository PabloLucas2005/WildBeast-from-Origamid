import wildbeast from '../assets/img/wildbeast.svg'
import '../App.css'
function Headerr(){

  return(
    <>
    
        <header className='header'>
          <img src={wildbeast} alt="" className='logo'/>
       
          <div className="menu">
            <ul>
              <li><a href="">sobre</a></li>
              <li><a href="">animais</a></li>
              <li><a href="">contato</a></li>
            </ul>
          </div>
        
        </header>

        

        
    </>

    
  )
}

export default Headerr