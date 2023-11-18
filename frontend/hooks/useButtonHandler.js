import e from "cors";
import React, { useState } from "react";

function useButtonHandler() {
        const [value, setValue] = useState(false);
        const clickHandler = (e) => {
                e.preventDefault();
                setValue(e.target.id);
        };

        return { value, clickHandler };
}

export default useButtonHandler;
