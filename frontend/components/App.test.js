import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { reset } from "nodemon";
import AppFunctional from "./AppFunctional";
import "@testing-library/jest-dom/extend-expect";
// Write your tests here

const updateStatelessSelectors = (document) => {
        left = document.querySelector("#left");
        right = document.querySelector("#right");
        up = document.querySelector("#up");
        down = document.querySelector("#down");
        reset = document.querySelector("#reset");
        submit = document.querySelector("#submit");
};
const updateStatefulSelectors = (document) => {
        coordinates = document.querySelector("#coordinates");
        squares = document.querySelectorAll(".square");
        message = document.querySelector("#message");
        steps = document.querySelector("#steps");
        email = document.querySelector("#email");
};

test("Coordinates degisiyor mu ? ", () => {
        render(<AppFunctional />);
        fireEvent.click(left);
        fireEvent.click(up);
        fireEvent.click(right);
        expect(coordinates.textContent).toBe("Coordinates (2,1)");
});

test("Steps degisiyor mu ? ", () => {
        render(<AppFunctional />);
        fireEvent.click(left);
        fireEvent.click(up);
        fireEvent.click(up);
        fireEvent.click(right);
        fireEvent.click(right);
        fireEvent.click(right);
        expect(steps.textContent).toBe("4 kere ilerlediniz");
});

test("Message degisiyor mu ? ", () => {
        render(<AppFunctional />);
        fireEvent.click(left);
        fireEvent.click(up);
        fireEvent.click(up);
        expect(message.textContent).toBe("Yukarıya gidemezsiniz");
});

// test("reset butonu calisiyor mu ?", () => {
//         render(<AppFunctional />);
//         fireEvent.click(right);
//         fireEvent.click(down);
//         fireEvent.click(left);
//         fireEvent.click(reset);

//         expect(steps.textContent).toBe("0 kere ilerlediniz");
// });
