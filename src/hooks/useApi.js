import { useEffect, useState } from "react";

const useApi = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
            fetch(url)
                .then(respuesta => respuesta.json())
                .then(respuestaJson => {
                    setLoading(true);
                    setData(respuestaJson.data)
                })
                .catch(error => console.log(error))
    }, [url])

    return { loading, data }
}
 
export default useApi;