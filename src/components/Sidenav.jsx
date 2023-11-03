import abelha from '../assets/img/abelha.svg'
import cervo from '../assets/img/cervo.svg'
import gato from '../assets/img/gato.svg'
import leao from '../assets/img/leao.svg'
import vaca from '../assets/img/vaca.svg'
import ovelha from '../assets/img/ovelha.svg'
import '../App.css'

function Sidenav(){

  return(
    <nav className='sidenav'>

    <ul>
      <li><a href=""><img src={cervo} alt="" /></a></li>
      <li><a href=""><img src={leao} alt="" /></a></li>
      <li><a href=""><img src={gato} alt="" /></a></li>
      <li><a href=""><img src={vaca} alt="" /></a></li>
      <li><a href=""><img src={ovelha} alt="" /></a></li>
      <li><a href=""><img src={abelha} alt="" /></a></li> 
    </ul>

  </nav>
  )
}

export default Sidenav