import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("crypto latest");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "10bf3b99ea114e5bbb35a9b892f62080";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log("handle_input",e.target.value);
        setSearch(e.target.value)
        getData();
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy Crypto</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with Crypto and Stock News</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Crypto latest</button>
            <button onClick={userInput} value="USA Trump">USA Trump</button>
            <button onClick={userInput} value="ethereum">ethereum</button>
            <button onClick={userInput} value="NSE India">NSE India</button>
            <button onClick={userInput} value="India stock Market latest">India stock Market latest</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp