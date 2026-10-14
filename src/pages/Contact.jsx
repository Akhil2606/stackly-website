import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot"></span>
            LET'S CONNECT
          </div>

          <h1>
            Big ideas start
            <br />
            with a simple
            <br />
            <span>hello.</span>
          </h1>

          <p className="hero-description">
            Whether you have a question, a project in mind, or just want
            to say hi — we'd love to hear from you. Let's build something
            great together.
          </p>

          <div className="hero-contact-details">
            <div className="hero-detail">
              <div className="detail-icon">✉</div>
              <div>
                <span>EMAIL</span>
                <a href="mailto:hello@stackly.com">hello@stackly.com</a>
              </div>
            </div>

            <div className="hero-detail">
              <div className="detail-icon">↗</div>
              <div>
                <span>OUR APPROACH</span>
                <p>Ideas. Innovation. Impact.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-heading">
            <span className="section-label">GET IN TOUCH</span>
            <h2>Send us a message</h2>
            <p>Tell us a little about your project. We'd love to hear from you.</p>
          </div>

          {submitted && (
            <div className="success-message" role="status">
              <span>✓</span>
              Thank you! Your message was submitted in this demo.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </label>

            <label>
              Your message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your idea, project or question..."
                rows="5"
                required
              />
            </label>

            <button type="submit" className="submit-button">
              <span>Send your message</span>
              <span className="button-arrow">↗</span>
            </button>

            <p className="form-footnote">
              Your next great idea starts here.
            </p>
          </form>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-item">
          <div className="trust-icon">ϟ</div>
          <div>
            <h3>Fast Response</h3>
            <p>We're ready to hear about your ideas.</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <div>
            <h3>Trusted Partner</h3>
            <p>We value your ideas and collaboration.</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon">◇</div>
          <div>
            <h3>Let's Collaborate</h3>
            <p>Let's explore what's possible together.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;