import progdata from "../assets/datas/progdata.json";

import WordData from "../components/WordData/WordData";


const Home = () =>{
    
    const words = progdata.words.sort();

    return <main>
        <h1>Главная страница</h1>
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