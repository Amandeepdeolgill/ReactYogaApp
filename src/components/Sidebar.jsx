import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/" className="option">HomePage</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><Link to="/trainers">Our Trainers</Link></li>
            </ul>
        </div>
    )
}