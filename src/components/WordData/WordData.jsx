import { NavLink } from "react-router-dom";

import "./WordData.css";
import editIcon from "../../assets/images/edit.svg";
import delIcon from "../../assets/images/delete.svg";

const WordData = ({value, linkData}) => { 
    return <div className="worddata">
        <div className="worddata__item">
            <NavLink to={linkData}>{value}</NavLink>
            <button className="worddata__button">
                <img className="worddata__icon" src={editIcon} alt="" />
            </button>
            <button className="worddata__button">
                <img className="worddata__icon" src={delIcon} alt="" />
            </button>            
        </div>
    </div>
}

export default WordData;