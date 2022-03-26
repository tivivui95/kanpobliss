import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import useInterval from "../components/useInterval";
import Main from "./main";
import { useMediaQuery } from 'react-responsive';

const Landing = ({ text, pos, imgUrl, opacity }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="nearwhite">
          <div
            style={{ width: 40 + pos * 10 + "vw", opacity: opacity }}
            className={styles.textover}
          >
            {text}
          </div>
          <div
            style={{ width: 30 + pos * 10 + "vw" }}
            className={styles.plaincover}
          ></div>
        </div>
        <div className={styles.bgover}></div>
        <div className={styles.cover} style={{ opacity: opacity }}>
          <Image
            src={imgUrl}
            alt=""
            layout="fill"
            className={styles.bg}
            objectFit="cover"
          />
        </div>
        <div className={styles.navbar}>
          <div className={pos == 0 ? styles.activenav : styles.next}></div>
          <div className={pos == 1 ? styles.activenav : styles.next}></div>
          <div className={pos == 2 ? styles.activenav : styles.next}></div>
        </div>
      </div>
    </>
  );
};

const LandingText = [
  "Expand your journey towards holistic wellbeing",
  "Discover your body's unique needs with our TCM wellness assessments",
  "Explore dining, spa, fitness & self-care rituals, curated for your needs & goals!",
];

const LandingURL = [
  "/images/landing1.png",
  "/images/landing2.png",
  "/images/landing3.png",
];

const delaySlide = 4;
const totalSlide = LandingURL.length;

const LANDING_MOBILE_URL = [
  '/images/landing1.png',
  '/images/landing2.png',
  '/images/landing3_mobile.png',
]
export default function Home() {
  const [Mstate, setMstate] = useState(0);
  const [data, setData] = useState([]);
  const [opa, setOpacity] = useState(0);

  const [load, onLoad] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  useInterval(() => {
    if (Mstate < delaySlide * totalSlide + 1) {
      setMstate(Mstate + 1);
    }
  }, 1000);

  useEffect(() => {
    onLoad(true);
    if (isStepWelcomeHome()) {
      setMstate(delaySlide * totalSlide + 1);
      setData([LandingText[totalSlide - 1], 2, isMobile ? LANDING_MOBILE_URL[totalSlide - 1] : LandingURL[totalSlide - 1]]);
      onLoad(false);
      return;
    } else {
      let currentSlide = Math.floor((Mstate - 1) / delaySlide);
      if (currentSlide < 0) {
        currentSlide = 0;
      }
      if (currentSlide > totalSlide - 1) {
        currentSlide = totalSlide - 1;
      }
      setData([
        LandingText[currentSlide],
        currentSlide,
        isMobile ? LANDING_MOBILE_URL[currentSlide] : LandingURL[currentSlide],
      ]);
      setOpacity(Mstate % delaySlide === 0 ? 0 : 1);
      if (Mstate === delaySlide * totalSlide + 1) {
        setOpacity(0);
        gotoStepWelcomeHome();
      }
    }
  }, [Mstate]);
  return (
    <>
      {load ? (
        <Landing text={data[0]} opacity={opa} pos={data[1]} imgUrl={data[2]} />
      ) : Mstate >= 12 ? (
        <Main />
      ) : null}
    </>
  );
}

const isStepWelcomeHome = () => {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const step = params.get("step");
  return step === "welcomeHome";
};

const gotoStepWelcomeHome = () => {
  var newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?step=welcomeHome";
  // window.history.pushState({ path: newUrl }, "", newUrl);
  window.location.href = newUrl;
};
