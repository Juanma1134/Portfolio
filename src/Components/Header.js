import React from 'react'

const Header = () => {
  return (
    <div className='Header' >
        <div>
            <a className='Titulo' href='#InformacionPersonal'><h1>Juan Manuel Luzardo Bonjour</h1></a>
        </div>
        <div>
    
        </div>
        <div className='UnaLinea'>
          <h4 className='Botones'><a href='#DescripcionPersonal'>Descripcion Personal</a></h4>
          <h4 className='Botones'><a href='#Academico'>Academico</a></h4>
          <h4 className='Botones'><a href='#ExpLaboral'>ExpLaboral</a></h4>
          <h4 className='Botones'><a href='#Redes'>Redes</a></h4>
        </div>
        
    </div>
  )
}

export default Header;