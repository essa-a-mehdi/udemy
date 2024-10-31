import useNavigation from "../hooks/use-navigation";
// to is the path that we r gonna navigate to when link clicked
// children is the text we are gonna show with anchor

export default function Link({ to, children }) {
    const { navigate } = useNavigation;

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