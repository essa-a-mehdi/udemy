import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProivder({children}) {
    return <NavigationContext.Provider value={{}}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProivder };
export default NavigationContext;