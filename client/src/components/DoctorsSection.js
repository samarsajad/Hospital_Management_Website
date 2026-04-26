import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DoctorSection.module.css";
import doctorImg from "../assets/pic5.webp";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGraduationCap,
  FaAward,
  FaClock,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function DoctorsSection() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = React.useState([]);
  const [specializations, setSpecializations] = React.useState([]);
  const [activeSpec, setActiveSpec] = React.useState("All");
  const trackRef = React.useRef(null);

  const scrollByAmount = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild;
    const gap = 16;
    const delta = first ? first.getBoundingClientRect().width + gap : 320;
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  React.useEffect(() => {
    // Fetch doctors from backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        const specs = Array.from(new Set((data || []).map((d) => d.specialization).filter(Boolean)));
        setSpecializations(["All", ...specs]);
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  return (
    <section className={styles.doctorsSection} id="doctors">
      <h1>
        <i
          className="fa-solid fa-user-doctor"
          style={{ fontSize: "50px", padding: "10px" }}
        ></i>
        Meet Our Doctors
      </h1>
      {doctors.length === 0 ? (
        <p>No doctors available.</p>
      ) : (
        <>
          {/* Filter Tabs */}
          <div className={styles.filterBar}>
            {specializations.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveSpec(s)}
                className={`${styles.filterChip} ${activeSpec === s ? styles.active : ""}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Carousel of filtered doctors */}
          <div className={styles.slider}>
            <button
              className={`${styles.navButton} ${styles.navLeft}`}
              aria-label="Previous"
              onClick={() => scrollByAmount(-1)}
              type="button"
            >
              <FaChevronLeft />
            </button>
            <div className={styles.track} ref={trackRef}>
              {doctors
                .filter((d) => activeSpec === "All" || d.specialization === activeSpec)
                .map((doc) => (
                  <div className={styles.slide} key={doc._id}>
                    <div className={styles.doctorWrapper}>
                      <div className={styles.doctorCard}>
                        <div className={styles.cardInner}>
                          <div className={styles.cardFront}>
                            <img src={doctorImg} alt={doc.name} />
                            <h2 className={styles.doctorName}>{doc.name}</h2>
                            <div className={styles.frontInfo}>
                              <span className={styles.specialty}>{doc.specialization}</span>
                              <span className={styles.timeChip}>
                                <FaClock className={styles.chipIcon} />
                                {Array.isArray(doc.availableSlots) && doc.availableSlots.length > 0
                                  ? doc.availableSlots[0]
                                  : "N/A"}
                              </span>
                              <span className={styles.contactChip}>
                                <FaPhone className={styles.chipIcon} />
                                {doc?.contact?.phone || doc?.contact?.mobile || doc?.contact?.number || "N/A"}
                              </span>
                            </div>
                          </div>
                          <div className={styles.cardBack}>
                            <div>
                              <h4>
                                <FaGraduationCap /> Qualifications
                              </h4>
                              <p className={styles.details}>{doc.qualifications ? doc.qualifications.join(", ") : "N/A"}</p>
                              <hr />
                              <h4>
                                <FaAward /> Hospital
                              </h4>
                              <p className={styles.details}>{doc.hospital || "N/A"}</p>
                              <hr />
                              <div className={styles.socialIcons}>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                  <FaLinkedin />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                  <FaInstagram />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                  <FaTwitter />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.bookNowBtn}
                        onClick={() => navigate("/services/checkup")}
                      >
                        Book Now
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button
              className={`${styles.navButton} ${styles.navRight}`}
              aria-label="Next"
              onClick={() => scrollByAmount(1)}
              type="button"
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default DoctorsSection;
