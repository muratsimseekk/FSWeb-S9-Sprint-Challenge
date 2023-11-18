import React, { useState } from "react";

function useSubmitHandler() {
        // const [tikla, setTikla] = useState(false);
        const [send, setSend] = useState(false);
        const submitHandler = (e) => {
                e.preventDefault();
                setSend(true);
        };
        return { send, submitHandler };
}

export default useSubmitHandler;
