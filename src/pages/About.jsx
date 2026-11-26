function About() {
  const values = [
    {
      icon: "bi-globe-americas",
      title: "Explore the World",
      description:
        "We help travelers discover amazing destinations and unique experiences around the world.",
    },
    {
      icon: "bi-heart",
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do. Your happiness is our priority.",
    },
    {
      icon: "bi-shield-check",
      title: "Travel with Confidence",
      description:
        "We aim to provide reliable travel information and memorable travel experiences.",
    },
  ];

  return (
    <>
      {/* About Hero */}
      <section className="about-hero text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Making your travel dreams a reality.</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900"
              alt="Travel adventure"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-lg-6">
            <span className="text-primary fw-semibold">WHO WE ARE</span>

            <h2 className="fw-bold mt-2 mb-3">Your Trusted Travel Companion</h2>

            <p className="text-muted">
              Travel Explorer is a travel discovery platform dedicated to
              helping people explore the world.
            </p>

            <p className="text-muted">
              From vibrant cities and historical landmarks to beautiful tropical
              beaches, we bring inspiration and travel information together to
              help you plan your next adventure.
            </p>

            <p className="text-muted">
              Our goal is to make discovering destinations simple, enjoyable and
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="bi bi-bullseye fs-1 text-primary"></i>

                  <h3 className="fw-bold mt-3">Our Mission</h3>

                  <p className="text-muted mb-0">
                    To inspire people to explore the world by providing
                    accessible destination information and travel inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="bi bi-eye fs-1 text-primary"></i>

                  <h3 className="fw-bold mt-3">Our Vision</h3>

                  <p className="text-muted mb-0">
                    To become a trusted platform where travelers discover
                    destinations and create unforgettable memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">WHAT WE BELIEVE IN</span>

          <h2 className="fw-bold mt-2">Our Core Values</h2>
        </div>

        <div className="row g-4">
          {values.map((value, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="mb-3">
                  <i className={`bi ${value.icon} fs-1 text-primary`}></i>
                </div>

                <h5 className="fw-bold">{value.title}</h5>

                <p className="text-muted mb-0">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Start Your Journey With Us</h2>

          <p className="lead">
            The world is waiting. Let's explore it together.
          </p>

          <a href="/contact" className="btn btn-warning btn-lg mt-3">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
