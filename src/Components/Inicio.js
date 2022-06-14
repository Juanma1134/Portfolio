import React from 'react'
import ExpLaboral from './ExpLaboral'
import Academico from './Academico'
import Redes from './Redes'
import InfoPersonal from './InfoPersonal'
import DescripcionPersonal from './DescripcionPersonal'


const Inicio = () => {
  return (
    <ul>
    <InfoPersonal />
    <DescripcionPersonal/>
    <Academico/>
    <ExpLaboral />
    <Redes/>
    </ul>
  )
}

export default Inicio