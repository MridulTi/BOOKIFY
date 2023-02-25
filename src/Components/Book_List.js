import React, { useEffect,useState } from "react";
// import Navbar from "../Components/Navbar";
export function Book_Cover(){
    const[items,SetItems]=useState([]);
    const[isLoaded,SetIsLoaded]=useState(false);
    const[error,SetError]=useState(null);
    useEffect(()=>{
        const api_key="k6rIBgrLr5oGDUeL42GMtbETrMlk1nFw"
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`)
        .then(res=>res.json())
        .then((result)=>{
            SetIsLoaded(true);
            SetItems(result.results.books);
        },
        (error)=>{
            SetIsLoaded(true);
            SetError(error);
        }
        )
    },[])
    if (error) {
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
        return <div>Loading...</div>;
    }else{
        return (
          <div className="flex gap-12 overflow-scroll">
            {items.map(data=>{
                return(
                    <img src={data.book_image}/>
                )
            })}
          </div>
        );
    }
}