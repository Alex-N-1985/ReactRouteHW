import okIcon from "../../assets/images/ok.svg";
import cancelItem from "../../assets/images/cancel.svg";

import "./AddEditPanel.css";

const AddEditPanel = ({val}) => {
    return <div className="worddata__edit">
        <input type="text" className="worddata__edit-tfield" value={val}/>
        <button className="worddata__edit-button">
            <img className="worddata__edit-icon" src={okIcon} alt="" />
        </button>
        <button className="worddata__edit-button">
            <img className="worddata__edit-icon" src={cancelItem} alt="" />
        </button>
    </div>
}

export default AddEditPanel;