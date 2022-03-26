import styles from '../../styles/21.module.css'
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "../../components/EmblaCarouselButtons";
import EmblaStyles from "../../styles/embla.module.css";
import useInterval from "../../components/useInterval";
const data = [
    {
        url: '/images/21/img1.png',
        title: '30mins Cycling',
        content: 'Lorem ipsum dolor sit amet.'
    },
    {
        url: '/images/21/img2.png',
        title: '30mins HIIT',
        content: 'Lorem ipsum dolor sit amet.'
    },
    {
        url: '/images/21/img3.png',
        title: '45mins Yoga',
        content: 'Lorem ipsum dolor sit amet.'
    },
]

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
  
    return (
      <>
        <div className={EmblaStyles.embla}>
          <div className={EmblaStyles.embla__viewport} ref={viewportRef}>
            <div className={EmblaStyles.embla__container2}>
              {imgurls.map((data, index) => (
                <div className={EmblaStyles.embla__slide1} key={index}>
                  <div className='relative'>
                    <div className="flex flex-col w-40 md:w-full" style={{height: '100% !important'}}>
                        <div className="w-full block h-56 md:h-96 relative" style={{height: '100% !important'}}>
                            <div className={styles.main__img}>
                                <Image src={data.url} alt='' layout="fill" objectFit="cover" className="rounded-custom" />
                            </div>
                            <div className={styles.itemcontent}>
                                <h1 className='nearwhite text-2xl md:text-4xl p-4'>{data.title}</h1>
                                <p className='nearwhite p-4 text-base md:text-xl'>{data.content}</p>
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
    return (
        <>
        <div className='grid grid-flow-row gap-4 m-2'>
            {alldata.map((data, index) => (
                <div key={index}>
                  <div className='overflow-hidden h-56 relative'>
                    <div className="flex flex-col w-full md:w-full">
                        <div className="w-full block h-56 relative">
                            <div className={styles.main__img}>
                                <Image src={data.url} alt='' layout="fill" objectFit="cover" className="rounded-custom" />
                            </div>
                            <div className={styles.itemcontent}>
                                <h1 className='nearwhite text-2xl md:text-4xl md:p-4'>{data.title}</h1>
                                <p className='nearwhite md:p-4 text-base md:text-xl'>{data.content}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        </>
    )
}

function MainContent21({ Mantra }) {
    return (
        <>
        <div className={styles.bg}>
            
        <Navbar />
        <div className={styles.container}>
            <div className={styles.heading}>
            <div className={styles.heading__imgfluid}>
                <Image src="/images/21/title-human.png" layout='fill' objectFit='scale-down' alt="connguoi" className='p-4 m-4 relative' />
            </div>
            <div className={styles.heading__text}>
                <div className='text-3xl pt-4'>Perfect Fitness & Workout for <span className='tanpearl '>{Mantra}</span></div>
            </div>
        </div>
        <div className='hidden md:block'>
            <EmblaCarousel slides={[0, 1, 2]} imgurls={data} />
        </div>
        <div className='md:hidden'>
            <MBContent21 alldata={data} />
        </div>

        <div className='float-root pb-4'>
            <div style={{ }}>
              <div style={{display:'flex', marginTop: "70px", marginBottom: "50px", display:'flex', justifyContent: "end"}} >
              <Link href="#">
                    <a className={styles.btnitem} style={{marginRight: '22px', background: "#073E0D"}}>
                    CHECK GYM AVAILABILITY
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
        </>
    )
}

export default function Fitness() {
    return (
        <MainContent21 Mantra='Mantra' />
    )
}