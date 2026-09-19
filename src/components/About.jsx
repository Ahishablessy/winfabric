// const VALUES = [
//   {
//     title: 'Quality Driven',
//     body: "We maintain a quality-focused approach throughout fabrication, welding, surface preparation, coating and painting activities.",
//   },
//   {
//     title: 'Safety First',
//     body: "We recognize safety as an essential part of every industrial operation and support safe working practices throughout project execution.",
//   },
//   {
//     title: 'Precision',
//     body: 'Attention to detail in inspection, measurements, surface preparation and coating application helps achieve consistent and reliable results.',
//   },
//   {
//     title: 'Reliability',
//     body: 'We work closely with clients, contractors and site teams to support smooth coordination and timely completion of activities.',
//   },
// ];

// const TIMELINE = [
//   { year: 'Fabrication', text: 'Supporting structural fabrication with accuracy, quality workmanship and project requirements.' },
//   { year: 'Welding', text: 'Supervising fit-up, joint preparation and welding activities to ensure consistent quality.' },
//   { year: 'Surface Preparation', text: 'Ensuring proper cleaning, blasting and surface profile before coating application.' },
//   { year: 'Coating', text: 'Monitoring protective coating application for effective corrosion protection and performance.' },
//   { year: 'Painting', text: 'Supervising primer, intermediate and finishing coats with focus on DFT and final appearance.' },
// ];

// export default function About() {
//   return (
//     <section className="active">
//       {/* <div className="about-head"> */}
//         {/* <div className="eyebrow-mark">About</div> */}
//         <h2>Built on Experience. Driven by Quality. Focused on Reliable Execution.</h2>
//       {/* </div> */}

//       <div className="mission">
//         <p>
//           "To deliver dependable industrial supervision and quality-focused services through experience, technical attention and responsible execution.”"
//         </p>
      
//       </div>
// <div>
//        <div className="eyebrow-mark">About Us</div>
// <p>We are an independent and growing industrial services company led by Lenin D, Owner, with over 7 years of experience in fabrication, welding, surface preparation, coating and painting activities.</p>
// <p>Our focus is to provide reliable supervision and quality-oriented support for industrial and structural works. With hands-on industry experience and a strong understanding of site requirements, we aim to deliver workmanship that meets project specifications, safety requirements and quality expectations.</p>
// <p>As a growing company, we believe that every project is an opportunity to build long-term relationships through professional execution, transparency, attention to detail and consistent quality.</p>
// </div>
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


const VALUES = [
  {
    title: 'Quality Driven',
    body: "We maintain a quality-focused approach throughout fabrication, welding, surface preparation, coating and painting activities.",
  },
  {
    title: 'Safety First',
    body: "We recognize safety as an essential part of every industrial operation and support safe working practices throughout project execution.",
  },
  {
    title: 'Precision',
    body: 'Attention to detail in inspection, measurements, surface preparation and coating application helps achieve consistent and reliable results.',
  },
  {
    title: 'Reliability',
    body: 'We work closely with clients, contractors and site teams to support smooth coordination and timely completion of activities.',
  },
];

const TIMELINE = [
  { year: 'Fabrication', text: 'Supporting structural fabrication with accuracy, quality workmanship and project requirements.' },
  { year: 'Welding', text: 'Supervising fit-up, joint preparation and welding activities to ensure consistent quality.' },
  { year: 'Surface Preparation', text: 'Ensuring proper cleaning, blasting and surface profile before coating application.' },
  { year: 'Coating', text: 'Monitoring protective coating application for effective corrosion protection and performance.' },
  { year: 'Painting', text: 'Supervising primer, intermediate and finishing coats with focus on DFT and final appearance.' },
];

export default function About() {
  return (
    <section className="active">

      <h2>Built on Experience. Driven by Quality. Focused on Reliable Execution.</h2>

      <div className="mission">
        <p>
          "To deliver dependable industrial supervision and quality-focused services through experience, technical attention and responsible execution."
        </p>
      </div>

      <div>
        <div className="eyebrow-mark">About Us</div>
        <p>
          We are an independent and growing industrial services company led by
          Lenin D, Owner, with over 4 years of experience in fabrication,
          welding, surface preparation, coating and painting activities.
        </p>
        <p>
          Our focus is to provide reliable supervision and quality-oriented
          support for industrial and structural works. With hands-on industry
          experience and a strong understanding of site requirements, we aim
          to deliver workmanship that meets project specifications, safety
          requirements and quality expectations.
        </p>
        <p>
          As a growing company, we believe that every project is an
          opportunity to build long-term relationships through professional
          execution, transparency, attention to detail and consistent quality.
        </p>
      </div>

      <div className="values">
        {VALUES.map((v) => (
          <div className="value" key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div>

      <div className="timeline">
        {TIMELINE.map((row) => (
          <div className="timeline-row" key={row.year}>
            <div className="yr">{row.year}</div>
            <div className="desc">{row.text}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
