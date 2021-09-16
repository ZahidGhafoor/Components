import React, { useEffect, useState } from 'react'
import "./ham.scss"
const Hamm = () => {
    const [timer, setTimer] = useState(20)
    const [pkr, setPkr] = useState(null)


    const handleChange = (event) => {

        setPkr(event.target.value)


    };
    console.log(pkr)

    useEffect(() => {
        setInterval(
            () =>
                setTimer((timer) => {
                    if (timer > 0) {
                        return timer - 1;
                    } else {
                        return 0;
                    }
                }),
            1000
        );
    }, [])
    return (
        <>
            <div style={{ backgroundColor: (timer <= 15 && timer > 10) ? "blue" : (timer <= 10 && timer > 5) ? "grey" : (timer <= 5 && timer >= 0) ? "yellow" : null }} className="hamm__contianer">

                <div className="hamm__header">
                    <h3>Timer</h3>
                    <p className="hamm__para">
                        {timer}

                    </p>
                </div>

                <div className="inputs">
                    <input type="number" className="pkr" placeholder="PKR" name="Pkr" value={pkr} onChange={handleChange} />
                    <input type="number" className="usd" placeholder="USD" value={pkr * 169.5} />
                </div>
            </div>

        </>
    )
}

export default Hamm
