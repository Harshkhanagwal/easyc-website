import React, { createContext, useState } from "react";

export const Globalcontext = createContext();

export const GlobalData = ({ children }) => {
    const [aside, setAside] = useState("show");

    return (
        <Globalcontext.Provider value={{ aside, SetAside: setAside }}>
            {children}
        </Globalcontext.Provider>
    );
};

export default GlobalData;
