import React, { useState } from 'react'
import Search from '../component/Search'


const originProjects = [
    { name: "Project 1", description: "My First Project" },
    { name: "Project 2", description: "My Second Project" },
    { name: "Project 3", description: "My Third Project" },
    { name: "Project 4", description: "My Four Project" },]


    const style = {
  mainEnclosure: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '900px',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    padding: 'clamp(16px, 4vw, 32px)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    boxSizing: 'border-box',
  },
  formCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '100%',
    maxWidth: '450px',
  },
 heading: {
    margin: '0 0 4px 0',
    fontSize: '1.5rem',
    color: '#111827',
    textAlign: 'center',
  },
input: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #f8f9fb',
    borderRadius: '8px',
    fontSize: '0.95rem',
    boxSizing: 'border-box',

  },
   textarea: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    minHeight: '90px',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: '#5c5f66',
    color: '#ffffff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },}

function AddProject() {
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
  const[projects, setProjects] = useState(originProjects)
  
    function handleSubmit(e) {
      e.preventDefault();
      const newProject = {
        name : projectName,
        description : projectDescription,
      }
      setProjects([...projects, newProject]);
      
      setProjectName ("")
      setProjectDescription ("")  
      
    }
  return (
    <div style={style.pageBackground} >
        <div style={style.mainEnclosure} >
            
    <form style={style.formCard} onSubmit={handleSubmit}>
        <h1 style={style.heading}>Add Project</h1>
        <p>Project Name</p>
        <input 
        style={style.input}
         type="text"
         placeholder="Project Name" 
         value={projectName}
         onChange={(e) => setProjectName(e.target.value)}
         required 
         />
        <p>Project Description</p>
         <textarea 
         style={style.textarea}
         placeholder="Project Description" 
         value={projectDescription}
         onChange={(e) => setProjectDescription(e.target.value)}
         required 
         />

        <button 
        style={style.button}
        type="submit">Add Project</button>  
    </form>
    <Search  projects={projects}/>
    </div>
    </div>
  )
}

export default AddProject
