import React from 'react'
import '../components/styles/Search_bar.css';


export default function Search_bar() {
  return (
    <div className='search-container'>
      <form action="" method="get">
        <input className='search-input' type="text" name="search" placeholder="Search..." aria-label="Search"/>
          <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  )
}
