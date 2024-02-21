import { NavLink } from "react-router-dom";

import "./WordData.css"

const WordData = ({value, linkData}) => { 
    return <div className="worddata">
        <div className="worddata__item">
            <NavLink to={linkData}>{value}</NavLink>
        </div>
        <div className="worddata__edit">
            <input type="text" className=""/>
            <button>Изменить</button>
        </div>
    </div>
}

export default WordData;