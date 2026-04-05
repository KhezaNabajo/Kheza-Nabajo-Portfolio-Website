import { useState } from "react";
import "./styles.css";
import { useReveal } from "./script.js";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/kheza-nabajo-514a45372/" ><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/KhezaNabajo"><i className="fab fa-github"></i></a>
    </div>
  );}

function Navbar({ menuOpen, toggleMenu }) {
  return (
    <nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={function() { if (menuOpen) toggleMenu(); }}>Home</a></li>
        <li><a href="#projects" onClick={function() { if (menuOpen) toggleMenu(); }}>Project</a></li>
        <li><a href="#about" onClick={function() { if (menuOpen) toggleMenu(); }}>About Me</a></li>
        <li><a href="#contact" onClick={function() { if (menuOpen) toggleMenu(); }}>Contact</a></li>
      </ul>
    </nav>
  );}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I am</p>
        <h1>Kheza Nabajo</h1>
        <p className="hero-title">Information Technology Student | Visual Designer &amp; Network Design</p>
        <p>I am dedicated about creativity, user experience, and color theory. Currently pursuing a Diploma in Information Technology at Western Institute of Technology.</p>
        <a href="#contact" className="btn">CONTACT ME ↗</a>
        <SocialIcons />
      </div>
      <div className="hero-image">
        <img src="/assets/personalpic.png" alt="Kheza Nabajo" />
      </div>
    </section>
  );
}

function Projects() {
    const h2Visible = useReveal("projects-heading");
  const visible1  = useReveal("project-1");
  const visible2  = useReveal("project-2");
  const visible3  = useReveal("project-3");

  return (
    <section className="projects" id="projects">
      <h2 id="projects-heading" className={h2Visible ? "visible" : ""}>Featured Academic Projects</h2>

      {/* Project 1 - Portfolio Website */}
      <div id="project-1" className={visible1 ? "project visible" : "project"}>
      <div className="project-image">
          <img src="/assets/portfoliohero.png" alt="Portfolio Website" />
      </div>
      <div className="project-info">
          <h3>Portfolio Website</h3>
          <p>A space I built for myself – to show who I am and what I love to make. I focused on keeping things clean but still personal, with a warm feel that reflects my passion for design and aesthetics.</p>
      <div className="project-meta">
          <p className="project-meta-title">PROJECT INFO</p>
      <div className="meta-row">
          <span className="meta-label">Year</span>
          <span className="meta-value">2026</span>
      </div>
      <div className="meta-row">
          <span className="meta-label">Role</span>
          <span className="meta-value">Designer & Frontend Developer</span>
      </div>
      </div>
      <div className="project-links">
          <a href="https://www.figma.com/design/lfV0kNVvsJJ9C24FBukigv/Kheza-Nabajo---Portfolio?node-id=0-1&p=f&t=tZrkwy6G09pl2nXl-0">VIEW ON FIGMA ↗</a>
            <a href="#">SEE ON GITHUB</a>
      </div>
      </div>
      </div>

      {/* Project 2 - UI Challenge 1 */}
      <div id="project-2" className={visible2 ? "project visible" : "project"}>
        <div className="project-image"><img src="/assets/cart.png" alt="Fall & Bloom" /></div>
        <div className="project-info">
          <h3>UI Challenge 1</h3>
          <p>A minimal product card that brings warmth and elegance to e-commerce – featuring a seasonal fragrance concept with seamless cart functionality.</p>
        <div className="project-meta">
            <p className="project-meta-title">PROJECT INFO</p>
            <div className="meta-row">
              <span className="meta-label">Year</span>
              <span className="meta-value">2025</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Role</span>
              <span className="meta-value">Visual Designer</span>
            </div>
          </div>
          <div className="project-links">
            <a href="https://www.figma.com/design/gfghcv6ND4p5PwCTGH6iXM/KhezaNabajo_UIChallenge1?m=auto&t=YaaNtSkk2q62p1VG-6">VIEW ON FIGMA ↗</a>
          </div>
        </div>
      </div>

      {/* Project 3 - UI Challenge 2 */}
      <div id="project-3" className={visible3 ? "project visible" : "project"}>
        <div className="project-image">
          <img src="/assets/musicplayer.png" alt="Custom Audio Player" />
        </div>
        <div className="project-info">
          <h3>UI Challenge 2</h3>
          <p>Custom Audio Player. A bold audio player interface by strong typography and dynamic album visuals. The layout balances high-energy branding with clean, intuitive controls.</p>
          <div className="project-meta">
            <p className="project-meta-title">PROJECT INFO</p>
            <div className="meta-row">
              <span className="meta-label">Year</span>
              <span className="meta-value">2025</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Role</span>
              <span className="meta-value">Visual Designer</span>
            </div>
          </div>
          <div className="project-links">
            <a href="https://www.figma.com/design/4P3FF0tcYmR5Cm54n4vLti/KhezaNabajo_UIChallenge2?m=auto&t=YaaNtSkk2q62p1VG-6">VIEW ON FIGMA ↗</a>
          </div>
        </div>
      </div>

    </section>
  );
}

