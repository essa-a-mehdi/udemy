import { useEffect, useState } from "react";
import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProivder({children}) {
    // Set a state to cause a re-render whenever the forward and back button is clicked
    // This would cause path to change hence use path to check when state is changed
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

    // allow navigation with pushtstate and then update the path to cuase re-render
    const navigate = (to) => {
        // to is the path we will navigate to like '/dropdown'
        window.history.pushState({}, '', to);
        setCurrentPath(to);

    }
    // given navigation context to all files into app
    return <NavigationContext.Provider value={{ currentPath, navigate }}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProivder };
export default NavigationContext;