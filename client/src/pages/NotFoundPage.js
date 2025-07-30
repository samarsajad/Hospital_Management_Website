import React from "react";
import styles from "./NotFoundPage.module.css";
import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFoundPage() {
  return (
    <>
      <Navbar />

      <div className={styles.notFound}>
        <div className={styles.content}>
          <FaStethoscope className={styles.icon} />
          <h1>404 - Page Not Found</h1>
          <p className={styles.text}>
            The page you're trying to reach doesn't exist in our hospital
            system. It might have been moved, deleted, or you may have typed the
            wrong URL.
          </p>
          <Link to="/" className={styles.homeButton}>
            Return to Hospital Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
