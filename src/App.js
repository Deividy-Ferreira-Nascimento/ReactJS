import React, { useState, useEffect} from 'react';
import api from './services/api'
import Header from './components/Header';
import './App.css'


function App() {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        api.get('project').then(res => {
            setProjects(res.data)
        })
    }, [])

    async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);

       // setProjects([...projects, `Novo Projeto ${Date.now()}`])
        const res = await api.post('project',  { 
            title: `Novo Projeto ${Date.now()}`,
            owner: "Deividy Ferreira"
        });

        const project = res.data

        setProjects([...projects, project])
        
    }

    return (
        <>
        <Header title="homepage"/>
        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
        </>
    
    );
}

export default App;