import React, { useMemo, useRef } from "react";
import styles from "./SpecialtiesCarousel.module.css";
import { images } from "../assets/images";
import uro from "../assets/services/uro.webp";
import gyne from "../assets/services/gyane.webp";
import surgery from "../assets/surgery.webp";

const fallback = images.pic3 || images.pic1;

const defaultSpecialties = [
  { key: "urology", name: "Urology", badge: "Core", img: uro|| fallback, desc: "Kidney stones, UTIs, prostate care and minimally invasive procedures." },
  { key: "gynae", name: "Gynaecology", badge: "Women Care", img: gyne || fallback, desc: "Preventive care, fertility, prenatal and advanced surgical support." },
  { key: "surgery", name: "General Surgery", badge: "Surgical", img: surgery || fallback, desc: "Day-care and major surgeries with modern OT and safety protocols." },
  { key: "labs", name: "Labs & Diagnostics", badge: "24/7", img: images.labscJpg || images.labscWebp || fallback, desc: "Comprehensive pathology and imaging with fast reporting." },
  { key: "endoscopy", name: "Endoscopy", badge: "Scope", img: fallback, desc: "Diagnostic and therapeutic endoscopic procedures with expert team." },
  { key: "pediatrics", name: "Pediatrics", badge: "Kids", img: fallback, desc: "Child health, immunization, and growth monitoring." },
  { key: "orthopedics", name: "Orthopedics", badge: "Bones", img: fallback, desc: "Fracture care, joint pain, and mobility restoration." },
  { key: "dermatology", name: "Dermatology", badge: "Skin", img: fallback, desc: "Holistic skin, hair, and nail care treatments." },
];

export default function SpecialtiesCarousel({ items }) {
  const list = useMemo(() => (items && items.length ? items : defaultSpecialties), [items]);
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`);
    const delta = card ? card.getBoundingClientRect().width + 14 : 300;
    el.scrollBy({ left: dir * delta * 2, behavior: "smooth" });
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.headerRow}>
        <h3 className={styles.title}>Our Specialties</h3>
        <button className={styles.headerCta} onClick={() => window.location.assign("/#contact")}>Enquire</button>
      </div>

      <div className={styles.track} ref={trackRef}>
        {list.map((s) => (
          <article className={styles.card} key={s.key}>
            <img className={styles.thumb} src={s.img} alt={s.name} />
            <span className={styles.badge}>{s.badge}</span>
            <h4 className={styles.name}>{s.name}</h4>
            <p className={styles.desc}>{s.desc}</p>
          </article>
        ))}
      </div>

      <button className={`${styles.sideBtn} ${styles.leftBtn}`} onClick={() => scrollByCards(-1)} aria-label="Previous">
        ◀
      </button>
      <button className={`${styles.sideBtn} ${styles.rightBtn}`} onClick={() => scrollByCards(1)} aria-label="Next">
        ▶
      </button>
    </div>
  );
}
