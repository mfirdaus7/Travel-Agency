function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
    event.target.reset();
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We would love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4">Get In Touch</h2>

            <p className="text-muted">
              Have questions about your next destination? Contact our team and
              we will be happy to assist you.
            </p>

            <div className="mb-4">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <strong>Email:</strong>
              <p>info@travelexplorer.com</p>
            </div>

            <div className="mb-4">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong>
              <p>+60 12-345 6789</p>
            </div>

            <div className="mb-4">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              <strong>Address:</strong>
              <p>Kuala Lumpur, Malaysia</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-4">Send Us a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
