import travelData from "../data/travelData.json";

const images = import.meta.glob("../assets/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function getImage(imageName) {
  return images[`../assets/images/${imageName}`] || "";
}

// Reusable component for destination cards
function DestinationCard({ name, imageUrl, description }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0 destination-card">
        <img
          src={getImage(imageUrl)}
          className="card-img-top destination-image"
          alt={name}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{name}</h5>

          <p className="card-text text-muted">{description}</p>

          <a href="/contact" className="btn btn-outline-primary mt-auto">
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-7 py-5">
              <span className="badge bg-warning text-dark mb-3">
                Discover The World
              </span>

              <h1 className="display-3 fw-bold">
                Discover Your Next Adventure
              </h1>

              <p className="lead mt-3">
                Explore beautiful destinations around the world and create
                unforgettable memories with us.
              </p>

              <a href="#destinations" className="btn btn-warning btn-lg mt-3">
                Explore Destinations
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countries and Cities */}
      <section id="destinations" className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">EXPLORE THE WORLD</span>

          <h2 className="fw-bold mt-2">Popular Destinations</h2>

          <p className="text-muted">
            Discover amazing cities around the world.
          </p>
        </div>

        {travelData.countries.map((country) => (
          <div key={country.id} className="mb-5">
            <h3 className="fw-bold mb-4">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              {country.name}
            </h3>

            <div className="row g-4">
              {country.cities.map((city) => (
                <DestinationCard
                  key={city.name}
                  name={city.name}
                  imageUrl={city.imageUrl}
                  description={city.description}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Temples Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">HISTORY & CULTURE</span>

            <h2 className="fw-bold mt-2">Famous Temples</h2>

            <p className="text-muted">
              Explore beautiful historical landmarks.
            </p>
          </div>

          <div className="row g-4">
            {travelData.temples.map((temple) => (
              <DestinationCard
                key={temple.id}
                name={temple.name}
                imageUrl={temple.imageUrl}
                description={temple.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beaches Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">PARADISE AWAITS</span>

          <h2 className="fw-bold mt-2">Beautiful Beaches</h2>

          <p className="text-muted">
            Relax and enjoy some of the world's most beautiful beaches.
          </p>
        </div>

        <div className="row g-4">
          {travelData.beaches.map((beach) => (
            <DestinationCard
              key={beach.id}
              name={beach.name}
              imageUrl={beach.imageUrl}
              description={beach.description}
            />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready for Your Next Adventure?</h2>

          <p className="lead">Let us help you plan your perfect holiday.</p>

          <a href="/contact" className="btn btn-warning btn-lg mt-3">
            Contact Us
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
