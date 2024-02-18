import { NavLink } from "react-router-dom";

import "./WordData.css"

const WordData = ({value, linkData}) => {
    return <div className="worddata-item">
        <NavLink to={linkData}>{value}</NavLink>
    </div>
}

export default WordData;