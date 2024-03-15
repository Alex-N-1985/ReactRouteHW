import { NavLink } from "react-router-dom";

import "./WordData.css";
import editIcon from "../../assets/images/edit.svg";
import delIcon from "../../assets/images/delete.svg";
import cancelIcon from "../../assets/images/cancel.svg";
import okIcon from "../../assets/images/ok.svg";
import { useDispatch } from "react-redux";
import { delWord, editWord } from "../../store/Words";
import { useState } from "react";

const WordData = ({value, linkData}) => {

    const dispatch = useDispatch();

    const [editPanel, setEditPanel] = useState(false);

    const [editData, setEditData] = useState(value);
    const [prevData, setPrevData] = useState(value);

    const delHandler = (name) => {
        dispatch(delWord(name));
    }

    const editDataHandler = () => { setEditPanel(true)};
    const closeEditPanel = () => {setEditPanel(false)};

    const editHandler = ({value, prev}) => {
        dispatch(editWord({value, prev}));
        setEditPanel(false);
        setEditData(editData);
        setPrevData(editData);
    }

    return <div className="worddata">
        { !editPanel ? <div className="worddata__item">
            <NavLink to={linkData}>{value}</NavLink>
            <button className="worddata__button" onClick={(e) => editDataHandler()}>
                <img className="worddata__icon" src={editIcon} alt="" />
            </button>
            <button className="worddata__button" onClick={(e) => delHandler(value)}>
                <img className="worddata__icon" src={delIcon} alt="" />
            </button>            
        </div> : <div className="worddata__item">
        <input type="text" value={editData} onChange={(e) => setEditData(e.target.value)} />
        <input type="hidden" value={prevData} />
        <button className="worddata__button" onClick={(e) => editHandler({value: editData, prev: prevData})}>
            <img className="worddata__icon" src={okIcon} alt="" />
        </button>
        <button className="worddata__button" onClick={(e) => closeEditPanel()}>
            <img className="worddata__icon" src={cancelIcon} alt="" />
        </button>
    </div>}
    </div>
}

export default WordData;