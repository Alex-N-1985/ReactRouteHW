// import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({title, linkData}) =>{
    return <div className="navmenu-item">
        {/* <NavLink to={linkData}>{title}</NavLink> */}
        <a href={linkData}>{title}</a>
    </div>
}

export default MenuItem;