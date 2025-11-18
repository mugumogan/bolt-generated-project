import React from 'react'
import { Search } from 'lucide-react'
import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        placeholder="Search for products (e.g., headphones, laptop, camera)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  )
}

export default SearchBar
