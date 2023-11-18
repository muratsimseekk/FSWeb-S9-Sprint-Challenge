import React, { useEffect, useState } from "react";

function useButtonHandler() {
        const [count, setCount] = useState(0);
        const [sayac, setSayac] = useState(0);
        const [coordinates, setCoordinates] = useState({
                x: 2,
                y: 2,
        });
        const [value, setValue] = useState(false);
        const clickHandler = (e) => {
                e.preventDefault();
                setValue(e.target.id);
                setCount(count + 1);
        };
        useEffect(() => {
                if (value === "left" && coordinates.x > 1) {
                        console.log("sol");
                        setCoordinates({
                                ...coordinates,
                                x: coordinates.x - 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "right" && coordinates.x < 3) {
                        console.log("sağ");
                        setCoordinates({
                                ...coordinates,
                                x: coordinates.x + 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "up" && coordinates.y > 1) {
                        console.log("yukarı");
                        setCoordinates({
                                ...coordinates,
                                y: coordinates.y - 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "down" && coordinates.y < 3) {
                        console.log("aşağı");
                        setCoordinates({
                                ...coordinates,
                                y: coordinates.y + 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "reset") {
                        console.log("reset");
                        setCoordinates({ ...coordinates, x: 2, y: 2 });
                        setSayac(0);
                }
        }, [count]);

        return { value, clickHandler, coordinates, sayac };
}

export default useButtonHandler;
