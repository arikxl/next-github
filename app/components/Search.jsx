'use client';
import React, { useState } from 'react'

const Search = ({ getSearchResults }) => {
  
    const [query, setQuery] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/courses/search?query=${query}`);

        const courses = await response.json();
        getSearchResults(courses)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search courses' style={{color: 'black'}}
                value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">
                Search
            </button>
    </form>
  )
}

export default Search