import react , {useState} from 'react';
import axios from "axios";

const LibrarySearch=()=>{

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [bookData, setBookData] = useState([]);

    const searchLibrary = (e) => {
        e.preventDefault();
        if(category === "all"){
            axios.get("http://localhost:8080/book/all")
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err));
        }
        else if(category === "title"){
        //TODO:Change so it searches by title
            axios.get("http://localhost:8080/book/all")
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err));
        }
        else{
        //TODO:Change so it searches by author
            axios.get("http://localhost:8080/book/all")
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err));
        }
    }

    return(
        <>
            <div className='container mt-3'>
                <h2>Look For Books</h2>
                <form onSubmit = {searchLibrary}>
                    <input type="text" placeholder="Enter Search Term" value={search}
                        onChange={e=>setSearch(e.target.value)}/>
                    <label>
                        Search
                        <select value={category} onChange={e=>setCategory(e.target.value)}>
                            <option value="all" selected> ALL </option>
                            <option value="title"> TITLE </option>
                            <option value="author"> AUTHOR </option>
                        </select>
                    </label>
                    <button type="submit">Search</button>
                </form>
            </div>
        </>)
}

export default LibrarySearch;