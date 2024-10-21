import { Link } from "react-router-dom"

const SidebarItem = ({to, children, text}) => {
    return (
        <li>
            <Link to={to} target={to === "/" ? "_blank" : "_self"} rel={to === "/" ? "noopener noreferrer" : ""} className='bg-secondary w-full flex items-center rounded-md py-2 ps-2 font-bold transition hover:scale-105 focus:outline-none text-sm'>
                {children}
                <span className='ps-1'>{text}</span>
            </Link>
        </li>
    )
}

export default SidebarItem