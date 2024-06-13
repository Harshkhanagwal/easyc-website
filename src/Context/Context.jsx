import React, { createContext, useState } from "react";

export const Globalcontext = createContext();

export const GlobalData = ({ children }) => {
    const [aside, setAside] = useState("show");
    const [asideMenu, setAsideMenu] = useState(true);
    const [logo, setLogo] = useState(true);

    return (
        <Globalcontext.Provider value={{ aside, SetAside: setAside,SetAsideMenu : setAsideMenu, asideMenu, logo, SetLogo : setLogo}}>
            {children}
        </Globalcontext.Provider>
    );
};

export default GlobalData;
