// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Pastikan file CSS ini ada dan berisi style yang sesuai
import useFetch from '../hooks/useFetch'; // Pastikan hook ini ada dan berfungsi

function HomePage() {
  // State untuk data "Tentang Saya"
  const [aboutData, setAboutData] = useState(null);
  const [aboutLoading, setAboutLoading] = useState(true);
  const [aboutError, setAboutError] = useState(null);

  // Fetch data "Tentang Saya"
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
        setAboutError(err.message);
      } finally {
        setAboutLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Fetch data proyek menggunakan custom hook
  const { data: projects, loading: projectsLoading, error: projectsError } = useFetch('http://localhost:8080/pjs/projects');

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Membangun Masa Depan Digital</h1>
          <p className="hero-subtitle">Jelajahi karya inovatif yang memadukan teknologi dan kreativitas dalam dimensi digital futuristik.</p>
          <a href="#projects" className="hero-button">Lihat Proyek</a>
        </div>
        <div className="hero-visual">
          {/* Contoh elemen visual bergerak futuristik (bisa berupa SVG animasi atau GIF) */}
          <img src="/images/futuristic-bg.gif" alt="Futuristic Background" className="futuristic-bg" />
        </div>
      </section>

      <section id="projects" className="featured-projects-section">
        <h2 className="section-title">Proyek Unggulan</h2>
        {projectsLoading && <p>Memuat proyek...</p>}
        {projectsError && <p>Error memuat proyek: {projectsError.message}</p>}
        {!projectsLoading && projects && Array.isArray(projects) && projects.length > 0 ? (
          <ul className="projects-list">
            {projects.map(project => (
              <li key={project.id} className="project-item">
                <h3 className="project-title">{project.title}</h3>
                {/* Pastikan data proyek dari API memiliki properti 'image' */}
                {project.image && (
                  <div className="project-image-container">
                    <img
                      src={`http://localhost:8080/uploads/projects/${project.image}`}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                )}
                <p className="project-description">{project.description?.substring(0, 150) ?? 'Tanpa deskripsi'}...</p>
                {/* Anda bisa menambahkan link detail proyek di sini */}
              </li>
            ))}
          </ul>
        ) : (
          !projectsLoading && <p>Belum ada proyek yang tersedia.</p>
        )}
        {/* Anda bisa menambahkan tombol "Lihat Semua Proyek" jika ada halaman proyek terpisah */}
        {/* <Link to="/projects" className="see-all-projects">Lihat Semua Proyek</Link> */}
      </section>

      <section id="about" className="about-me-section">
        <div className="about-me-content">
          <h2 className="section-title">Tentang Saya di Dunia Maya</h2>
          {aboutLoading && <div className="loading-spinner">Memuat data tentang...</div>}
          {aboutError && <div className="error-message">Error memuat tentang: {aboutError}</div>}
          {!aboutLoading && aboutData && (
            <>
              {aboutData.title && <h3 className="about-data-title">{aboutData.title}</h3>}
              <div className="about-me-text" dangerouslySetInnerHTML={{ __html: aboutData.content }} />
              {aboutData.updated_at && (
                <p className="about-meta">Terakhir diperbarui: {new Date(aboutData.updated_at).toLocaleDateString()}</p>
              )}
            </>
          )}
          {!aboutLoading && !aboutData && <div className="empty-message">Tidak ada data tentang.</div>}
          {/* Anda bisa menambahkan lebih banyak konten "Tentang" di sini */}
        </div>
        <div className="about-me-visual">
          {/* Bisa diisi dengan foto diri bergaya digital atau ilustrasi abstrak */}
          <div className="digital-avatar"></div>
        </div>
      </section>


      <section id="skills" className="skills-section">
        <h2 className="section-title">Keahlian</h2>
        {/* Tambahkan daftar keahlian Anda di sini */}
        <ul className="skills-list">
          <li>Pengembangan Frontend (ReactJS)</li>
          <li>Pengembangan Backend (CodeIgniter)</li>
          <li>Desain Responsif</li>
          <li>UI/UX</li>
          {/* Tambahkan keahlian lainnya */}
        </ul>
      </section>

      <section id="contact" className="contact-cta-section">
        <div className="contact-content">
          <h2 className="section-title">Tertarik Berkolaborasi?</h2>
          <p>Mari wujudkan ide-ide cemerlang Anda menjadi solusi digital yang inovatif. Hubungi saya untuk diskusi lebih lanjut!</p>
          <a href="mailto:alamatemail@anda.com" className="contact-button">Hubungi Saya</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;