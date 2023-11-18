import React, { useEffect, useState } from "react";
import useButtonHandler from "../hooks/useButtonHandler";

const initialIndex = 4; //  "B" nin bulunduğu indexi

export default function AppFunctional(props) {
        const {
                value,
                clickHandler,
                coordinates,
                sayac,
                initialMessage,
                mail,
                mailHandler,
                submitHandler,
        } = useButtonHandler();

        const [index, setIndex] = useState(initialIndex);
        useEffect(() => {
                if (coordinates.x === 1 && coordinates.y === 1) {
                        setIndex(0);
                } else if (coordinates.x === 2 && coordinates.y === 1) {
                        setIndex(1);
                } else if (coordinates.x === 3 && coordinates.y === 1) {
                        setIndex(2);
                } else if (coordinates.x === 1 && coordinates.y === 2) {
                        setIndex(3);
                } else if (coordinates.x === 2 && coordinates.y === 2) {
                        setIndex(4);
                } else if (coordinates.x === 3 && coordinates.y === 2) {
                        setIndex(5);
                } else if (coordinates.x === 1 && coordinates.y === 3) {
                        setIndex(6);
                } else if (coordinates.x === 2 && coordinates.y === 3) {
                        setIndex(7);
                } else if (coordinates.x === 3 && coordinates.y === 3) {
                        setIndex(8);
                }
        }, [coordinates]);

        return (
                <div id="wrapper" className={props.className}>
                        <div className="info">
                                <h3 id="coordinates">
                                        Coordinates ({coordinates.x},
                                        {coordinates.y})
                                </h3>
                                <h3 id="steps">{sayac} kere ilerlediniz</h3>
                        </div>
                        <div id="grid">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                                        <div
                                                key={idx}
                                                className={`square${
                                                        idx === index
                                                                ? " active"
                                                                : ""
                                                }`}
                                        >
                                                {idx === index ? "B" : null}
                                        </div>
                                ))}
                        </div>
                        <div className="info">
                                <h3 id="message">{initialMessage}</h3>
                        </div>
                        <div id="keypad">
                                <button id="left" onClick={clickHandler}>
                                        SOL
                                </button>
                                <button id="up" onClick={clickHandler}>
                                        YUKARI
                                </button>
                                <button id="right" onClick={clickHandler}>
                                        SAĞ
                                </button>
                                <button id="down" onClick={clickHandler}>
                                        AŞAĞI
                                </button>
                                <button id="reset" onClick={clickHandler}>
                                        reset
                                </button>
                        </div>
                        <form>
                                <input
                                        id="email"
                                        value={mail}
                                        type="email"
                                        placeholder="email girin"
                                        onChange={mailHandler}
                                ></input>
                                <input
                                        id="submit"
                                        type="submit"
                                        onClick={submitHandler}
                                ></input>
                        </form>
                </div>
        );
}