function About() {
  const h2Visible      = useReveal("about-heading");
  const contentVisible = useReveal("about-content");

  return (
    <section className="about" id="about">
      <h2 id="about-heading" className={h2Visible ? "about-h2 visible" : "about-h2"}>About Me</h2>
      <div id="about-content" className={contentVisible ? "about-content visible" : "about-content"}>
        <p>I am a Information Technology student at Western Institute of Technology with a deep passion for accessible design and network design, who likes to focus on accessibility when designing. I am curious about solving problems. Currently, I am also developing my technical skills in networking by designing and optimizing network infrastructures using tools like Cisco Packet Tracer.</p>
        <a href="/assets/KhezaNabajo-CV.pdf" download="KhezaNabajo-CV.pdf" className="btn">DOWNLOAD CV ↗</a>
      </div>
    </section>
  );
}

function Capabilities() {
  const h2Visible      = useReveal("capabilities-heading");
  const contentVisible = useReveal("capabilities-content");

  return (
    <section className="capabilities">
      <h2 id="capabilities-heading" className={h2Visible ? "capabilities-h2 visible" : "capabilities-h2"}>My Capabilities</h2>
      <div id="capabilities-content" className={contentVisible ? "skills-content visible" : "skills-content"}>
        <p>I am always looking to add more skills. Challenges help me grow and improve. I stay focused and keep developing my abilities.</p>
        <div className="skills">
          <span className="skill">FIGMA</span>
          <span className="skill">UI/UX DESIGN</span>
          <span className="skill">PROTOTYPING</span>
          <span className="skill">WIREFRAMING</span>
          <span className="skill">SUBNETTING</span>
          <span className="skill">TCP/IP</span>
          <span className="skill">VLAN</span>
          <span className="skill">CISCO</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const infoVisible = useReveal("contact-info");
  const formVisible = useReveal("contact-form");

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const mailto =
      "mailto:kezeyyyzz29@gmail.com?subject=Portfolio Contact from " + encodeURIComponent(name) +
      "&body=Name: " + encodeURIComponent(name) +
      "%0AEmail: " + encodeURIComponent(email) +
      "%0A%0AMessage:%0A" + encodeURIComponent(message);

    const a = document.createElement("a");
    a.href = mailto;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section className="contact" id="contact">
      <div id="contact-info" className={infoVisible ? "contact-info visible" : "contact-info"}>
        <h2>Let's get in touch.</h2>
        <p>Got a question? <a href="mailto:kezeyyyzz29@gmail.com" className="email-link">kezeyyyzz29@gmail.com</a></p>
        <p>For more info, here's my <a href="/assets/KhezaNabajo-CV.pdf" download="KhezaNabajo_CV.pdf">resume</a></p>
        <SocialIcons />
      </div>

      <form id="contact-form" className={formVisible ? "contact-form visible" : "contact-form"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" value={name} onChange={function(e) { setName(e.target.value); }} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" value={email} onChange={function(e) { setEmail(e.target.value); }} required/>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message"placeholder="Type a message"
            value={message}
            onChange={function(e) { setMessage(e.target.value); }}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Projects />
      <About />
      <Capabilities />
      <Contact />
      <footer>
        <p>&copy; 2026 Kheza Nabajo</p>
      </footer>
    </>
  );
}