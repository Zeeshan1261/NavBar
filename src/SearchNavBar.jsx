import React, { useEffect, useState } from "react";

//'https://jsonplaceholder.typicode.com/todos/1'

function SearchNavBar() {
    const [target,setTarget] = useState('')
    const [data,setData] = useState([])
    console.log(target);
    useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=> res.json())
    .then((json)=> setData(json))
    },[])
    console.log(data);

    return(
        <>
    <h1>You can search Data from the search bar above</h1> 
    <input  onChange={(e)=> setTarget(e.target.value.toLocaleLowerCase())} type={'text'} placeholder="SearchDataHere"></input>

    {data.filter((lists)=>lists.title.includes(target)).map((lists)=> { 
    return( <> 
    <p>{lists.title}</p>
    <p>{lists.id}</p>        
            </>        
 )
 })  }  
</>
    )
}
export default SearchNavBar