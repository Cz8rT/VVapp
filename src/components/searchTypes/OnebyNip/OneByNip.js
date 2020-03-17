import React, {useState, useEffect} from "react";

const accNumber = '1100534799';
const OneByNip = () => {
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(`https://wl-test.mf.gov.pl/api/search/nip/${accNumber}?date=2020-03-17`)
            .then((res) => {
                return res.json();
            }).then(res => console.log(res))
            .catch(() => {
                setError(true);
            });
    }, []);
    return (
        <>
            <h1>Jesteś w komponencie OneByNip</h1>
            {(error) && <h1>Coś poszło nie tak. Serwer nie odpowiada.</h1>}
        </>
    )
};

export default OneByNip;