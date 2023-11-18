import React, { useState } from "react";

function useMailHandler() {
        const [mailInput, setMailInput] = useState("");

        const mailHandler = (e) => {
                setMailInput(e.target.value);
        };
        console.log("girilen mail adresi ", mailInput);
        return { mailInput, mailHandler };
}

export default useMailHandler;
