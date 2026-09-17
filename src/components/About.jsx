const VALUES = [
  {
    title: 'Quality Driven',
    body: "We maintain a strong focus on workmanship, inspection and quality control to ensure that every activity meets the required project specifications and standards.",
  },
  {
    title: 'Safety First',
    body: "Safety is an integral part of our work. We promote safe working practices and ensure that site activities are carried out with proper procedures and awareness.",
  },
  {
    title: 'Technical Excellence',
    body: 'Our supervision covers fabrication, welding, surface preparation, coating and painting processes, with attention to technical requirements and industry best practices.',
  },
];

const TIMELINE = [
  { year: '2024', text: 'Went independent — started taking on design and writing projects full-time.' },
  { year: '2021', text: 'Led product design at a small team building tools for small businesses.' },
  { year: '2018', text: 'Started out as a junior designer, learning by shipping things that were wrong first.' },
];

export default function About() {
  return (
    <section className="active">
      <div className="about-head">
        <div className="eyebrow-mark">About</div>
        <h2>Quality, Safety and Precision in Every Stage of the Work.</h2>
      </div>

      <div className="mission">
        <p>
          "We are committed to delivering reliable supervision and inspection services across fabrication, welding, surface preparation, coating and painting activities. Our approach is built around quality workmanship, safety, technical precision and compliance with project requirements."
        </p>
         <p>
          "From fabrication and welding to protective coating and final inspection, we focus on maintaining consistent quality at every stage while supporting smooth project execution."
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
