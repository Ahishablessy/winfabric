import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Not wired to an inbox or backend yet — hook this up when you're ready
    // (e.g. an API route, a form service, or an email provider).
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="active">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="eyebrow-mark">Contact</div>
          <h2>Say hello.</h2>
          <p>
            Whether it's a project, a question, or just to say hi — I read
            everything myself and try to reply within a couple of days.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="#">linkedin.com/in/jordanrivera</a>
            <a href="#">@jordanrivera</a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
              Send message
            </button>
            <p className="form-note">
              This form isn't connected to an inbox yet — messages aren't sent
              anywhere right now.
            </p>
            {submitted && (
              <div className="success show">
                Thanks for reaching out — I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
