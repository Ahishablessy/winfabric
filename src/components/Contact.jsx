// import { useState } from 'react';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Not wired to an inbox or backend yet — hook this up when you're ready
//     // (e.g. an API route, a form service, or an email provider).
//     setSubmitted(true);
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <section className="active">
//       <div className="contact-grid">
//         <div className="contact-info">
//           <div className="eyebrow-mark">Contact</div>
//           <h2>Say hello.</h2>
//           <p>
//             Whether it's a project, a question, or just to say hi — I read
//             everything myself and try to reply within a couple of days.
//           </p>
//           <div className="contact-links">
//             <a href="mailto:hello@example.com">hello@example.com</a>
//             <a href="#">linkedin.com/in/jordanrivera</a>
//             <a href="#">@jordanrivera</a>
//           </div>
//         </div>

//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="field">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="What's on your mind?"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
//               Send message
//             </button>
//             <p className="form-note">
//               This form isn't connected to an inbox yet — messages aren't sent
//               anywhere right now.
//             </p>
//             {submitted && (
//               <div className="success show">
//                 Thanks for reaching out — I'll get back to you soon.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

// 1. Go to https://formspree.io and create a free account
// 2. Create a new form, it will give you an endpoint like:
//    https://formspree.io/f/xxxxxxxx
// 3. Paste that URL below
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgljnrb';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="active">
      <div className="contact-grid">

        <div className="contact-info">
          {/* <div className="eyebrow-mark">Contact</div> */}
          <h2>Let's discuss your project.</h2>
          <p>
            Share your fabrication, welding, surface preparation or coating
            requirements with us. We review every enquiry personally and
            respond with the right next steps, usually within one business day.
          </p>

          <div className="contact-links">
          
    <a href="mailto:admin@vinfabricationworks.com">  <MdEmail />
    &nbsp;&nbsp;admin@vinfabricationworks.com</a>
            <a href="tel:+919460244204"> <IoCall />
    &nbsp;&nbsp; +91-94602 44204</a>
          </div>

          <div className="contact-meta">
            <div className="meta-row">
              <span className="meta-label">Working Hours</span>
              <span>Mon – Sat, 09:00 AM – 07:00 PM</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Response Time</span>
              <span>Within 1 business day</span>
            </div>
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
                placeholder="Your full name"
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
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your fabrication, welding, surface preparation or coating requirement — scope, location and timeline if known."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn" style={{border:"1px solid black"}}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
            </button>

            {status === 'success' && (
              <div className="success show">
                Thank you for reaching out. We've received your enquiry and
                will get back to you within one business day.
              </div>
            )}

            {status === 'error' && (
              <div className="error show">
                Something went wrong while sending your enquiry. Please try
                again, or reach us directly by phone or email.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

