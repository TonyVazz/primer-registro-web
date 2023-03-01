import React from 'react'
import '../styles/formularioStyle.css'

const Formulario = () => {
  return (
    <div className='container'>
        <h1 className='principal'>Formulario</h1>
        <form className='datos'>
            <div class=''>
            
            <label htmlFor="">Nombres</label>
            <input type="text" placeholder='Coloca tu nombre' />
            </div>
            <div class=''>
            <label htmlFor="">Apellidos</label>
            <input type="text" placeholder='Coloca tus apellidos'/>
            </div>
            <div class=''>
            <label htmlFor="">Numero</label>
            <input type="text" placeholder='Coloca tu numero'/>
            </div>
            <div class=''>
            <label htmlFor="">Correo Electronico</label>
            <input type="text" placeholder='Coloca tu correo electronico'/>
            </div>
            <div class='boton'>
            <button>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario