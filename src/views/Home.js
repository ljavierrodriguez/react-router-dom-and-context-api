import { Link } from "react-router-dom";

const Home = props => {
    return (
        <>
            <h1>Home</h1>
            <Link className="text-primary" to={"/docs/5.1/salud/corazon"}>Ejemplo 1</Link>
            <Link className="text-primary" to={"/docs/5.2/tecnologias/moviles"}>Ejemplo 2</Link>
            <Link className="text-primary" to={"/noticias/1/nacionales"}>Ejemplo 3</Link>
        </>
    )
}

export default Home;