import React, { useState } from "react";
import useButtonHandler from "../hooks/useButtonHandler";
// önerilen başlangıç stateleri
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; //  "B" nin bulunduğu indexi

// - HTML öğelerinin hiyerarşisi, idleri, class adları vb. aynı olmalıdır..
//      - Geçerli kare, büyük bir B ve "active" class adıyla işaretlenmiştir.
//      - Sayfada görüntülenen submit başarısı ve hata mesajları API'den gelir.(Network tabını inceleyin).
//      - Frontend form doğrulama eklemenize gerek yok.
// - Gridin her bir karesinin koordinatları aşağıdaki gibidir:

//      ```js
//      (1, 1)(2, 1)(3, 1)(1, 2)(2, 2)(3, 2)(1, 3)(2, 3)(3, 3);
//      ```

export default function AppFunctional(props) {
        // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
        // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

        const { value, clickHandler } = useButtonHandler();
        const [count, setCount] = useState(0);

        const coordinates = [
                (1, 1),
                (2, 1),
                (3, 1),
                (1, 2),
                (2, 2),
                (3, 2),
                (1, 3),
                (2, 3),
                (3, 3),
        ];
        function getXY() {
                let B = coordinates[4];
                // Baslangic x kordinat degerim
                let x = B[0];
                // Baslangic y kordinat degerim
                let y = B[1];

                if (value === "left" && x > 1) {
                        x--;
                        console.log("sola hareket algilandi");
                }

                // butona tiklandiginda x degeri 3 ten kucukse 1 artabilir .
        }

        function getXYMesaj() {
                // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
                // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
                // tamamen oluşturulmuş stringi döndürür.
        }

        function reset() {
                // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
        }

        function sonrakiIndex(yon) {
                // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
                // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
                // şu anki indeksi değiştirmemeli.
        }

        function ilerle(evt) {
                // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
                // ve buna göre state i değiştirir.
        }

        function onChange(evt) {
                // inputun değerini güncellemek için bunu kullanabilirsiniz
        }

        function onSubmit(evt) {
                // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
        }

        return (
                <div id="wrapper" className={props.className}>
                        <div className="info">
                                <h3 id="coordinates">Koordinatlar (2, 2)</h3>
                                <h3 id="steps">0 kere ilerlediniz</h3>
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
