import React, { useState } from "react";
import useButtonHandler from "../hooks/useButtonHandler";
// önerilen başlangıç stateleri
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; //  "B" nin bulunduğu indexi
const gridSize = 3;

//      ```js
//      (1, 1)(2, 1)(3, 1)(1, 2)(2, 2)(3, 2)(1, 3)(2, 3)(3, 3);
//      ```

export default function AppFunctional(props) {
        // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
        // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

        const { value, clickHandler, coordinates, sayac } = useButtonHandler();

        // const [x, setX] = useState(initialIndex % gridSize);
        // const [y, setY] = useState(initialIndex / gridSize);

        const [index, setIndex] = useState(initialIndex);

        function getXY() {
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
        }

        function getXYMesaj() {}

        function reset() {
                // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
        }

        function sonrakiIndex(yon) {
                // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
                // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
                // şu anki indeksi değiştirmemeli.
        }

        function ilerle(evt) {}

        function onChange(evt) {
                // inputun değerini güncellemek için bunu kullanabilirsiniz
        }

        function onSubmit(evt) {
                // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
        }

        return (
                <div id="wrapper" className={props.className}>
                        <div className="info">
                                <h3 id="coordinates">
                                        Koordinatlar {coordinates.x},
                                        {coordinates.y}
                                </h3>
                                <h3 id="steps">{sayac} kere ilerlediniz</h3>
                        </div>
                        <div id="grid">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                                        <div
                                                key={idx}
                                                className={`square${
                                                        idx === 4
                                                                ? " active"
                                                                : ""
                                                }`}
                                        >
                                                {idx === 4 ? "B" : null}
                                        </div>
                                ))}
                        </div>
                        <div className="info">
                                <h3 id="message"></h3>
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
                                        type="email"
                                        placeholder="email girin"
                                ></input>
                                <input id="submit" type="submit"></input>
                        </form>
                </div>
        );
}
