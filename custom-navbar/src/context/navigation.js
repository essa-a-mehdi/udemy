import { useEffect, useState } from "react";
import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProivder({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);


    // Handle back and forth buttons with popstate which is generated from pushstate function
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, [])

    return <NavigationContext.Provider value={{}}>
        {currentPath};
        {children}
    </NavigationContext.Provider>
}

export { NavigationProivder };
export default NavigationContext;