import React from 'react'
import './Search.css'


const Search = () => {
  return (
    <section className='search-container'>
      <h1>Search</h1>
      <input className='common-name-input' type='text' placeholder='Search by common name'></input>
      
    </section>
  )
}

export default Search