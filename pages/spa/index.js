import styles from "../../styles/21.module.css";
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "../../components/EmblaCarouselButtons";
import EmblaStyles from "../../styles/embla.module.css";
import useInterval from "../../components/useInterval";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

const data = [
  {
    url: "/images/21/Rectangle 15.png",
    title: "Evening Tension Relief Ritual",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    url: "/images/21/Rectangle 16.png",
    title: "Relaxing bath",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    url: "/images/21/Rectangle 17.png",
    title: "Qi-moving full body massage",
    content: "Lorem ipsum dolor sit amet.",
  },
];

const EmblaCarousel = ({ imgurls }) => {
  const router = useRouter();
  
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

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

  return (
    <>
      <div className={EmblaStyles.embla}>
        <div className={EmblaStyles.embla__viewport} ref={viewportRef}>
          <div className={EmblaStyles.embla__container2}>
            {imgurls.map((data, index) => (
              <div className={EmblaStyles.embla__slide1} key={index}>
                <div className="relative">
                  <div className="flex flex-col w-40 md:w-full">
                    <div className="w-full block h-56 md:h-96 relative" style={{cursor: 'pointer'}} onClick={() => router.push(`/spa/${data._id}`)}>
                      <div className={styles.main__img}>
                        <Image
                          src={data.images.length!==0?data.images[0]:'/images/21/spa_bg.jpg'}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          className="rounded-custom"
                        />
                      </div>
                      <div className={styles.itemcontent}>
                        <h1 className="nearwhite text-2xl md:text-4xl p-4">
                          {data.name||"Name"}
                        </h1>
                        <p className="nearwhite p-4 text-base md:text-xl">
                          {data.description||"Description"}
                        </p>
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
      <div className="embla__dots float-left" style={{marginTop: "70px"}}>
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
  const router = useRouter();

  return (
    <>
      <div className="grid grid-flow-row gap-4 m-2">
        {alldata.map((data, index) => (
          <div key={index}>
            <div className="overflow-hidden relative" style={{cursor: 'pointer'}} onClick={() => router.push(`/spa/${data._id}`)}>
             
                  <div className={styles.main__img}>
                   
                    <img src={data.images.length!==0?data.images[0]:'/images/21/spa_bg.jpg'} alt="" />
                  </div>
                  <div className={styles.itemcontent}>
                    <h1 className="nearwhite text-2xl md:text-4xl md:p-4">
                    {data.name||"Name"}
                    </h1>
                    <p className="nearwhite md:p-4 text-base md:text-xl">
                    {data.description||"Description"}
                    </p>
                  </div>
                </div>
              </div>
          
        ))}
      </div>
    </>
  );
};

export default function Spa({ listSpa, listSpaDetails }) {
  const router = useRouter();

  let Mantra = "Mantra";
  
  return (
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.heading__imgfluid}>
            <Image
              src="/images/21/title-human.png"
              layout="fill"
              objectFit="scale-down"
              alt="connguoi"
              className="p-4 m-4 relative"
            />
          </div>
          <div className={styles.heading__text}>
            <div className="text-3xl pt-4">
              Best Spa treatment for <span className="tanpearl ">{Mantra}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block" >
          <EmblaCarousel imgurls={listSpaDetails} />
        </div>
        <div className="md:hidden">
          <MBContent21 alldata={listSpaDetails} />
        </div>

        <div className='float-root pb-4' style={{marginBottom: '75px', marginTop: '15px', marginRight: "80px"}}>
            <div style={{ }}>
              <div className={styles.groupButton}  >
              <Link href="#">
                    <a className={styles.btnitem} style={{marginRight: '22px', background: "#073E0D"}}>
                    CHECK SPA AVAILABILITY
                    </a>
                </Link>
                <Link href="/recommend">
                    <a className={styles.btnitem}>
                        ALL RECOMMENDATIONS
                    </a>
                </Link>
              </div>
          
            </div>        
        </div>

      </div>
      <MBFooter />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const allDishes = await fetchAPI("Spa/getAll");
  const allRes = await fetchAPI("Partner/getAll");

  if (allDishes.result.statusCode !== 200 || allRes.result.statusCode !== 200) {
    return {
      notFound: true,
    };
  }

  let _listRes = [...allRes.result.partners];
  let _listDishes = [...allDishes.result.restaurants];

  let listRes = _listRes.filter((item) => item.type === "Spa");

  let listDishes = _listDishes.map((item, index) => {
    const findIdx = listRes.filter(
      (element) => element._id === item.idResOrSpa
    );
    if (findIdx.length > 0) {
      return {
        ...item,
        nameResOrSpa: findIdx[0].name,
      };
    } else {
      return {
        ...item,
      };
    }
  });

  return {
    props: {
      listSpa: [...listRes],
      listSpaDetails: [...listDishes],
    },
  };
}
