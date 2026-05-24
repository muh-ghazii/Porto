import { useEffect, useMemo, useState } from "react";

const contactEmail = "mghazirakhmadi63@gmail.com";

const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "education", label: "Pendidikan" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "honors", label: "Penghargaan" },
  { id: "volunteer", label: "Sukarelawan" },
  { id: "contact", label: "Kontak" }
];

const stats = [
  { value: "IPK 3.91 ", label: "GPA ULM" },
  { value: "10+ ", label: "Sertifikasi" },
  { value: "6+ ", label: "Peran organisasi" },
  { value: "2 ", label: "Proyek akademik" }
];

const focusAreas = [
  {
    title: "Pengembangan Web",
    detail: "Membangun UI interaktif dengan HTML, CSS, JavaScript, dan React."
  },
  {
    title: "Data & Analitik",
    detail: "Python, SQL, serta visualisasi data untuk insight yang jelas."
  },
  {
    title: "Kepemimpinan",
    detail: "Aktif berorganisasi dan terbiasa koordinasi tim serta komunikasi."
  }
];

const skills = [
  { name: "Web Development", level: 85, tools: "HTML, CSS, JavaScript, React" },
  { name: "Pemrograman Java", level: 78, tools: "Java, OOP, struktur data dasar" },
  { name: "Data & Analitik", level: 75, tools: "Python, SQL, visualisasi data" },
  { name: "Microsoft Office", level: 80, tools: "Word, Excel, PowerPoint" },
  { name: "Kepemimpinan & Komunikasi", level: 88, tools: "Leadership, public speaking, organisasi" }
];

const projects = [
  {
    title: "UAS Pemrograman II Java",
    description:
      "Proyek UAS Pemrograman II menggunakan bahasa pemrograman Java dan konsep OOP.",
    category: "Akademik",
    tags: ["Java", "OOP"],
    metric: "Sep 2025 — Des 2025",
    link: "https://github.com/muh-ghazii"
  },
  {
    title: "UAS Pemrograman Web 1 Semester 2",
    description:
      "Proyek web menggunakan HTML, CSS, dan JavaScript dengan halaman beranda, login, register, dan pemesanan tiket pesawat.",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript"],
    metric: "Jun 2025",
    link: "https://github.com/muh-ghazii"
  }
];

const experience = [
  {
    role: "Anggota Divisi Kesehatan dan Lingkungan Komisariat ULM",
    company: "Generasi Baru Indonesia (GenBI)",
    period: "Mei 2026 — Saat ini",
    summary:
      "Kontribusi pada program kesehatan dan lingkungan GenBI ULM di Kalimantan Selatan.",
    highlights: ["Kepemimpinan", "Public speaking", "Kolaborasi lintas divisi"]
  },
  {
    role: "Ketua Umum Himpunan Mahasiswa Teknologi Informasi FT ULM",
    company: "Himpunan Mahasiswa Teknologi Informasi FT ULM (HMTI)",
    period: "Jan 2026 — Saat ini",
    summary:
      "Memimpin organisasi mahasiswa TI dan koordinasi program kerja.",
    highlights: [
      "Strategi program kerja organisasi",
      "Koordinasi internal & eksternal",
      "Pengembangan sumber daya anggota"
    ]
  },
  {
    role: "Anggota Divisi Pengembangan Sumber Daya Mahasiswa (Divisi 3)",
    company: "HMTI FT ULM",
    period: "Jan 2025 — Des 2025",
    summary:
      "Anggota Divisi PSDM serta keterlibatan hubungan masyarakat pemilihan ketua himpunan.",
    highlights: [
    ]
  },
  {
    role: "Pengurus OSIS & Organisasi Siswa",
    company: "SMAN 2 Kotabaru",
    period: "Okt 2021 — Mei 2024",
    summary:
      "Memegang beberapa peran kepemimpinan dan koordinasi kegiatan siswa.",
    highlights: [
      "Wakil Ketua Majelis Permusyawaratan Kelas (Nov 2023 — Mei 2024)",
      "Ketua E-Sport SMAN 2 Kotabaru (Okt 2022 — Nov 2023)",
      "Ketua Ekstrakurikuler PIK Remaja (Okt 2022 — Nov 2023)",
      "Koordinator OSIS Bidang Demokrasi, HAM, Pendidikan Politik, LH, Kepekaan & Toleransi Sosial (Okt 2021 — Nov 2023)"
    ]
  }
];

