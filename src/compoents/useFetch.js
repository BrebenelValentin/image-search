import {useState, useEffect} from 'react';

const useFetch = (url, query) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setIsPending(true);
    }, [query])

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch resources from API");
                }
                return response.text()
            })
            .then(data => {
                setData(JSON.parse(data));
                setIsPending(false);
            })
        }, 1000)
    }, [url])

    return {data, isPending};
}

export default useFetch;