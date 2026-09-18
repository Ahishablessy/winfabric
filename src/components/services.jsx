// const VALUES = [
//   {
//     title: 'Clarity first',
//     body: "Every screen, sentence, and shape has to earn its place. If it doesn't help someone understand or decide, it goes.",
//   },
//   {
//     title: 'Slow craft',
//     body: "Good work takes longer than expected, and that's fine. I'd rather ship something considered than something fast.",
//   },
//   {
//     title: 'Real people',
//     body: 'I design with the person on the other end in mind — their time, their context, their patience.',
//   },
// ];

// const TIMELINE = [
//   { year: '2024', text: 'Went independent — started taking on design and writing projects full-time.' },
//   { year: '2021', text: 'Led product design at a small team building tools for small businesses.' },
//   { year: '2018', text: 'Started out as a junior designer, learning by shipping things that were wrong first.' },
// ];

// export default function Services() {
//   return (
//     <section className="active">
//       <div className="about-head">
//         <div className="eyebrow-mark">About</div>
//         <h2>Design should earn its keep — or get out of the way.</h2>
//       </div>

//       <div className="mission">
//         <p>
//           "My mission is to make everyday tools feel less like work: honest,
//           unhurried design that respects people's time and attention, built one
//           considered detail at a time."
//         </p>
//       </div>

//       <div className="values">
//         {VALUES.map((v) => (
//           <div className="value" key={v.title}>
//             <h3>{v.title}</h3>
//             <p>{v.body}</p>
//           </div>
//         ))}
//       </div>

//       <div className="timeline">
//         {TIMELINE.map((row) => (
//           <div className="timeline-row" key={row.year}>
//             <div className="yr">{row.year}</div>
//             <div className="desc">{row.text}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Carousel } from 'react-bootstrap';

import fabrication from '../images/fabrication.jpg';
import welding from '../images/welding.jpg';
import painting from '../images/painting.jpg';
import surface from '../images/surface.jpg';



const SERVICES = [
  {
    title: 'Fabrication',
    img: fabrication,
    desc: 'Structural fabrication carried out with accuracy, proper measurements and quality workmanship as per project drawings and specifications.',
  },
  {
    title: 'Welding',
    img: welding,
    desc: 'Fit-up, joint preparation and welding activities supervised to ensure consistent quality, strength and compliance with approved procedures.',
  },
  {
    title: 'Surface Preparation',
    img: surface,
    desc: 'Proper cleaning, blasting and surface profile preparation carried out before coating to ensure long-lasting adhesion and protection.',
  },
  {
    title: 'Painting & Coating',
    img: painting,
    desc: 'Primer, intermediate and finishing coats applied with focus on dry film thickness (DFT), corrosion protection and final appearance.',
  },
];

export default function Services({ onNavigate }) {
  return (
    <section className="services-page">

      {/* ===== Carousel ===== */}
      <Carousel fade className="services-carousel">
        {SERVICES.map((s) => (
          <Carousel.Item key={s.title} interval={3000}>
            <img
              className="d-block w-100 carousel-img"
              src={s.img}
              alt={s.title}
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>{s.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* ===== Intro ===== */}
      <div className="services-intro">
        <div className="eyebrow-mark">Our Services</div>
        <h2>Complete Industrial Support From Fabrication to Final Finish</h2>
        <p>
          We provide reliable supervision and quality-focused support across
          every stage of structural and industrial work, from fabrication
          and welding to surface preparation and final coating.
        </p>
      </div>

      {/* ===== Service cards ===== */}
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-card-img">
              <img src={s.img} alt={s.title} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="services-cta">
        <p>Have a project that needs reliable supervision?</p>
        <button
          className="btn ghost"
          type="button"
          onClick={() => onNavigate && onNavigate('contact')}
        >
          Contact Me
        </button>
      </div>

    </section>
  );
}

