const VALUES = [
  {
    title: 'Clarity first',
    body: "Every screen, sentence, and shape has to earn its place. If it doesn't help someone understand or decide, it goes.",
  },
  {
    title: 'Slow craft',
    body: "Good work takes longer than expected, and that's fine. I'd rather ship something considered than something fast.",
  },
  {
    title: 'Real people',
    body: 'I design with the person on the other end in mind — their time, their context, their patience.',
  },
];

const TIMELINE = [
  { year: '2024', text: 'Went independent — started taking on design and writing projects full-time.' },
  { year: '2021', text: 'Led product design at a small team building tools for small businesses.' },
  { year: '2018', text: 'Started out as a junior designer, learning by shipping things that were wrong first.' },
];

export default function Services() {
  return (
    <section className="active">
      <div className="about-head">
        <div className="eyebrow-mark">About</div>
        <h2>Design should earn its keep — or get out of the way.</h2>
      </div>

      <div className="mission">
        <p>
          "My mission is to make everyday tools feel less like work: honest,
          unhurried design that respects people's time and attention, built one
          considered detail at a time."
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
