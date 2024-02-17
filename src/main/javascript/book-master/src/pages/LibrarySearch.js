import { useState} from 'react';
import { Link } from "react-router-dom";



const LibrarySearch=(props)=>{
   
    
    const [searchForm, setSearchForm] = useState({keyword: "",
                                                category: 'all'});
    const [searchBook, setSearchBook] = useState("");
    const [show, setShow] = useState(false);
    const books = props.books;
   


    const handleChange = event => {
        setSearchForm({ ...searchForm, [event.target.name]: event.target.value })
      }


    const searchLibrary = (e) => {
        e.preventDefault();
        if(searchForm.category === "all"){ 
            const filterBook = books.filter((item) => {
                return item.author === searchForm.keyword || item.title===searchForm.keyword})
                setSearchBook(filterBook)
                setShow(true)

            } else if(searchForm.category === "title"){ 
                const filterBook = books.filter((item) => {
                    return item.title === searchForm.keyword})
                    setSearchBook(filterBook)
                    setShow(true)

                }  else{ 
                    const filterBook = books.filter((item) => {
                        return item.author === searchForm.keyword})
                        setSearchBook(filterBook)
                        setShow(true)
                    } 
        }
        
    

    return(
        <>
            <div className='container mt-3'>
                <h2>Look For Books</h2>
                <form onSubmit = {searchLibrary}>
                    <input 
                        type="text" 
                        placeholder="Enter Search Term"
                        name="keyword" 
                        value={searchForm.keyword}
                        onChange={handleChange}/>
                    <br></br>
                    <label>
                        Search Category
                        <select name= "category" defaultValue={searchForm.category} onChange={handleChange}>
                            <option value="all"> ALL </option>
                            <option value="title"> TITLE </option>
                            <option value="author"> AUTHOR </option>
                        </select>
                    </label>
                    <br></br>
                    <button type="submit">Search</button>
                </form>
            </div>


            <div id="resultsDiv" style={{display: (show ? 'block' : 'none')}}>
                {searchBook.length === 0?  
                            <div className="container">
                                <br></br>
                                <br></br>
                                <h2>No Results Found. Try Again.</h2>
                            </div> :
                             <div className="bookList_container container">
                             {
                             searchBook.map((book, index) => {
                                 return(
                                     <div key={index}>
                                         <br></br>
                                         <figure className="bookCard">
                                             <Link to={`/displaybook/${book.id}`}>  
                                                 <img
                                                     src={book.thumbnail}
                                                     width="200"
                                                     height="300"
                                                     role="link"
                                                     alt={book.title}
                                                     />
                                             </Link>
                                         </figure>
                                         <div className="cardBottom">
                                             <h5>{book.title}</h5>
                                         </div>
                                     </div>
                                 )
                             })
                         }
                         </div>
                }
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>)
}

export default LibrarySearch;