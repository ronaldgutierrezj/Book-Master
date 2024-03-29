import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RemoveResults=({results})=>{
    const[checked, setChecked] = useState([]);
    const navigate = useNavigate();

    const handleChecks = (event) => {
        var updates = [...checked];
        if(event.target.checked){
            updates = [...checked, event.target.value];
        }
        else{
            updates.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updates);
    };

    const removeBooksFromDatabase = (event) => {
        event.preventDefault();

        checked.map((bookId) => {
            axios.delete(`http://localhost:8080/book/${bookId}`)
            .then((response) => {console.log(`Successfully Deleted Book ${bookId}`);})
            .catch(err => console.log(err.response.data.message));
        });

        navigate('/remove_success');
    }

    return(
        <div className = "DatabaseBookList">
            <div className = "bookList_container">
                {
                    results.map((item, index) => {
                        return(
                            <div key={index} className="bookCard">
                                <img src={item.thumbnail} alt="img"/>
                                <br></br>
                                <input value={item.id} type="checkbox" onChange={handleChecks}/>
                                <div className="cardBottom">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
            <button onClick={removeBooksFromDatabase}>Remove Selected Books</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default RemoveResults;