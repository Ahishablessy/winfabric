import banner from '../images/banner.jpeg';

export default function Home({ onNavigate }) {
  return (
    <>
 
    <section className="active">
      
      <div className="hero">
        <div>
          {/* <div className="eyebrow-mark">Hello, I'm Jordan</div> */}
          <h2 style={{fontSize:"40px"}}>Ensuring quality and precision across every stage of fabrication.</h2>
          <p className="lede">
           Delivering professional supervision across structural fabrication, welding, surface preparation, protective coating, and painting operations. Ensuring that each activity meets approved procedures, project specifications, quality requirements, and safety standards from fabrication through final inspection.
          </p>
          <div className="btn-row">
            <button className="btn ghost" onClick={() => onNavigate('contact')}>
             Contact Me
            </button>
            <button className="btn ghost" onClick={() => onNavigate('about')}>
              Explore Services
            </button>
          </div>
          <div className="now-row">
            <div>
              <div className="label">Currently</div>
              <div className="val">Freelance design</div>
            </div>
            <div>
              <div className="label">Based in</div>
              <div className="val">Portland, OR</div>
            </div>
            <div>
              <div className="label">Open to</div>
              <div className="val">New projects</div>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 360 420" width="320" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="1" stopColor="var(--brass)" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <rect x="30" y="30" width="300" height="360" rx="6" fill="none" stroke="var(--line)" strokeWidth="2" />
            <circle cx="180" cy="170" r="90" fill="url(#g1)" />
            <path d="M70 330 Q180 250 290 330" stroke="var(--ink)" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="180" cy="170" r="90" fill="none" stroke="var(--ink)" strokeWidth="1.5" opacity="0.35" />
            <line x1="60" y1="60" x2="100" y2="60" stroke="var(--brass)" strokeWidth="3" />
            <line x1="60" y1="60" x2="60" y2="100" stroke="var(--brass)" strokeWidth="3" />
            <line x1="300" y1="360" x2="260" y2="360" stroke="var(--brass)" strokeWidth="3" />
            <line x1="300" y1="360" x2="300" y2="320" stroke="var(--brass)" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>
       <div>
        <img src={banner} />
      </div>
    </>
  );
}
