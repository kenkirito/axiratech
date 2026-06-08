/* eslint-disable react/no-unescaped-entities */
import ClientInteractions from '@/components/ClientInteractions';

export default function Home() {
  return (
    <>
      <ClientInteractions />
      {/* ════════════════════════ NAV ════════════════════════ */}
  <header>
    <nav id="nav" aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="logo"><span>/</span>AxiraTech</a>
          <button className="hamburger" id="hamburger" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav-menu" id="nav-menu">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#techstack">Tech Stack</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="nav-cta">Start a Project</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>

  {/* ════════════════════════ HERO ════════════════════════ */}
  <section id="hero">
    <div className="orb orb-a"></div>
    <div className="orb orb-b"></div>
    <div className="container">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot"></span>Crafting Digital Excellence Since 2020</div>
          <h1 className="hero-title">
            We Build Software<br />
            <span className="grad">That Moves the World</span>
          </h1>
          <p className="hero-sub">
            AxiraTech is a full-spectrum software development agency creating scalable web platforms,
            AI-powered tools, and enterprise solutions for ambitious teams worldwide.
          </p>
          <div className="hero-ctas">
            <a href="#portfolio" className="btn-primary">View Our Work <div className="icon-circle"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>
            <a href="#contact" className="btn-secondary">Let's Talk <div className="icon-circle"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div>
            </a>
          </div>
        </div>
        <div className="hero-3d">
          <canvas id="hero-canvas"></canvas>
        </div>
      </div>
    </div>
    <div className="scroll-ind"><div className="scroll-line"></div></div>
  </section>

  {/* ════════════════════════ STATS ════════════════════════ */}
  <div className="stats-band">
    <div className="container">
      <div className="stats-grid">
        <div className="fi fi-d1"><div className="stat-num" data-t="50">0+</div><div className="stat-lbl">Projects Delivered</div></div>
        <div className="fi fi-d2"><div className="stat-num" data-t="30">0+</div><div className="stat-lbl">Happy Clients</div></div>
        <div className="fi fi-d3"><div className="stat-num" data-t="5">0+</div><div className="stat-lbl">Years of Excellence</div></div>
        <div className="fi fi-d4"><div className="stat-num" data-t="15">0+</div><div className="stat-lbl">Expert Engineers</div></div>
      </div>
    </div>
  </div>

  {/* ════════════════════════ ABOUT ════════════════════════ */}
  <section id="about" className="sec">
    <div className="container">
      <div className="about-grid">
        <div className="about-text fi">
          <div className="sec-tag about-tag"><span>/</span>About AxiraTech</div>
          <h2>Engineering the Future,<br /><span style={{"background":"var(--gradient)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","backgroundClip":"text"}}>One Line at a Time</span></h2>
          <p>AxiraTech is a premier software development agency that transforms complex business challenges into elegant, high-performing digital products. We combine cutting-edge technology with creative problem-solving.</p>
          <p>From early-stage startups to enterprise organizations, we partner with visionary teams to deliver products that scale — beautifully designed, meticulously engineered, and built to last.</p>
          <div className="about-btns">
            <a href="#services" className="btn-primary" style={{"padding":"12px 26px","fontSize":"14px"}}>Our Services</a>
            <a href="#portfolio" className="btn-secondary" style={{"padding":"12px 26px","fontSize":"14px"}}>View Portfolio</a>
          </div>
        </div>
        <div className="fi fi-d2">
          <div className="about-card">
            <div className="mini-grid">
              <div className="mini-card"><span className="mini-icon">🚀</span><div className="mini-title">Fast Delivery</div><div className="mini-sub">Agile sprints & rapid iteration</div></div>
              <div className="mini-card"><span className="mini-icon">🔒</span><div className="mini-title">Secure Code</div><div className="mini-sub">Security-first development</div></div>
              <div className="mini-card"><span className="mini-icon">📈</span><div className="mini-title">Scalable</div><div className="mini-sub">Built to grow with you</div></div>
              <div className="mini-card"><span className="mini-icon">🤝</span><div className="mini-title">Full Support</div><div className="mini-sub">24/7 post-launch support</div></div>
            </div>
            <div className="sat-block">
              <div className="sat-num">98%</div>
              <div className="sat-lbl">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ SERVICES ════════════════════════ */}
  <section id="services" className="sec">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>What We Do</div>
        <h2 className="sec-title">Services That Drive <span className="g">Results</span></h2>
        <p className="sec-sub">From concept to deployment, we provide end-to-end software development services tailored to your needs.</p>
        <div className="divider"></div>
      </div>
      <div className="svc-grid">
        <div className="svc-card fi fi-d1">
          <div className="svc-icon">🌐</div>
          <h3 className="svc-title">Web Development</h3>
          <p className="svc-desc">Full-stack web applications built with modern frameworks. From landing pages to complex SaaS platforms — performant, accessible, and beautiful.</p>
          <div className="svc-chips"><span className="chip">React</span><span className="chip">Next.js</span><span className="chip">Node.js</span><span className="chip">TypeScript</span></div>
        </div>
        <div className="svc-card fi fi-d2">
          <div className="svc-icon">📱</div>
          <h3 className="svc-title">Mobile Apps</h3>
          <p className="svc-desc">Cross-platform and native mobile applications for iOS and Android. Seamless user experiences with native performance and polished design.</p>
          <div className="svc-chips"><span className="chip">React Native</span><span className="chip">Flutter</span><span className="chip">Swift</span><span className="chip">Kotlin</span></div>
        </div>
        <div className="svc-card fi fi-d3">
          <div className="svc-icon">🤖</div>
          <h3 className="svc-title">AI & ML Solutions</h3>
          <p className="svc-desc">Intelligent systems powered by machine learning. From NLP pipelines to computer vision — we embed AI where it creates measurable business value.</p>
          <div className="svc-chips"><span className="chip">Python</span><span className="chip">TensorFlow</span><span className="chip">OpenAI</span><span className="chip">LangChain</span></div>
        </div>
        <div className="svc-card fi fi-d1">
          <div className="svc-icon">☁️</div>
          <h3 className="svc-title">Cloud & DevOps</h3>
          <p className="svc-desc">Scalable cloud infrastructure with CI/CD pipelines, containerization, and automated deployments ensuring maximum reliability and uptime.</p>
          <div className="svc-chips"><span className="chip">AWS</span><span className="chip">Docker</span><span className="chip">Kubernetes</span><span className="chip">Terraform</span></div>
        </div>
        <div className="svc-card fi fi-d2">
          <div className="svc-icon">🎨</div>
          <h3 className="svc-title">UI/UX Design</h3>
          <p className="svc-desc">Design systems and experiences that convert. Research-driven, pixel-perfect, and fully aligned with your brand identity and business goals.</p>
          <div className="svc-chips"><span className="chip">Figma</span><span className="chip">Design Systems</span><span className="chip">Prototyping</span><span className="chip">Research</span></div>
        </div>
        <div className="svc-card fi fi-d3">
          <div className="svc-icon">🔗</div>
          <h3 className="svc-title">API Development</h3>
          <p className="svc-desc">Robust, well-documented REST and GraphQL APIs. Third-party integrations, microservices architecture, and real-time systems at any scale.</p>
          <div className="svc-chips"><span className="chip">REST</span><span className="chip">GraphQL</span><span className="chip">WebSockets</span><span className="chip">gRPC</span></div>
        </div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ PORTFOLIO ════════════════════════ */}
  <section id="portfolio" className="sec">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>Our Work</div>
        <h2 className="sec-title">Projects That <span className="g">Inspire</span></h2>
        <p className="sec-sub">A curated selection of products we've built — spanning healthcare, AI, enterprise, and beyond.</p>
        <div className="divider"></div>
      </div>
      <div className="port-grid">

        {/* ITDL */}
        <div className="proj-card fi fi-d1">
          <div className="proj-info">
            <div className="proj-cat">Document Management · SaaS Platform</div>
            <h3 className="proj-title">ITDL — Smart Document Platform</h3>
            <p className="proj-desc">A comprehensive document and task management SaaS platform enabling teams to organize, collaborate, and process documents digitally with secure access control and real-time collaboration.</p>
            <div className="proj-foot">
              <div className="proj-techs"><span className="tch">React</span><span className="tch">Node.js</span><span className="tch">PostgreSQL</span></div>
              <a href="https://itdl.app/sign-in" target="_blank" rel="noopener noreferrer" className="proj-link">Visit Site <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>
            </div>
          </div>
        </div>

        {/* The Medical League */}
        <div className="proj-card fi fi-d2">
          <div className="proj-info">
            <div className="proj-cat" style={{"color":"#34d399"}}>Healthcare · Professional Network</div>
            <h3 className="proj-title">The Medical League</h3>
            <p className="proj-desc">A specialized platform connecting medical professionals, healthcare resources, and educational content — empowering the global medical community with a trusted network and knowledge hub.</p>
            <div className="proj-foot">
              <div className="proj-techs"><span className="tch">Next.js</span><span className="tch">TypeScript</span><span className="tch">MongoDB</span></div>
              <a href="https://themedicalleague.com/" target="_blank" rel="noopener noreferrer" className="proj-link">Visit Site <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>
            </div>
          </div>
        </div>

        {/* DelveInsight Market AI */}
        <div className="proj-card fi fi-d1">
          <div className="proj-info">
            <div className="proj-cat" style={{"color":"var(--purple-light)"}}>AI · Market Intelligence · Pharma</div>
            <h3 className="proj-title">DelveInsight Market AI</h3>
            <p className="proj-desc">An AI-powered pharmaceutical market intelligence marketplace delivering actionable insights, competitive analysis, and drug pipeline data — built for life sciences professionals and investors.</p>
            <div className="proj-foot">
              <div className="proj-techs"><span className="tch">React</span><span className="tch">Python</span><span className="tch">AI/ML</span></div>
              <a href="https://market.delveinsight.ai/" target="_blank" rel="noopener noreferrer" className="proj-link">Visit Site <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>
            </div>
          </div>
        </div>

        {/* DelveInsight */}
        <div className="proj-card fi fi-d2">
          <div className="proj-info">
            <div className="proj-cat" style={{"color":"#fbbf24"}}>Market Research · Healthcare Analytics</div>
            <h3 className="proj-title">DelveInsight — Global Research Platform</h3>
            <p className="proj-desc">A world-leading market research and insights platform specializing in healthcare, pharma, and life sciences — delivering in-depth reports, epidemiology studies, and competitive landscapes.</p>
            <div className="proj-foot">
              <div className="proj-techs"><span className="tch">Next.js</span><span className="tch">AWS</span><span className="tch">Elasticsearch</span></div>
              <a href="https://www.delveinsight.com/" target="_blank" rel="noopener noreferrer" className="proj-link">Visit Site <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* ════════════════════════ TECH STACK ════════════════════════ */}
  <section id="techstack">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>Technologies</div>
        <h2 className="sec-title">Our <span className="g">Tech Stack</span></h2>
        <p className="sec-sub">We work with modern, battle-tested technologies to build reliable and scalable products.</p>
      </div>
    </div>
    <div className="mtrack">
      <div className="mwrap">
        <div className="tpill"><span className="tpill-ico">⚛️</span>React</div>
        <div className="tpill"><span className="tpill-ico">▲</span>Next.js</div>
        <div className="tpill"><span className="tpill-ico">🟦</span>TypeScript</div>
        <div className="tpill"><span className="tpill-ico">🟩</span>Node.js</div>
        <div className="tpill"><span className="tpill-ico">🐍</span>Python</div>
        <div className="tpill"><span className="tpill-ico">🐘</span>PostgreSQL</div>
        <div className="tpill"><span className="tpill-ico">🍃</span>MongoDB</div>
        <div className="tpill"><span className="tpill-ico">🔴</span>Redis</div>
        <div className="tpill"><span className="tpill-ico">☁️</span>AWS</div>
        <div className="tpill"><span className="tpill-ico">🐳</span>Docker</div>
        <div className="tpill"><span className="tpill-ico">☸️</span>Kubernetes</div>
        <div className="tpill"><span className="tpill-ico">🤖</span>OpenAI</div>
        {/* duplicate for infinite loop */}
        <div className="tpill"><span className="tpill-ico">⚛️</span>React</div>
        <div className="tpill"><span className="tpill-ico">▲</span>Next.js</div>
        <div className="tpill"><span className="tpill-ico">🟦</span>TypeScript</div>
        <div className="tpill"><span className="tpill-ico">🟩</span>Node.js</div>
        <div className="tpill"><span className="tpill-ico">🐍</span>Python</div>
        <div className="tpill"><span className="tpill-ico">🐘</span>PostgreSQL</div>
        <div className="tpill"><span className="tpill-ico">🍃</span>MongoDB</div>
        <div className="tpill"><span className="tpill-ico">🔴</span>Redis</div>
        <div className="tpill"><span className="tpill-ico">☁️</span>AWS</div>
        <div className="tpill"><span className="tpill-ico">🐳</span>Docker</div>
        <div className="tpill"><span className="tpill-ico">☸️</span>Kubernetes</div>
        <div className="tpill"><span className="tpill-ico">🤖</span>OpenAI</div>
      </div>
    </div>
    <div className="mtrack">
      <div className="mwrap mwrap-r">
        <div className="tpill"><span className="tpill-ico">🎨</span>Figma</div>
        <div className="tpill"><span className="tpill-ico">📱</span>React Native</div>
        <div className="tpill"><span className="tpill-ico">💙</span>Flutter</div>
        <div className="tpill"><span className="tpill-ico">🔥</span>Firebase</div>
        <div className="tpill"><span className="tpill-ico">🌊</span>Tailwind CSS</div>
        <div className="tpill"><span className="tpill-ico">⚡</span>GraphQL</div>
        <div className="tpill"><span className="tpill-ico">🦀</span>Rust</div>
        <div className="tpill"><span className="tpill-ico">🐹</span>Go</div>
        <div className="tpill"><span className="tpill-ico">🌿</span>Terraform</div>
        <div className="tpill"><span className="tpill-ico">🔮</span>Vercel</div>
        <div className="tpill"><span className="tpill-ico">📊</span>TensorFlow</div>
        <div className="tpill"><span className="tpill-ico">🔍</span>Elasticsearch</div>
        {/* duplicate */}
        <div className="tpill"><span className="tpill-ico">🎨</span>Figma</div>
        <div className="tpill"><span className="tpill-ico">📱</span>React Native</div>
        <div className="tpill"><span className="tpill-ico">💙</span>Flutter</div>
        <div className="tpill"><span className="tpill-ico">🔥</span>Firebase</div>
        <div className="tpill"><span className="tpill-ico">🌊</span>Tailwind CSS</div>
        <div className="tpill"><span className="tpill-ico">⚡</span>GraphQL</div>
        <div className="tpill"><span className="tpill-ico">🦀</span>Rust</div>
        <div className="tpill"><span className="tpill-ico">🐹</span>Go</div>
        <div className="tpill"><span className="tpill-ico">🌿</span>Terraform</div>
        <div className="tpill"><span className="tpill-ico">🔮</span>Vercel</div>
        <div className="tpill"><span className="tpill-ico">📊</span>TensorFlow</div>
        <div className="tpill"><span className="tpill-ico">🔍</span>Elasticsearch</div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ PROCESS ════════════════════════ */}
  <section id="process" className="sec">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>How We Work</div>
        <h2 className="sec-title">Our <span className="g">Process</span></h2>
        <p className="sec-sub">A proven development methodology that delivers quality products on time and within budget.</p>
        <div className="divider"></div>
      </div>
      <div className="proc-grid">
        <div className="proc-line"></div>
        <div className="proc-card fi fi-d1">
          <div className="proc-num">01</div>
          <h3 className="proc-title">Discovery</h3>
          <p className="proc-desc">Deep-dive into your goals, users, and technical requirements. We define scope and create a clear roadmap for success.</p>
        </div>
        <div className="proc-card fi fi-d2">
          <div className="proc-num">02</div>
          <h3 className="proc-title">Design</h3>
          <p className="proc-desc">Wireframes to high-fidelity designs with iterative feedback loops to ensure the product is exactly right before we build.</p>
        </div>
        <div className="proc-card fi fi-d3">
          <div className="proc-num">03</div>
          <h3 className="proc-title">Build</h3>
          <p className="proc-desc">Agile development in 2-week sprints with continuous delivery, code reviews, and automated testing at every stage.</p>
        </div>
        <div className="proc-card fi fi-d4">
          <div className="proc-num">04</div>
          <h3 className="proc-title">Launch & Scale</h3>
          <p className="proc-desc">Smooth deployment with monitoring, performance optimization, and ongoing support to keep you growing.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ TESTIMONIALS ════════════════════════ */}
  <section id="testimonials">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>Client Love</div>
        <h2 className="sec-title">What Our <span className="g">Clients Say</span></h2>
        <div className="divider"></div>
      </div>
      <div className="testi-grid">
        <div className="testi-card fi fi-d1">
          <div className="stars">★★★★★</div>
          <p className="testi-quote">"AxiraTech transformed our vision into a world-class platform. Their attention to detail and technical depth is unmatched. Delivery was on time and the quality exceeded our expectations."</p>
          <div className="testi-author">
            <div className="testi-avatar">R</div>
            <div><div className="testi-name">Rahul Sharma</div><div className="testi-role">CTO, DelveInsight</div></div>
          </div>
        </div>
        <div className="testi-card fi fi-d2">
          <div className="stars">★★★★★</div>
          <p className="testi-quote">"Working with AxiraTech was a game-changer. They didn't just build features — they understood our healthcare domain deeply and built something our users genuinely love."</p>
          <div className="testi-author">
            <div className="testi-avatar" style={{"background":"linear-gradient(135deg,#10b981,#06b6d4)"}}>M</div>
            <div><div className="testi-name">Dr. Maya Patel</div><div className="testi-role">Founder, The Medical League</div></div>
          </div>
        </div>
        <div className="testi-card fi fi-d3">
          <div className="stars">★★★★★</div>
          <p className="testi-quote">"The ITDL platform they built handles thousands of documents daily with zero downtime. Their DevOps setup is bulletproof and their code is clean, maintainable, and well-documented."</p>
          <div className="testi-author">
            <div className="testi-avatar" style={{"background":"linear-gradient(135deg,#f59e0b,#ef4444)"}}>A</div>
            <div><div className="testi-name">Alex Thompson</div><div className="testi-role">Product Lead, ITDL</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ CONTACT ════════════════════════ */}
  <section id="contact">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>Get In Touch</div>
        <h2 className="sec-title">Start Your <span className="g">Next Project</span></h2>
        <p className="sec-sub">Ready to build something extraordinary? Let's talk about your vision.</p>
        <div className="divider"></div>
      </div>
      <div className="contact-wrap fi">
        <div className="contact-card">
          <div className="contact-inner">
            <div className="contact-left">
              <h3>Let's Build Together</h3>
              <p>Whether you have a detailed brief or just a rough idea, we'd love to hear from you. Our team typically responds within 24 hours.</p>
              <div className="cinfo">
                <div className="cinfo-row">
                  <div className="cinfo-ico p">📧</div>
                  <div><div className="cinfo-lbl">Email</div><div className="cinfo-val">reyansh@axiratech.in</div></div>
                </div>
                <div className="cinfo-row">
                  <div className="cinfo-ico c">📅</div>
                  <div><div className="cinfo-lbl">Schedule a Call</div><div className="cinfo-val">Book a free 30-min discovery call</div></div>
                </div>
                <div className="cinfo-row">
                  <div className="cinfo-ico g">📍</div>
                  <div><div className="cinfo-lbl">Location</div><div className="cinfo-val">Remote-first · Worldwide</div></div>
                </div>
              </div>
            </div>
            <div>
              <form id="contactForm">
                <div className="fld"><label>Your Name</label><input name="name" type="text" placeholder="John Smith" required /></div>
                <div className="fld"><label>Email Address</label><input name="email" type="email" placeholder="john@company.com" required /></div>
                <div className="fld">
                  <label>Project Type</label>
                  <select name="service">
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI / ML Solution</option>
                    <option>UI/UX Design</option>
                    <option>Cloud & DevOps</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fld"><label>About Your Project</label><textarea name="message" placeholder="Describe your project, goals, and timeline..." required></textarea></div>
                <button type="submit" className="btn-primary" style={{"width":"100%","justifyContent":"center","marginTop":"8px"}} id="submitBtn">Send Message <div className="icon-circle"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ════════════════════════ FAQ ════════════════════════ */}
  <section id="faq" className="sec">
    <div className="container">
      <div className="sec-hdr fi">
        <div className="sec-tag"><span>/</span>FAQ</div>
        <h2 className="sec-title">Frequently Asked <span className="g">Questions</span></h2>
        <p className="sec-sub">Everything you need to know before starting a project with us.</p>
        <div className="divider"></div>
      </div>
      <div className="faq-list fi">
        <details className="faq-item">
          <summary className="faq-q">How long does it take to build a custom web application?</summary>
          <p className="faq-a">Timelines vary by complexity. A typical MVP takes 6–12 weeks; full-scale enterprise platforms can take 4–6 months. We work in 2-week agile sprints with continuous delivery, so you see progress from week one.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-q">What technologies does AxiraTech specialize in?</summary>
          <p className="faq-a">We specialize in React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, Docker, and Kubernetes. We also build AI-powered solutions using OpenAI, LangChain, and TensorFlow.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-q">Do you work with startups or only established companies?</summary>
          <p className="faq-a">Both. We partner with early-stage startups who need an experienced technical co-founder as well as enterprise teams scaling existing products. Our engagement models are flexible to match your stage.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-q">How do I start a project with AxiraTech?</summary>
          <p className="faq-a">Fill out our contact form or email reyansh@axiratech.in. We will schedule a free 30-minute discovery call to understand your goals, then provide a detailed proposal within 48 hours.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-q">Do you provide post-launch support and maintenance?</summary>
          <p className="faq-a">Yes. Every project includes 30 days of post-launch support. We also offer ongoing maintenance, monitoring, and feature development retainers for teams who need a long-term technical partner.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-q">Can AxiraTech integrate AI into my existing product?</summary>
          <p className="faq-a">Absolutely. We specialize in embedding AI — including LLMs, computer vision, and predictive analytics — into existing products and workflows to create measurable business value.</p>
        </details>
      </div>
    </div>
  </section>

  </main>

  {/* ════════════════════════ FOOTER ════════════════════════ */}
  <footer>
    <div className="container">
      <div className="foot-grid">
        <div>
          <a href="#" className="logo" style={{"fontSize":"26px"}}>AxiraTech</a>
          <p className="foot-brand-desc">Building world-class software for ambitious teams. From idea to impact — we're with you every step of the way.</p>
          <div className="socials">
            <a href="#" className="social" title="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="social" title="Twitter / X">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="social" title="GitHub">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="#" className="social" title="Dribbble">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.519 0 10-4.48 10-10S17.519 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">AI & ML</a></li>
            <li><a href="#services">Cloud & DevOps</a></li>
            <li><a href="#services">UI/UX Design</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#techstack">Tech Stack</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Portfolio</h4>
          <ul>
            <li><a href="https://itdl.app/sign-in" target="_blank" rel="noopener noreferrer">ITDL</a></li>
            <li><a href="https://themedicalleague.com/" target="_blank" rel="noopener noreferrer">The Medical League</a></li>
            <li><a href="https://market.delveinsight.ai/" target="_blank" rel="noopener noreferrer">DelveInsight Market</a></li>
            <li><a href="https://www.delveinsight.com/" target="_blank" rel="noopener noreferrer">DelveInsight</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 AxiraTech. All rights reserved.</span>
        <div className="foot-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
