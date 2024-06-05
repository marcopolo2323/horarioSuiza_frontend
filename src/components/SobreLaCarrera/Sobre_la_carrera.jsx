import './SC.css'
import { Link } from "react-router-dom"

const SobreCarrera=()=>{
    return(
        <div className='contenedor'>
            <h1>Sobre la Carrera</h1>
            <Link to="/"><button>Volver</button></Link>
            <div className='contenedor-acercade'>
                <h2>Desarrollo de Sistemas de Información</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores vero facilis tenetur voluptate optio a. Eum quis incidunt, veniam corporis, quam exercitationem at nisi ipsa enim qui quisquam voluptatum natus? Quae, voluptas!</p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, totam reiciendis eligendi accusantium, odit debitis eius inventore esse nisi quis cumque incidunt sapiente vel expedita praesentium dolore ratione ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium qui molestias voluptas tempore, deleniti, accusantium hic assumenda eaque sit maxime vel nulla ullam consectetur a, itaque repellendus dolorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas enim consectetur nobis amet illum. Vel unde expedita voluptatum soluta dolorum possimus, libero hic eaque labore cumque aliquid quas laborum.

            </div>
        </div>
    )
}

export default SobreCarrera