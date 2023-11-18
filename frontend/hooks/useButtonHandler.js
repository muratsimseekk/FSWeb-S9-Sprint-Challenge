import axios from "axios";
import React, { useEffect, useState } from "react";

function useButtonHandler() {
        const [mail, setMail] = useState("");
        const [initialMessage, setInitialMessage] = useState("");
        const [count, setCount] = useState(0);
        const [sayac, setSayac] = useState(0);
        const [coordinates, setCoordinates] = useState({
                x: 2,
                y: 2,
        });
        const [value, setValue] = useState(false);

        //{ "x": 1, "y": 2, "steps": 3, "email": "lady@gaga.com" }

        const submitHandler = (e) => {
                e.preventDefault();

                axios.post("http://localhost:9000/api/result", {
                        x: coordinates.x,
                        y: coordinates.y,
                        steps: sayac,
                        email: mail,
                })
                        .then((res) => {
                                console.log("res:", res);
                                setInitialMessage(res.data.message);

                                setMail("");
                        })
                        .catch((err) => {
                                setInitialMessage(err.response.data.message);
                        });
        };

        const clickHandler = (e) => {
                e.preventDefault();
                setValue(e.target.id);
                setCount(count + 1);
        };

        const mailHandler = (e) => {
                setMail(e.target.value);
        };

        useEffect(() => {
                if (value === "left" && coordinates.x > 1) {
                        setCoordinates({
                                ...coordinates,
                                x: coordinates.x - 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "right" && coordinates.x < 3) {
                        setCoordinates({
                                ...coordinates,
                                x: coordinates.x + 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "up" && coordinates.y > 1) {
                        setCoordinates({
                                ...coordinates,
                                y: coordinates.y - 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "down" && coordinates.y < 3) {
                        setCoordinates({
                                ...coordinates,
                                y: coordinates.y + 1,
                        });
                        setSayac(sayac + 1);
                } else if (value === "reset") {
                        setCoordinates({ ...coordinates, x: 2, y: 2 });
                        setSayac(0);
                        setMail("");
                }
        }, [count]);

        useEffect(() => {
                if (coordinates.x === 1 && value === "left") {
                        setInitialMessage("Sola gidemezsiniz");
                } else if (coordinates.x === 3 && value === "right") {
                        setInitialMessage("Sağa gidemezsiniz");
                } else if (coordinates.y === 1 && value === "up") {
                        setInitialMessage("Yukarıya gidemezsiniz");
                } else if (coordinates.y === 3 && value === "down") {
                        setInitialMessage("Aşağıya gidemezsiniz");
                } else {
                        setInitialMessage("");
                }
        }, [count]);
        return {
                value,
                clickHandler,
                coordinates,
                sayac,
                initialMessage,
                mail,
                mailHandler,
                submitHandler,
        };
}

export default useButtonHandler;
