import { useEffect, useState } from "react";

const useFctch = (url) => {
    const [data, setData] = useState(null);
    const [isPendig, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)

                .then(res => {
                    //if data coudl not reach to the resource from the server
                    if (!res.ok) {
                        throw Error('data didnt reach to the page from server or page not available');
                    }
                    return res.json();
                })

                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                })

                //catch any kind of network error (if we cannot reach the server this fires)
                .catch(err => {
                    setIsPending(false);
                    //set error message using setError() function, This catch any 'throw Error' property too
                    setError(err.message);
                })
        }, 1000);
    }, [url]);



    return { data, isPendig, error }
}

export default useFctch;