const education = [
  {
    school: "Universitas Lambung Mangkurat",
    program: "Information Technology",
    period: "Agu 2024 — Sekarang",
    details: ["IPK: 3.91", "Mempelajari dasar pemrograman C dan Python."]
  },
  {
    school: "SMA Negeri 2 Kotabaru",
    program: "General Studies",
    period: "2021 — Mei 2024",
    details: ["Nilai akhir: 87.33"]
  }
];

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Mar 2026"
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Mar 2025",
    valid: "Mar 2028"
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Mar 2025",
    valid: "Mar 2028"
  },
  {
    title: "Belajar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "Mar 2025",
    valid: "Mar 2028"
  },
  {
    title: "Belajar Data Sains",
    issuer: "Dicoding Indonesia",
    date: "Mar 2025",
    valid: "Mar 2028"
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Feb 2025",
    valid: "Feb 2028"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    valid: "Des 2027"
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    valid: "Des 2027"
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    valid: "Des 2027"
  },
  {
    title: "Microsoft Office",
    issuer: "Dsarea (digitalskillsarea)",
    date: "Jun 2024",
    valid: "Jul 2025"
  }
];

const honors = [
  {
    title: "Juara 2 Olimpiade Sains Nasional IPS tingkat Kabupaten/Kota",
    issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    date: "Okt 2020",
    description: "Peringkat 2 tingkat kabupaten/kota."
  },
  {
    title:
      "Peringkat 9 Olimpiade Sains Nasional IPS tingkat Provinsi Kalimantan Selatan",
    issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    date: "Okt 2020",
    description: "Peringkat 9 tingkat provinsi."
  }
];

