import React from 'react'
import fotoFacebook from '../Imagenes/Facebook.png'
import fotoInstagram from '../Imagenes/instagram.jpg'
const Redes= () => {
  return (
    <div className='Contenedor' id='Redes'>
      <div className='UnaLinea'>
        <a href='https://m.facebook.com/juanmanuel.luzardobonjour/' target='_blank'>
        <img className='Logo'
            src={fotoFacebook}
            alt="Logo Facebook "
        />
        </a>  
        <a href='https://www.instagram.com/juanmaluzardo/' target='_blank'>
        <img className='Logo'
            src={fotoInstagram}
            alt="Logo Instagram "
        />
      
        </a>  
      </div>
    </div>
  )
}

export default Redes;