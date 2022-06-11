import { useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const Info = props => {

    const {version, noticia_id, ...params} = useParams();

    const location = useLocation();

    const history = useHistory();

    useEffect(() => {
        console.log(params);
        console.log(location);
        console.log(history);

        getNewsById(noticia_id);
    }, [])

    const getNewsById = (id) => {
        
    }
    return (
        <>
            <h1>Info {version}</h1>
            <button className="btn btn-warning" onClick={history.goBack}>Regresar</button>
        </>
    )
}

export default Info;