const volunteer = [
  {
    role: "Volunteer MTQMN XVIII 2025",
    organization: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi",
    period: "Okt 2025 · 1 bulan",
    summary: "Mendukung pelaksanaan kegiatan MTQMN XVIII 2025."
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const filters = useMemo(() => {
    const categories = [...new Set(projects.map((project) => project.category))];
    return ["All", ...categories];
  }, []);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = formState.subject || "Kontak portofolio";
    const body = `Halo, saya ${formState.name || "pengunjung portofolio"}.

${formState.message || "Saya ingin berdiskusi mengenai kebutuhan atau proyek."}

Dari: ${formState.email || "nama@email.com"}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className={`page ${menuOpen ? "menu-open" : ""}`}>
      <header className="site-header">
        <div className="container nav">
          <div className="logo">
            <img
              className="logo-mark"
              src="/logo.png "
              alt="Logo Muhammad Ghazi"
            />
            <span></span>
          </div>
          <nav className="nav-drawer" aria-label="Primary">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={activeSection === link.id ? "active" : ""}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="nav-actions" />
          </nav>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <button
        className="nav-overlay"
        type="button"
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Portofolio Pribadi</p>
              <h1>
                Muhammad Ghazi Rakhmadi-TI ULM.
              </h1>
              <p className="lead">
                Berfokus pada pengembangan web, UI interaktif, dan fondasi
                software engineering. Aktif berorganisasi dan membangun proyek
                akademik yang rapi serta terstruktur.
              </p>
              <div className="cta-row">
                <a className="primary-button" href="#contact">
                  Kontak saya
                </a>
                <a className="ghost-button" href="#projects">
                  Lihat proyek
                </a>
              </div>
              <div className="status-row">
                <span className="status-pill">Mahasiswa aktif sejak 2024</span>
                <span className="status-text">
                  Banjarmasin, Kalimantan Selatan · Indonesia
                </span>
              </div>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="profile-card">
                <div className="profile-ring" />
                <img
                  className="profile-photo"
                  src="/profile.jpg"
                  alt="Muhammad Ghazi Rakhmadi"
                />
                <div className="profile-content">
                  <p className="profile-title">Kekuatan utama</p>
                  <ul>
                    <li>Kepemimpinan organisasi</li>
                    <li>Komunikasi publik</li>
                    <li>Web development & UI interaktif</li>
                  </ul>
                  <div className="profile-tags">
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>Python</span>
                  </div>
                </div>
              </div>
              <div className="floating-card">
                <p className="floating-title">Sedang mempelajari</p>
                <p className="floating-text">
                  Pengembangan Web, Pengembangan Mobile, Big Data, Machine Learning dan Cybersecurity.
                </p>
                <div className="floating-metrics">
                  <span>Dicoding</span>
                  <span>Cisco</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid-2">
            <div className="reveal">
              <h2>Profil singkat.</h2>
              <p className="body">
                Mahasiswa Teknologi Informasi ULM yang fokus pada pengembangan
                web, pemrograman Java, dan analisis data. Aktif dalam organisasi
                kampus dan terbiasa memimpin serta bekerja dalam tim.
              </p>
              <div className="focus-grid">
                {focusAreas.map((area) => (
                  <div key={area.title} className="focus-card">
                    <h3>{area.title}</h3>
                    <p>{area.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal highlight-card">
              <p className="highlight-title">Highlight</p>
              <ul>
                <li>Aktif di organisasi kampus dan sekolah.</li>
                <li>Komunikatif, terbiasa bekerja kolaboratif.</li>
                <li>Terbiasa membuat proyek akademik terstruktur.</li>
                <li>Berorientasi pada hasil dan pembelajaran berkelanjutan.</li>
              </ul>
              <div className="highlight-footer">
                <span className="chip">Mahasiswa aktif</span>
                <span className="chip">Organisasi kampus</span>
                <span className="chip">Sertifikasi aktif</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <h2>Keahlian utama.</h2>
              <p>Kombinasi kemampuan teknis dan kepemimpinan organisasi.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card reveal">
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <p>{skill.tools}</p>
                  <div className="skill-bar">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Proyek akademik.</h2>
              <p>Ringkasan proyek yang dikerjakan selama perkuliahan.</p>
            </div>
            <div className="filter-row">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-button ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <article key={project.title} className="project-card reveal">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-metric">{project.metric}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="text-link" href={project.link}>
                    Lihat repository →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <h2>Pengalaman organisasi.</h2>
              <p>Peran kepemimpinan dan kontribusi organisasi.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div key={item.role} className="timeline-card reveal">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-meta">
                      {item.company} · {item.period}
                    </p>
                    <p>{item.summary}</p>
                  </div>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Pendidikan.</h2>
              <p>Riwayat pendidikan formal.</p>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.school} className="timeline-card reveal">
                  <div>
                    <h3>{item.school}</h3>
                    <p className="timeline-meta">
                      {item.program} · {item.period}
                    </p>
                  </div>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <h2>Lisensi dan sertifikasi.</h2>
              <p>Sertifikat resmi yang sudah diselesaikan.</p>
            </div>
            <div className="projects-grid">
              {certifications.map((cert) => (
                <article key={cert.title} className="project-card reveal">
                  <div className="project-header">
                    <h3>{cert.title}</h3>
                    <span className="project-metric">{cert.date}</span>
                  </div>
                  <p>{cert.issuer}</p>
                  {cert.valid && (
                    <p className="timeline-meta">Berlaku hingga {cert.valid}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="honors" className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Gelar kehormatan dan penghargaan.</h2>
              <p>Prestasi akademik yang pernah diraih.</p>
            </div>
            <div className="timeline">
              {honors.map((item) => (
                <div key={item.title} className="timeline-card reveal">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-meta">
                      {item.issuer} · {item.date}
                    </p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <h2>Sukarelawan.</h2>
              <p>Kontribusi kegiatan volunteer.</p>
            </div>
            <div className="timeline">
              {volunteer.map((item) => (
                <div key={item.role} className="timeline-card reveal">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-meta">
                      {item.organization} · {item.period}
                    </p>
                    <p>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <h2>Hubungi saya.</h2>
              <p>
                Kirimkan pesan mengenai kebutuhan atau kolaborasi. Saya akan
                merespons secepat mungkin.
              </p>
              <div className="contact-card">
                <div>
                  <p className="contact-label">Email</p>
                  <p>{contactEmail}</p>
                </div>
                <div>
                  <p className="contact-label">Status</p>
                  <p>Terbuka untuk kolaborasi dan proyek baru</p>
                </div>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Nama
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInput}
                    placeholder="Nama lengkap"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInput}
                    placeholder="nama@email.com"
                    required
                  />
                </label>
              </div>
              <label>
                Subjek
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInput}
                  placeholder="Diskusi proyek"
                />
              </label>
              <label>
                Pesan
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInput}
                  placeholder="Ceritakan kebutuhan atau ide proyek Anda."
                  rows="5"
                />
              </label>
              <button className="primary-button" type="submit">
                Kirim pesan
              </button>
              <p className="form-note">
                Tombol ini akan membuka email Anda dengan pesan terisi otomatis.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="logo">
              <img
                className="logo-mark"
                src="/logo.png"
                alt="Logo Muhammad Ghazi"
              />
              Muhammad Ghazi
            </p>
            <p>Mahasiswa Teknologi Informasi · Universitas Lambung Mangkurat.</p>
          </div>
          <div className="footer-links">
            <a href="#home"> Beranda</a>
            <a href="#projects">Proyek</a>
            <a href="#contact">Kontak</a>
          </div>
          <div className="footer-note">
            <p>Portofolio pribadi Muhammad Ghazi Rakhmadi.</p>
            <p>© 2026 Muhammad Ghazi Rakhmadi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
