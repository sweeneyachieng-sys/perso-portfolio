 import { useState } from "react"
 

 const style ={
    searchCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    width: '100%',
    maxWidth: '450px',
    boxSizing: 'border-box',
  },
  Input: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    marginBottom: '16px',
    boxSizing: 'border-box',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },projectItem: {
    padding: '14px 16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
  },projectTitle: {
    display: 'block',
    fontSize: '1.05rem',
    color: '#111827',
    marginBottom: '4px',
  }, projectDesc: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#4b5563',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '16px 0',
  }
 }
 function Search({projects}){

const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
    // Log the new value directly since React state updates are asynchronous
    console.log("Search Term:", value);
     }


// Filter items in real time based on the search term
  const filteredItems = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <div style={style.searchCard}>
    <input 
    style={style.Input}
    type="text"
     placeholder="Search Project..." 
     required
     value={searchTerm}
     onChange={handleSearch}
    />

    <ul style={style.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((project, index) => (
            <li style={style.projectItem} key={index}>
                <strong>{project.name}</strong> - 
                <p style={style.projectDesc}>{project.description}</p>
            </li>
          ))
        ) : (
          <li style={style.eText}>No matching results found.</li>
        )}
      </ul>
    
    </div>
)

 }
 export default Search