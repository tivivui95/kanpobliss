import styles from "../../styles/2245.module.css";
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import { useRouter } from "next/router";

const username = "Re:Qi";
const data = [
  {
    tag: "Acupressure",
    title: "Bedtime Wind-down Ritual",
    // img: "/images/25/Rectangle 19.png",
    img: "/images/25/img1.png",
  },
  {
    tag: "Qigong",
    title: "Six Healing Sounds",
    // img: "/images/25/Rectangle 19.png",
    img: "/images/25/img2.png",
  },
];

const iconsrc = [
  "/images/25/fb-green.svg",
  "/images/25/ins-green.svg",
  "/images/25/yt-green.svg",
];

export default function Content25() {
  const router = useRouter();

  return (
    <div>
      <div>
        <div className={styles.coverimg}>
          <div className={styles.contentcover}>
            <Navbar />
          </div>
          <Image
            src="/images/25/new_bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.buttonView}>
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
        <div className="container mx-auto pt-12 p-4">
          <div className="flex flex-row">
            {/* <div className="w-28 h-28 relative">
              <Image
                src="/images/25/ava.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div> */}
            <div style={{width:'85px', height:'85px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center', background:"#073E0D", fontSize:"20px", color:'white'}}>Re:Qi</div>

            <div className="grid grid-rows-2 gap-2 pl-6 pt-1">
              <div>
                <h1 className="text-4xl nearwhite">{username}</h1>
              </div>
              <div className="flex flex-row">
                {iconsrc.map((url, index) => (
                  <div className="w-8 h-8 relative mr-3" key={index}>
                    <Image src={url} alt="" layout="fill" objectFit="contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="nearwhite pt-6 pb-6">
          Re:Qi organizes holistic wellness retreats and experiences that offer a mindful space for leaders and change makers to step away from the frantic pace of life to reconnect with our whole self and become more aware of our surroundings. Their programs feature a wide array of awe-inspiring experiences bridging Asian healing traditions with modern wellness techniques, and curated to flow according to our inner energy and body clock.
          </p>
          <div className="divider"></div>
          <h1 className={styles.header4}>Other guided practices by Re:Qi </h1>
          <div className="grid grid-cols-2 gap-6 pt-4 pb-2">
            {data.map((content, index) => (
              <div className="relative flow-root h-72 p-4 md:p-8" key={index}>
                <div className={styles.cardtitle}>
                  <div className="float-left w-full">
                    <div className="text-sm md:text-base">{content.tag}</div>
                    <div className="w-3/4">
                      <div className="divider"></div>
                    </div>

                    <div className="text-xl md:text-2xl pt-6">
                      {content.title}
                    </div>
                  </div>
                  <div className="float-right w-full md:pr-2 pr-2 mt-56 md:mt-52 absolute">
                    <div className="text-right text-base">{username}</div>
                  </div>
                </div>
                <Image
                  src={content.img}
                  layout="fill"
                  objectFit="cover"
                  className={styles.imgcover}
                />
              </div>
            ))}
          </div>
        </div>

        <MBFooter />
        <Footer />
      </div>
    </div>
  );
}
