import anuncio1 from '../assets/img/anuncio1.jpg'
import anuncio2 from '../assets/img/anuncio2.jpg'
import '../App.css'
function Aside(){
  return(
    <>
        <aside className='anuncios'>
          <div className='anuncio1'>
            <img src={anuncio1} alt="" />
          </div>

          <div className='anuncio2'>
            <img src={anuncio2} alt="" />
          </div>
        </aside>
    </>
  )
}

export default Aside