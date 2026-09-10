import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rehannegi27@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="app-wrapper">
      {/* ===================================================================
          System Masthead & Navigation Bar
          =================================================================== */}
      <header className="system-masthead" role="banner">
        <a href="#hero" className="masthead-tag" aria-label="Ishaneswar Negi home">
          <span className="status-indicator" aria-hidden="true"></span>
          <span>ISHANESWAR NEGI // APEX_SYS_01</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#achievements" className="nav-link">Achievements</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* ===================================================================
            1. Hero Section
            =================================================================== */}
        <section id="hero" className="section section-hero" aria-labelledby="hero-name-heading">
          <div className="hero-content">
            <div className="section-telemetry">// 01. IDENTITY &amp; TELEMETRY</div>

            <div className="hero-identity">
              <h1 id="hero-name-heading" className="headline-xl hero-name">
                Ishaneswar Negi
              </h1>
              <div className="hero-role">
                Aspiring Software Engineer &bull; B.Tech 1st Year (AI &amp; ML)
              </div>
            </div>

            <p className="hero-headline">
              I build software and explore intelligent technologies that solve real-world problems.
            </p>

            <p className="hero-description">
              Focused on building web applications and exploring AI-powered solutions while continuously learning through new challenges. Grounded in low-level computing fundamentals with active passion for intelligent autonomous systems.
            </p>

            <div className="btn-group">
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                <span>View My Projects</span>
                <span aria-hidden="true">&darr;</span>
              </a>
              <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
                <span>Contact Coordinates</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="hero-telemetry-bar" aria-label="Candidate quick metadata">
              <div className="telemetry-pill">
                LOCATION: <strong>India</strong>
              </div>
              <div className="telemetry-pill">
                INSTITUTION: <strong>GIET University Gunupur</strong>
              </div>
              <div className="telemetry-pill">
                FOCUS: <strong>AI &amp; ML &bull; Software Engineering</strong>
              </div>
              <div className="telemetry-pill">
                STATUS: <strong>Looking For Internships</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. About Section
            =================================================================== */}
        <section id="about" className="section" aria-labelledby="about-heading">
          <div className="section-header">
            <div className="section-telemetry">// 02. BACKGROUND &amp; ENGINEERING MINDSET</div>
            <h2 id="about-heading" className="headline-lg section-title">About Me</h2>
            <p className="section-subtitle">
              Curious, confident, honest, and builder-focused. Driven by disciplined problem solving and continuous technical growth.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-narrative">
              <p>
                I am a first-year Computer Software Engineering student specializing in <strong>Artificial Intelligence &amp; Machine Learning</strong> at <strong>GIET University Gunupur</strong>. My technical journey began with core algorithmic programming in <strong>C</strong>, understanding how memory, pointers, and computational architectures operate under the hood.
              </p>
              <p>
                From low-level systems, I expanded into <strong>Python</strong> for intelligent algorithms, autonomous agents, and simulation environments, alongside modern <strong>Web Development</strong> (HTML5, CSS3, JavaScript, React) to engineer accessible, high-performance interfaces.
              </p>
              <p>
                I prioritize tangible evidence of building over inflated claims. Rather than asserting mastery over everything, I focus on what I have built, what I am currently learning, and how I can solve complex engineering challenges through iterative feedback loops.
              </p>
            </div>

            <div className="about-pillars">
              <div className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-index">// 01</span>
                  <h3 className="pillar-title">Building Software</h3>
                </div>
                <p className="pillar-desc">
                  Writing clean, modular code with structural integrity and deliberate architecture.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-index">// 02</span>
                  <h3 className="pillar-title">Exploring Intelligent Systems</h3>
                </div>
                <p className="pillar-desc">
                  Experimenting with neural network topologies, autonomous agents, and heuristic optimizations.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-index">// 03</span>
                  <h3 className="pillar-title">Solving Real-World Problems</h3>
                </div>
                <p className="pillar-desc">
                  Grounding technology in tangible utility rather than theoretical hype or buzzwords.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-index">// 04</span>
                  <h3 className="pillar-title">Continuous Learning</h3>
                </div>
                <p className="pillar-desc">
                  Actively pursuing verified industry simulations, certifications, and technical experimentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. Skills Section
            =================================================================== */}
        <section id="skills" className="section" aria-labelledby="skills-heading">
          <div className="section-header">
            <div className="section-telemetry">// 03. TECHNICAL TAXONOMY</div>
            <h2 id="skills-heading" className="headline-lg section-title">Skills &amp; Proficiencies</h2>
            <p className="section-subtitle">
              Scannable overview of languages, frameworks, and tools actively utilized or being explored.
            </p>
          </div>

          <div className="skills-container">
            {/* Category A: Core Languages */}
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">Core Languages</h3>
                <span className="category-code">// GROUP_01</span>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-name">
                    <span>C</span>
                    <span className="skill-status">PROFICIENT</span>
                  </div>
                  <div className="skill-desc">Memory management, pointers, and foundational data structures.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Python</span>
                    <span className="skill-status">PROFICIENT</span>
                  </div>
                  <div className="skill-desc">Algorithms, simulation scripts, Pygame, AI agent architectures.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>HTML5 &amp; CSS3</span>
                    <span className="skill-status">PROFICIENT</span>
                  </div>
                  <div className="skill-desc">Semantic document models, CSS custom properties, responsive grids.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>JavaScript (ES6+)</span>
                    <span className="skill-status">WORKING</span>
                  </div>
                  <div className="skill-desc">Component logic, DOM interactions, and modern React development.</div>
                </div>
              </div>
            </div>

            {/* Category B: AI & Intelligent Systems */}
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">AI &amp; Intelligent Tech</h3>
                <span className="category-code">// GROUP_02</span>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Autonomous Agents</span>
                    <span className="skill-status">ACTIVE EXPLORATION</span>
                  </div>
                  <div className="skill-desc">Real-time dynamic decision-making and environment simulation.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Machine Learning Basics</span>
                    <span className="skill-status">FOUNDATIONAL</span>
                  </div>
                  <div className="skill-desc">Supervised models, neuroevolution concepts, and algorithmic heuristics.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Pygame Simulation</span>
                    <span className="skill-status">APPLIED</span>
                  </div>
                  <div className="skill-desc">Game loop architectures, collision physics, dynamic obstacle rendering.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Data Analytics Basics</span>
                    <span className="skill-status">FOUNDATIONAL</span>
                  </div>
                  <div className="skill-desc">Data processing and telemetry exploration (Deloitte simulation).</div>
                </div>
              </div>
            </div>

            {/* Category C: Tools & Environment */}
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">Engineering Environment</h3>
                <span className="category-code">// GROUP_03</span>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Git &amp; GitHub</span>
                    <span className="skill-status">DAILY WORKFLOW</span>
                  </div>
                  <div className="skill-desc">Version control, branching, repository management, and tracking.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>VS Code</span>
                    <span className="skill-status">PRIMARY IDE</span>
                  </div>
                  <div className="skill-desc">Debugging, extensions, terminal integration, and development setup.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Vite &amp; Node CLI</span>
                    <span className="skill-status">TOOLING</span>
                  </div>
                  <div className="skill-desc">Fast bundle compilation, dev server telemetry, and dependency audits.</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Distributed Systems</span>
                    <span className="skill-status">CERTIFIED</span>
                  </div>
                  <div className="skill-desc">Hashgraph developer fundamentals and decentralized consensus.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. Projects Section (MAX VISUAL PROMINENCE PER PRD & DESIGN.MD)
            =================================================================== */}
        <section id="projects" className="section section-projects" aria-labelledby="projects-heading">
          <div className="section-header">
            <div className="section-telemetry projects-telemetry">
              // 04. PROJECTS [PRIMARY EVIDENCE OF BUILDING &amp; PROBLEM SOLVING]
            </div>
            <h2 id="projects-heading" className="headline-lg section-title project-prominent-heading">
              Featured Engineering Projects
              <span className="prominence-badge">CORE EVIDENCE</span>
            </h2>
            <p className="section-subtitle">
              Tangible demonstrations of software architecture, intelligent algorithms, and precision development.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Featured AI Simulation */}
            <article className="project-card project-card-featured" aria-labelledby="proj-flappy-title">
              <div className="card-header-zone">
                <div className="card-id-telemetry">// PROJECT_01 &bull; AUTONOMOUS_AI</div>
                <span className="card-type-tag">MACHINE LEARNING SIMULATION</span>
              </div>
              <div className="card-body">
                <h3 id="proj-flappy-title" className="project-title">
                  Autonomous Flappy Bird AI Agent
                </h3>
                <div className="project-tagline">
                  Real-time neuroevolution and collision evasion in dynamic game simulation
                </div>

                <div className="project-spec-zone">
                  <div className="spec-block">
                    <strong>Problem Statement</strong>
                    Autonomous agents need to calculate dynamic spatial coordinates (pipe gaps, vertical velocity, gravity) in real time to make instantaneous flap decisions without human intervention.
                  </div>
                  <div className="spec-block">
                    <strong>Architecture &amp; Contribution</strong>
                    Architected an interactive simulation in Python using Pygame. Implemented a neural evaluation loop where agents receive environmental sensor inputs (distance to next pipe, vertical clearance) to optimize fitness scores across generations.
                  </div>
                  <div className="spec-block">
                    <strong>Outcome &amp; Verification</strong>
                    Agents progress from random initial flaps to continuous, flawless trajectory navigation through hundreds of obstacle iterations.
                  </div>
                </div>

                <div className="tech-stack-container" aria-label="Technologies used">
                  <span className="tech-chip">Python</span>
                  <span className="tech-chip">Pygame</span>
                  <span className="tech-chip">Neural Networks</span>
                  <span className="tech-chip">Neuroevolution</span>
                  <span className="tech-chip">Autonomous Agents</span>
                </div>
              </div>
              <div className="card-actions">
                <span className="project-status-note">LOCAL REPO // VERIFIED WORKING BUILD</span>
                <span className="label-md">PYTHON 3.11</span>
              </div>
            </article>

            {/* Project 2: Apex Engineering Portfolio */}
            <article className="project-card" aria-labelledby="proj-portfolio-title">
              <div className="card-header-zone">
                <div className="card-id-telemetry">// PROJECT_02 &bull; SYSTEMS_WEB</div>
                <span className="card-type-tag">FRONTEND ARCHITECTURE</span>
              </div>
              <div className="card-body">
                <h3 id="proj-portfolio-title" className="project-title">
                  Apex Engineering Portfolio System
                </h3>
                <div className="project-tagline">
                  High-performance technical profile built with custom Vanilla CSS design tokens
                </div>

                <div className="project-spec-zone">
                  <div className="spec-block">
                    <strong>Problem Statement</strong>
                    Modern portfolios often suffer from template bloat, inconsistent contrast, and non-deterministic CSS frameworks that obscure technical capability.
                  </div>
                  <div className="spec-block">
                    <strong>Architecture &amp; Contribution</strong>
                    Designed and built a 12-column architectural blueprint layout with strict 0px border-radius, WCAG AA 4.5:1 accessible contrast, and zero third-party CSS runtime dependencies.
                  </div>
                  <div className="spec-block">
                    <strong>Outcome &amp; Verification</strong>
                    Instant initial load times, high-contrast readable telemetry, and thumb-reachable mobile interactive controls.
                  </div>
                </div>

                <div className="tech-stack-container" aria-label="Technologies used">
                  <span className="tech-chip">React 19</span>
                  <span className="tech-chip">Vite</span>
                  <span className="tech-chip">Vanilla CSS3</span>
                  <span className="tech-chip">Design Tokens</span>
                  <span className="tech-chip">WCAG AA a11y</span>
                </div>
              </div>
              <div className="card-actions">
                <span className="project-status-note">PRODUCTION READY</span>
                <span className="label-md">HTTP://LOCALHOST:8080</span>
              </div>
            </article>

            {/* Project 3: Algorithmic Systems Lab */}
            <article className="project-card" aria-labelledby="proj-c-systems-title">
              <div className="card-header-zone">
                <div className="card-id-telemetry">// PROJECT_03 &bull; SYSTEMS_FOUNDATION</div>
                <span className="card-type-tag">LOW-LEVEL COMPUTING</span>
              </div>
              <div className="card-body">
                <h3 id="proj-c-systems-title" className="project-title">
                  Algorithmic Systems &amp; Data Structures Lab
                </h3>
                <div className="project-tagline">
                  Low-level memory management and data structure implementations in C
                </div>

                <div className="project-spec-zone">
                  <div className="spec-block">
                    <strong>Problem Statement</strong>
                    High-level languages abstract away memory allocation and hardware constraints, leading to suboptimal algorithmic intuition.
                  </div>
                  <div className="spec-block">
                    <strong>Architecture &amp; Contribution</strong>
                    Engineered C programs implementing pointers, linked nodes, memory allocation (`malloc`/`free`), and sorting heuristics with focus on spatial and temporal complexity.
                  </div>
                  <div className="spec-block">
                    <strong>Outcome &amp; Verification</strong>
                    Deepened low-level systems comprehension, providing the foundation for complex AI data pipelines and systems engineering.
                  </div>
                </div>

                <div className="tech-stack-container" aria-label="Technologies used">
                  <span className="tech-chip">C</span>
                  <span className="tech-chip">GCC Compiler</span>
                  <span className="tech-chip">Data Structures</span>
                  <span className="tech-chip">Memory Management</span>
                  <span className="tech-chip">Algorithms</span>
                </div>
              </div>
              <div className="card-actions">
                <span className="project-status-note">ACADEMIC LAB VERIFIED</span>
                <span className="label-md">GIET LAB 3RD SEM</span>
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================================
            5. Education Section
            =================================================================== */}
        <section id="education" className="section" aria-labelledby="education-heading">
          <div className="section-header">
            <div className="section-telemetry">// 05. ACADEMIC FOUNDATION</div>
            <h2 id="education-heading" className="headline-lg section-title">Education &amp; Learning Journey</h2>
            <p className="section-subtitle">
              Formal academic curriculum supporting continuous technical investigation and engineering rigor.
            </p>
          </div>

          <div className="timeline-list">
            {/* University */}
            <article className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-institution">GIET University Gunupur</h3>
                <span className="timeline-duration">JULY 2025 &ndash; JULY 2029 (EXPECTED)</span>
              </div>
              <div className="timeline-degree">
                Bachelor of Technology (B.Tech) &bull; Computer Software Engineering (AI &amp; ML)
              </div>
              <p className="timeline-focus">
                Coursework and practical lab work focused on software development fundamentals, discrete computational structures, C programming, and emerging artificial intelligence paradigms.
              </p>
            </article>

            {/* Higher Secondary */}
            <article className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-institution">
                  Pragati Science Higher Secondary School, Bhawanipatna
                </h3>
                <span className="timeline-duration">Kalahandi, Odisha &bull; 12TH STANDARD</span>
              </div>
              <div className="timeline-degree">
                Higher Secondary Certificate &bull; Science Stream (Physics, Chemistry, Mathematics)
              </div>
              <p className="timeline-focus">
                Rigorous scientific and mathematical foundation providing the mathematical prerequisites for algorithmic computing and machine learning.
              </p>
            </article>

            {/* Secondary */}
            <article className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-institution">Saraswati Vidhya Mandir</h3>
                <span className="timeline-duration">10TH STANDARD</span>
              </div>
              <div className="timeline-degree">
                Secondary School Certificate &bull; Core Academics
              </div>
              <p className="timeline-focus">
                Foundational analytical discipline and academic merit.
              </p>
            </article>
          </div>
        </section>

        {/* ===================================================================
            6. Achievements Section
            =================================================================== */}
        <section id="achievements" className="section" aria-labelledby="achievements-heading">
          <div className="section-header">
            <div className="section-telemetry">// 06. VERIFIED CREDENTIALS &amp; SIMULATIONS</div>
            <h2 id="achievements-heading" className="headline-lg section-title">Achievements &amp; Certifications</h2>
            <p className="section-subtitle">
              Verified certifications and industry engineering simulations demonstrating cross-disciplinary exploration.
            </p>
          </div>

          <div className="cert-grid">
            {/* Cert 1 */}
            <article className="cert-card">
              <span className="cert-issuer">HEDERA HASHGRAPH</span>
              <h3 className="cert-name">Hedera Certified Developer Associate (HCDA)</h3>
              <p className="cert-domain">
                Smart contract mechanics, consensus timestamping, tokenization, and distributed ledger architecture.
              </p>
            </article>

            {/* Cert 2 */}
            <article className="cert-card">
              <span className="cert-issuer">HEDERA HASHGRAPH</span>
              <h3 className="cert-name">Hedera Certified Foundation (HCF)</h3>
              <p className="cert-domain">
                Decentralized network architecture, Hashgraph consensus algorithms, and web3 fundamentals.
              </p>
            </article>

            {/* Cert 3 */}
            <article className="cert-card">
              <span className="cert-issuer">TCS iON</span>
              <h3 className="cert-name">TCS iON Yuva AI Certification</h3>
              <p className="cert-domain">
                Artificial intelligence concepts, intelligent systems design, and predictive data applications.
              </p>
            </article>

            {/* Cert 4 */}
            <article className="cert-card">
              <span className="cert-issuer">DELOITTE AUSTRALIA &bull; FORAGE</span>
              <h3 className="cert-name">Cyber Security Job Simulation</h3>
              <p className="cert-domain">
                Security risk assessment, vulnerability scanning methodology, and role-based access management.
              </p>
            </article>

            {/* Cert 5 */}
            <article className="cert-card">
              <span className="cert-issuer">DELOITTE AUSTRALIA &bull; FORAGE</span>
              <h3 className="cert-name">Data Analytics Job Simulation</h3>
              <p className="cert-domain">
                Telemetry data interpretation, pipeline anomaly detection, and data-backed business insights.
              </p>
            </article>

            {/* Cert 6 */}
            <article className="cert-card">
              <span className="cert-issuer">SKYSCANNER &bull; FORAGE</span>
              <h3 className="cert-name">Front-End Software Engineering Simulation</h3>
              <p className="cert-domain">
                Responsive component engineering, web accessibility compliance, and design token integration.
              </p>
            </article>
          </div>
        </section>

        {/* ===================================================================
            7. Contact Section
            =================================================================== */}
        <section id="contact" className="section" aria-labelledby="contact-heading">
          <div className="section-header">
            <div className="section-telemetry">// 07. DIRECT COMMUNICATION CHANNELS</div>
            <h2 id="contact-heading" className="headline-lg section-title">Contact &amp; Collaboration</h2>
            <p className="section-subtitle">
              Straightforward communication channels for recruitment, internship opportunities, and collaborative software projects.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <h3 className="contact-headline">Ready to build something impactful?</h3>
              <p className="contact-desc">
                I am actively seeking software engineering internships and technical collaborative projects. Whether you are discussing potential roles, exploring intelligent systems, or reviewing code, feel free to get in touch.
              </p>
              
              <div className="btn-group">
                <a 
                  href="mailto:rehannegi27@gmail.com" 
                  className="btn btn-primary"
                  id="contact-email-btn"
                >
                  <span>Open Email Client</span>
                  <span aria-hidden="true">&#9993;</span>
                </a>
                <button 
                  type="button" 
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  id="copy-email-btn"
                  aria-live="polite"
                >
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                  <span aria-hidden="true">&#128203;</span>
                </button>
              </div>
            </div>

            <div className="contact-channels">
              {/* Channel 1: Email */}
              <div className="contact-channel-card">
                <div className="channel-details">
                  <span className="channel-label">Direct Email</span>
                  <a href="mailto:rehannegi27@gmail.com" className="channel-value">
                    rehannegi27@gmail.com
                  </a>
                  {copied && <span className="copy-feedback-badge">// ADDRESS COPIED TO CLIPBOARD</span>}
                </div>
                <button 
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-ghost"
                  title="Copy email to clipboard"
                  aria-label="Copy email address to clipboard"
                >
                  <span>Copy</span>
                </button>
              </div>

              {/* Channel 2: LinkedIn */}
              <div className="contact-channel-card">
                <div className="channel-details">
                  <span className="channel-label">LinkedIn Profile</span>
                  <a 
                    href="https://www.linkedin.com/in/ishaneswar-negi-473619379" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    linkedin.com/in/ishaneswar-negi-473619379
                  </a>
                </div>
                <a 
                  href="https://www.linkedin.com/in/ishaneswar-negi-473619379" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  aria-label="Visit LinkedIn profile in new tab"
                >
                  <span>Visit &rarr;</span>
                </a>
              </div>

              {/* Channel 3: Location / Coordinates */}
              <div className="contact-channel-card">
                <div className="channel-details">
                  <span className="channel-label">Location / Availability</span>
                  <span className="channel-value">India &bull; Remote &amp; On-Site Ready</span>
                </div>
                <span className="status-chip telemetry-pill">OPEN FOR WORK</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================
          Blueprint Footer Bar
          =================================================================== */}
      <footer className="system-footer" role="contentinfo">
        <div className="footer-telemetry">
          <span>// ISHANESWAR NEGI &bull; APEX ENGINEERING PORTFOLIO</span>
        </div>
        <div className="footer-telemetry">
          <span>REACT 19 &bull; VITE &bull; VANILLA CSS3 &bull; WCAG AA 4.5:1</span>
        </div>
      </footer>
    </div>
  );
}

