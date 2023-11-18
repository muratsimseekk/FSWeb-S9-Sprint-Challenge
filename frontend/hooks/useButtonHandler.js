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

        const [name, setName] = useState("");
        const [send, setSend] = useState(false);

        const submitHandler = (e) => {
                e.preventDefault();
                setName(mail.slice(0, mail.indexOf("@")));
                if (isValidEmail(mail) && count > 0) {
                        // Eğer e-posta geçerliyse, işlemleri buraya ekle

                        setSend(true);
                } else if (mail === "") {
                        // Geçerli değilse hata mesajı göster
                        setInitialMessage("Ouch: email is required");
                } else {
                        setInitialMessage("Ouch: email must be a valid email");
                }
        };

        const isValidEmail = (email) => {
                // E-posta doğrulama için bir düzenli ifade kullan
                const emailRegex =
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                return emailRegex.test(email);
        };

        const clickHandler = (e) => {
                e.preventDefault();
                setValue(e.target.id);
                setCount(count + 1);
        };

        const mailHandler = (e) => {
                setMail(e.target.value);
        };
        // useEffect(() => {
        //         console.log(name);
        // }, [send]);
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
                name,
                send,
        };
}

export default useButtonHandler;
