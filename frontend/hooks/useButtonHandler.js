import e from "cors";
import React, { useState } from "react";

function useButtonHandler() {
        const [value, setValue] = useState(false);
        const clickHandler = (e) => {
                setValue(e.target.id);
        };

        return { value, clickHandler };
}

export default useButtonHandler;
