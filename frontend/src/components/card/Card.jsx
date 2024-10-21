import { Link } from "react-router-dom";
import IconBook from "../../icons/IconBook";

const Card = ({to, title, text }) => {
    return (
        <Link to={to} className="block rounded-xl border border-primary p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none transition hover:scale-105">
            <span className="inline-block rounded-lg bg-secondary text-black p-3">
                <IconBook/>
            </span>
            <h2 className="mt-2 font-black text-primary">{title}</h2>
            <p className="text-sm">{text}</p>
        </Link>
    )
}
export default Card;