import React, { useEffect, useState } from 'react'

const Hamm = () => {
    const [timer, setTimer] = useState(20)


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
            <div className="hamm__contianer">
                <div className="hamm__header">
                    <h3>Timer</h3>
                    <p className="hamm__para">
                        {timer}

                    </p>
                </div>
            </div>

        </>
    )
}

export default Hamm
