import { useParams } from "react-router"

const Word = () => {
    const {name} = useParams();

    return <main className="oneword">
        <div className="page_word">{name}</div>
    </main>
}

export default Word