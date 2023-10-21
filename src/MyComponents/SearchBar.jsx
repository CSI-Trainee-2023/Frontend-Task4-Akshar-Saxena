import React from 'react'
import magGlass from '../assets/icons/magnifyingGlass.png'

export default function SearchBar() {
  return (
    <div className='searchBar'>
      <div className="textField">
        <img src={magGlass} alt="" />
        <input type="text"/>
      </div>
    </div>
  )
}
