import React from 'react';
import {useLocation} from "react-router-dom";

const DisplayBook=()=> {
    const location = useLocation();
    const obj = location.state;
    var available = "";
    
    if(obj.book.available_quantity > 0){
        available = "Copies Available: " + obj.book.available_quantity;
    }
    else{
        available = "All Copies Are Currently Checked Out";
    }

    // const saveForLater = async () => {
    //     try {
    //         const userId = '1';
    //       // Make a POST request to your backend API
    //       const response = await fetch('http://localhost:8080/myshelf/saveBook', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json', // Set the appropriate content type
    //           // Add any additional headers if needed
    //         },
    //         // You may need to send some data with the request (e.g., book information)
    //         body: JSON.stringify({ 
    //             userId: userId,
    //             bookId: obj.book.id
    //         }),
    //       });
    
    //       if (response.ok) {
    //         console.log('Book saved for later successfully.');
    //         // You can perform any additional actions here
    //       } else {
    //         console.error('Failed to save book for later.');
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    return(
        <div>
            <table>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <img
                                    src={obj.book.thumbnail}
                                    width="300"
                                    height="400"
                                />
                            </tr>
                        </table>
                    </td>
                    <td> 
                        <button style={{marginRight: 14 + 'em'}}>Recommend Book</button>
                        <button style={{marginRight: 14 + 'em'}} onClick={saveForLater}>Save For Later</button>

                        {obj.book.available_quantity > 0 ? (
                            <>
                            <button style={{marginRight: 14 + 'em'}}>Check Book Out</button>
                            </>
                        ) : (
                            <button style={{marginRight: 14 + 'em'}}>Place Hold</button> 
                        )}
                        
                        
                        <br></br>
                        <br></br>
                        <table>
                            <tr>
                                <h2>Title: {obj.book.title}</h2>
                            </tr>
                            <tr>
                                <h3>Author: {obj.book.author}</h3>
                            </tr>
                            <tr>
                                <h5>Genre: {obj.book.genre}</h5>
                            </tr>
                            <tr>
                                <h5>{available}</h5>
                            </tr>
                            <tr>
                                <h6>{obj.book.description}</h6>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default DisplayBook;