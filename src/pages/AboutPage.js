import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:8080/pjs/about');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div className="loading-spinner">Memuat data...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!aboutData) return <div className="empty-message">Tidak ada data tentang</div>;

  return (
    <div className="about-container">
      <h1 className="about-title">{aboutData.title || 'Tentang Saya'}</h1>
      
      <div className="about-content" dangerouslySetInnerHTML={{ __html: aboutData.content }} />
      
      {/* Jika Anda ingin menambahkan informasi tambahan */}
      <div className="about-meta">
        <p>Terakhir diperbarui: {new Date(aboutData.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default AboutPage;