import './App.css';
import Logo from './imagenes/logo.svg';
import ListaDeTareas from './componentes/ListaDeTarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img
          src={Logo}
          className='logo-react' 
          alt='LogoReact'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
