import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import addIcon from "../assets/images/add.svg";
import okIcon from "../assets/images/ok.svg";
import cancelItem from "../assets/images/cancel.svg";

import WordData from "../components/WordData/WordData";
import { addWord } from "../store/Words";

const Home = () =>{
    
    const [showPanel, setAddEditPanel] = useState(false);
    const [newWord, setNewWord] = useState("");

    const words = useSelector(state => state.words.data);
    const dispatch = useDispatch();    

    const showAddEditPanel = () => { setAddEditPanel(true)}

    const hideAddEditPanel = () => {
        setAddEditPanel(false);
        setNewWord("");
    }

    const addDoneHandler = ()=> {
        const word = newWord;
        console.log(word);
        dispatch(addWord(word));
        setAddEditPanel(false);
        setNewWord("");
    }

    return <main>
        <h1>Главная страница</h1>
        <section className="editpanel"> 
            {showPanel && 
                <div className="worddata__edit">
                <input type="text" className="worddata__edit-tfield" onChange={(e) => setNewWord(e.target.value)} />
                <button className="worddata__edit-button" onClick={addDoneHandler}>
                    <img className="worddata__edit-icon" src={okIcon} alt="" />
                </button>
                <button className="worddata__edit-button" onClick={hideAddEditPanel}>
                    <img className="worddata__edit-icon" src={cancelItem} alt="" />
                </button>
            </div>
            }
            <button className="button__add"><img className="button__add-icon" src={addIcon} alt="" onClick={showAddEditPanel} /></button>
        </section>
        <section>
            {
                words.map((item, index) => 
                <WordData 
                    key = {index}
                    value = {item}
                    linkData = {`/word/${item}`}
                />)
            }
        </section>
    </main>
}

export default Home;