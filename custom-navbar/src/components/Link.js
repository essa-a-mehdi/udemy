import { useContext } from 'react'
import NavigationContext from '../context/navigation';
// to is the path that we r gonna navigate to when link clicked
// children is the text we are gonna show with anchor

export default function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const handleClick =(event) => {
        console.log(event);
        console.log(event.ctrl);
        console.log(event.metaKey);
        if (event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    
    return <a href={to} onClick={handleClick}>{children}</a>
}