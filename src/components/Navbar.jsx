import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import travelData from "../data/travelData.json";

const images = import.meta.glob("../assets/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function getImage(imageName) {
  return images[`../assets/images/${imageName}`] || "";
}

// Timezone mapping for each destination
const timeZones = {
  "Sydney, Australia": "Australia/Sydney",
  "Melbourne, Australia": "Australia/Melbourne",
  "Tokyo, Japan": "Asia/Tokyo",
  "Kyoto, Japan": "Asia/Tokyo",
  "Rio de Janeiro, Brazil": "America/Sao_Paulo",
  "São Paulo, Brazil": "America/Sao_Paulo",
  "Angkor Wat, Cambodia": "Asia/Phnom_Penh",
  "Taj Mahal, India": "Asia/Kolkata",
  "Bora Bora, French Polynesia": "Pacific/Tahiti",
  "Copacabana Beach, Brazil": "America/Sao_Paulo",
};

// Combine all destinations into one searchable list
const locations = [
  ...travelData.countries.flatMap((country) =>
    country.cities.map((city) => ({
      ...city,
      country: country.name,
      category: "City",
    })),
  ),
  ...travelData.temples.map((temple) => ({
    ...temple,
    category: "Temple",
  })),
  ...travelData.beaches.map((beach) => ({
    ...beach,
    category: "Beach",
  })),
];

function Navbar() {
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Filter locations based on search input
  const filteredLocations = locations.filter((location) => {
    const keyword = search.toLowerCase();

    return (
      location.name.toLowerCase().includes(keyword) ||
      location.description.toLowerCase().includes(keyword) ||
      (location.country || "").toLowerCase().includes(keyword)
    );
  });

  // Format local date and time
  function getLocalDateTime(locationName) {
    const timeZone = timeZones[locationName];

    if (!timeZone) {
      return {
        date: "Timezone unavailable",
        time: "Timezone unavailable",
      };
    }

    return {
      date: new Intl.DateTimeFormat("en-GB", {
        timeZone,
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(currentTime),

      time: new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(currentTime),
    };
  }

  function clearSearch() {
    setSearch("");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-airplane-fill me-2"></i>
          Travel Explorer
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Navigation */}
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="navbar-search ms-lg-3">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>

            {/* Search Results */}
            {search.trim() && (
              <div className="search-results shadow">
                <div className="search-results-header">
                  Search Results ({filteredLocations.length})
                </div>

                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => {
                    const localTime = getLocalDateTime(location.name);

                    return (
                      <div
                        key={`${location.category}-${location.name}`}
                        className="search-result-item"
                      >
                        <div className="row g-3">
                          {/* Location Image */}
                          <div className="col-4">
                            <img
                              src={getImage(location.imageUrl)}
                              alt={location.name}
                              className="search-result-image"
                            />
                          </div>

                          {/* Location Details */}
                          <div className="col-8">
                            <span className="badge bg-primary mb-1">
                              {location.category}
                            </span>

                            <h6 className="fw-bold mb-1">{location.name}</h6>

                            <p className="text-muted small mb-2">
                              {location.description}
                            </p>

                            <div className="small mb-1">
                              <i className="bi bi-calendar3 me-2 text-primary"></i>
                              {localTime.date}
                            </div>

                            <div className="small fw-semibold">
                              <i className="bi bi-clock me-2 text-primary"></i>
                              {localTime.time} (Local Time)
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center p-4">
                    <i className="bi bi-search fs-3 text-muted"></i>
                    <p className="mb-0 mt-2">No locations found.</p>
                    <small className="text-muted">
                      Try another destination.
                    </small>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
