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

export default function Content24() {
  const router = useRouter();

  return (
    <div>
      <div>
        <div className={styles.coverimg}>
          <div className={styles.contentcover}>
            <Navbar />
          </div>
          <Image
            src="/images/25/bg.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.buttonView}>
            <button
              className={styles.buttonPlay}
              onClick={() =>
                router.push(
                  `/guide-practice/details/${router.query.details}/play`
                )
              }
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={styles.buttonBack}
              onClick={() => router.push(`/guide-practice`)}
            >
              <i className="bi bi-arrow-left-short"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="container mx-auto pt-12 p-4 nearwhite">
          <h1 className="text-4xl">Six Healing Sound Guided Meditation</h1>
          <div className="text-base mt-4 mb-4">
            <p>
              Our emotions affect our health and wellbeing. The Six Healing
              Sounds is an ancient Qigong method that uses sound vibration to
              transform negative emotions into positive virtues. Each sound is
              associated with a different gesture, internal organ, color,
              season, and set of emotions. By focusing your inhale and exhale of
              breath, posture, visualization, and tapping into the vibration of
              each healing sound, you can relax, release stress, and clear your
              body of toxins to create long-lasting transformation.
              <br />
              This practice is helpful to all, but is particularly effective for
              those with warmer body types, namely Yin deficient and Damp heat -
              as it helps clear heat from the body’s essential organs. Do each
              sound 3, 6 or 9 times. For best effect, sit on the edge of a
              chair. Alternatively, you can lay on the floor or in bed. Do the
              movements slowly and quietly, trying to remain still and focused.
              Begin each sound by picturing its appropriate color and smiling
              from the point between the eyes.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/25/ava.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="grid grid-rows-2 gap-2 pl-6 pt-3">
              <div>
                <h1 className="text-2xl nearwhite">{username}</h1>
              </div>
            </div>
          </div>
          <p className="nearwhite pt-6 pb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem...
            <a className="text-green-700">More</a>
          </p>
          <div className="divider"></div>
          <div className="nearwhite text-sm">Sessions </div>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-2 pt-4 pb-2">
            {iconsrc.map((content, index) => (
              <div className="w-full h-12 md:h-52 relative">
                <Image src={content} layout="fill" objectFit="cover" alt="" />
              </div>
            ))}
          </div>
          <button className="greenbtn-2 mt-2">Start Practice</button>
        </div>

        <MBFooter />
        <Footer />
      </div>
    </div>
  );
}
