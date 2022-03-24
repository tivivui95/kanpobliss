import styles from "../../styles/2245.module.css";
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import { useRouter } from "next/router";

const username = "Jane Doe";
const data = [
  {
    tag: "Mindifulness",
    title: "Morning Affirmation Meditation",
    img: "/images/25/Rectangle 19.png",
  },
  {
    tag: "Acupressure",
    title: "Evening Tension Relief Ritual",
    img: "/images/25/Rectangle 20.png",
  },
];

const iconsrc = [
  "/images/24/1.png",
  "/images/24/2.png",
  "/images/24/3.png",
  "/images/24/4.png",
];

export default function Content25() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.coverimgfull}>
        <button
          className={styles.buttonBack}
          onClick={() => router.push(`/guide-practice`)}
        >
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <div className={styles.contentcover}>
          <Navbar />
          <div className="h-96 grid content-center nearwhite">
            <div>
              <h1 className="text-center text-4xl">
                Six Healing Sound Guided Meditation
              </h1>
            </div>
            <div className="text-center p-4 text-2xl">
              Inhale kindness Exhale anger
            </div>
          </div>
          <div className="relative w-full h-80 -mt-20">
            <Image
              src="/images/24/Group 154.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <Image src="/images/25/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
