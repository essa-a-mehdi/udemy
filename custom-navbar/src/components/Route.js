import { useContext } from "react";
import NavigationContext from "../context/navigation";

export default function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath) {
        return children;
    } else if (path === "*") {
        if (currentPath !== "/accordion" && currentPath !== "/dropdown" && currentPath !== "/" && currentPath !== "/modal") {
            return children;
        }
    }
    
    return null;
}
