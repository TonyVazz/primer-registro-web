import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Registros from "./components/Registros"
import './app.css'

function App() {
  
  return (
    <div className="principal">
    <div className="titulo">
      <Cabecera titulo='Registro Estudiantes' />
    </div>
    <div className="contenedor">
        <Formulario className='formulario' />
      </div>
      <div className="contenedor2">
        <Registros />
      </div>
    </div>
  )
}

export default App
