import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not find the data in the resource')
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(false);
                })
                .catch((e) => {
                    if (e.name === "AbortError") {
                        console.log("Fetch Aborted");
                    } else {
                        setIsPending(false);
                        setError(e.message);
                    }
                })
        }, 1000);
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error, setData }
}

export default useFetch;