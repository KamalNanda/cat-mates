import React from 'react'
 const SearchBar = ({ searchfield , searchChange}) =>{
     return(
         <div>
             <input 
                type='search' 
                placeholder='Search Here' 
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchChange} 
            />
         </div>
     )
 }
 export default SearchBar