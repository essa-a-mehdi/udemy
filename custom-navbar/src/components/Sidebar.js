import Link from "./Link";

export default function Sidebar() {
    return (
        <div className="sidebar-links">
            <Link to="/accordion">AccordionPage</Link>
            <Link to="/dropdown">DropdownPage</Link>
        </div>
    )
}