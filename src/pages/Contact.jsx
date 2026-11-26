import { useState } from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Travel Consultant",
    image: "https://i.pravatar.cc/400?img=47",
    description:
      "Helps you discover the perfect destination for your next trip.",
  },
  {
    name: "Michael Chen",
    role: "Tour Coordinator",
    image: "https://i.pravatar.cc/400?img=12",
    description: "Makes sure every journey is smooth and memorable.",
  },
  {
    name: "Emily Davis",
    role: "Customer Support",
    image: "https://i.pravatar.cc/400?img=44",
    description: "Always ready to assist with your travel questions.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      destination: "",
      message: "",
    });
  }

  return (
    <>
      <section className="contact-hero text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Let's plan your next adventure.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4">
            <span className="text-primary fw-semibold">GET IN TOUCH</span>

            <h2 className="fw-bold mt-2 mb-4">
              Let's Talk About Your Next Trip
            </h2>

            <p className="text-muted mb-4">
              Have questions or need help discovering your next destination?
              Send us a message.
            </p>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-envelope-fill fs-4 text-primary"></i>
              <div>
                <h6 className="fw-bold">Email</h6>
                <p className="text-muted">hello@travelexplorer.com</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-telephone-fill fs-4 text-primary"></i>
              <div>
                <h6 className="fw-bold">Phone</h6>
                <p className="text-muted">+60 12-345 6789</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-geo-alt-fill fs-4 text-primary"></i>
              <div>
                <h6 className="fw-bold">Location</h6>
                <p className="text-muted">Kuala Lumpur, Malaysia</p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <i className="bi bi-clock-fill fs-4 text-primary"></i>
              <div>
                <h6 className="fw-bold">Business Hours</h6>
                <p className="text-muted">Monday - Friday, 9 AM - 6 PM</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                {submitted && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Your message has been submitted successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="contact-name"
                        className="form-label fw-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-email"
                        className="form-label fw-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-subject"
                        className="form-label fw-semibold"
                      >
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select subject</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Travel Information">
                          Travel Information
                        </option>
                        <option value="Destination Enquiry">
                          Destination Enquiry
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-destination"
                        className="form-label fw-semibold"
                      >
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        id="contact-destination"
                        name="destination"
                        className="form-control"
                        placeholder="e.g. Japan, Australia"
                        value={formData.destination}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="contact-message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Submit
                        <i className="bi bi-send ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">MEET OUR TEAM</span>
            <h2 className="fw-bold mt-2">The People Behind Your Journey</h2>
            <p className="text-muted">
              Our friendly team is here to make your travel experience
              unforgettable.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {teamMembers.map((member) => (
              <div className="col-md-6 col-lg-4" key={member.name}>
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fw-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted mb-0">{member.description}</p>
                  </div>

                  <div className="d-flex justify-content-center gap-3 pb-2">
                    <a
                      href="#!"
                      className="text-primary fs-5"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="#!"
                      className="text-primary fs-5"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="#!"
                      className="text-primary fs-5"
                      aria-label="LinkedIn"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
