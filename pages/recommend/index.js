import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/17.module.css";
import { DotButton, PrevButton, NextButton } from "../../components/EmblaCarouselButtons";
import EmblaStyles from "../../styles/embla.module.css";
import useEmblaCarousel from "embla-carousel-react";
import {useState, useCallback, useEffect} from 'react'
import Image from "next/image";

const defaultContents = [
  {
    img: "/images/17/img2.png",
    text1: "Food",
    text2: "&",
    text3: "Drinks",
    url:'/food-and-drinks'
  },
  {
    img: "/images/17/img1.png",
    text1: "Fitness",
    text2: "&",
    text3: "Movement",
    url: '/fitness'
  },

  {
    img: "/images/17/img3.png",
    text1: "Self",
    text2: "Care",
    text3: "Ritual",
    url: '/self-care'
  },
  {
    img: "/images/17/img4.png",
    text1: "Spa",
    text2: "&",
    text3: "Bodywork",
    url: '/spa'
  },
];


const EmblaCarousel = ({ slides, imgurls }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  const router = useRouter();

  return (
    <>
      <div className={EmblaStyles.embla}>
        <div className={EmblaStyles.embla__viewport} ref={viewportRef}>
          <div className={EmblaStyles.embla__container1}>
            {imgurls.map((data, index) => (
              <div className={EmblaStyles.embla__slide1} key={index}>
                <div className='h-96 relative'>
                  <div className="flex flex-col w-40 md:w-full">
                      <div className="w-full block h-56 md:h-96 relative">
                        <div className={styles.container}>
                          <div
                            className={styles.block}
                            onClick={() => router.push(data.url)}
                          >
                            <div className={styles.imageBg}>
                              <img src={data.img} alt="" className={styles.imageBg} />
                            </div>
                            <div style={{ position: "relative", textAlign: "center" }}>
                              <h3 className={styles.text}>{data.text1}</h3>
                              <h3 className={styles.text}>{data.text2}</h3>
                              <h3 className={styles.text}>{data.text3}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots float-left" style={{width: '100%'}}>
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
    </>
  );
};

const MBContent21 = ({ alldata }) => {
  return (
      <>
     <div className={styles.container}>
            {defaultContents.map((item, index) => (
                <div
                  key={index}
                  className={styles.block}
                  onClick={() => router.push(item.url)}
                >
                  <div className={styles.imageBg}>
                    <img src={item.img} alt="" className={styles.imageBg} />
                  </div>
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <h3 className={styles.text}>{item.text1}</h3>
                    <h3 className={styles.text}>{item.text2}</h3>
                    <h3 className={styles.text}>{item.text3}</h3>
                  </div>
                </div>
            ))}
          </div>
      </>
  );
};


const Recommend = ({ Name }) => {
  return (
    <>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <img className={styles.logo} src="/images/17/logo.png" />
            <div className={styles.infor}>
              <h1 className={styles.hello}>Hello, {Name}!</h1>
              <h1 className={styles.bio}>
                Ready to expand your wellness journey? Here are our
                recommendations carefully curated for the unique needs of your
                body!
              </h1>
            </div>
          </div>
          <div className={styles.choose}>Choose from one of the following</div>

          <div className='hidden md:block'>
            <EmblaCarousel imgurls={defaultContents} />
        </div>
        <div className='md:hidden'>
            <MBContent21 alldata={defaultContents} />
        </div>
        </div>
      </div>
      <MBFooter />
      <Footer />
    </>
  );
};

export default Recommend;
