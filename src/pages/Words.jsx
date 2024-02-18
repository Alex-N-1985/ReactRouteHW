import { useParams } from "react-router";
import progdata from "../assets/datas/progdata.json";
import WordData from "../components/WordData/WordData";
import SearchRes from "../components/SearchRes/SearchRes";

export const Words = () => {
    const { name } = useParams();

    const wdata = progdata.words.filter(word => word[0] === name);

    return <main>
        {
            wdata.length > 0 ? <section>
            { wdata.map((item, index) => <WordData
                key={index}
                value={item}
                linkData={`/word/${item}`} />)}
        </section>
            : <SearchRes value = {name}/>}
    </main>;
};

export default Words;