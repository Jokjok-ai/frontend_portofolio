import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Detail Proyek: {slug}</h1>
      {/* Detail proyek akan ditampilkan di sini */}
    </div>
  );
};

export default ProjectDetailPage;