import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";

import styles from "../../styles/30.module.css";

const Content30 = ({ Name }) => {
  return (
    <>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <div className={styles.infor}>
              <h1 className={styles.hello}>Hello, {Name}!</h1>{" "}
              <button className={styles.button}>EDIT PROFILE</button>
            </div>
            <div className={styles.bio}>
              Here you can access your past assessment results and save
              favorites
            </div>
          </div>

          <div className={styles.choose}>Saved Recommendations</div>
          <div className={styles.recommend}>
            <div className={styles.selection}>
              <button className={styles.buttonRe}>Mindfulness</button>
              <button className={styles.buttonRe}>Acupressure</button>
              <button className={styles.buttonRe}>Qigo</button>
            </div>

            <div className={styles.slider}>
              <h2 className={styles.title}>Hotel Name</h2>
            </div>
          </div>
        </div>
      </div>
      <MBFooter />
      <Footer />
    </>
  );
};

export default Content30;
