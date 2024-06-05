import './PF.css'
import { Link } from "react-router-dom"

const PreguntasFrecuentes=()=>{
    return(
        <div className='contenedor'>
            <h1>Preguntas Frecuentes</h1>
            <Link to="/"><button>Volver</button></Link>
            <div className='contenedor-preguntas'>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, recusandae? Harum molestiae odio error, rerum delectus aliquid et earum omnis itaque consectetur dolore maxime quasi deleniti nemo! In, dicta voluptates!</p></div>
                <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cumque sit, culpa est tenetur nostrum repellat deleniti non, officia reprehenderit quas mollitia exercitationem fugiat alias aut perferendis adipisci fugit quisquam.</p></div>
                <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod delectus veritatis libero, neque voluptate voluptates iste hic, quae excepturi amet deleniti soluta dignissimos! Maxime unde magni culpa sunt saepe. Nesciunt.</p></div>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes