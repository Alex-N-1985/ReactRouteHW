import "./SearchRes.css";

const SearchRes = ({value}) => {
    return <section className="emptysearch">
        <div>В списке нет слов на букву {value}</div>
    </section>
}

export default SearchRes;