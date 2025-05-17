
import React from 'react';
import useFetch from '../hooks/useFetch';

const ProjectListPage = () => {
  console.log('ProjectListPage dirender');
  const { data: projects, loading, error } = useFetch('http://localhost:8080/pjs/projects');
  console.log('useFetch dijalankan', { loading, error, projects });

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error fetching projects: {error.message}</p>;
  if (!projects) return <p>No projects found.</p>;
  if (!Array.isArray(projects)) return <p>Data projects tidak valid.</p>;

  return (
    <div>
      <h1>Daftar Proyek</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description?.substring(0, 100) ?? 'Tanpa deskripsi'}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListPage;