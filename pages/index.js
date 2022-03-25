import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useInterval from '../components/useInterval'
import Main from './main';

const Landing = ({ text, pos, imgUrl, opacity }) => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='nearwhite'>
          <div style={{ width: (40 + pos*10) + 'vw', opacity: opacity }} className={styles.textover}>{text}</div>
          <div style={{ width: (30 + pos*10) + 'vw' }} className={styles.plaincover}></div>
        </div>
        <div className={styles.bgover}></div>
        <div className={styles.cover} style={{ opacity: opacity }}>
          <Image src={imgUrl} alt='' layout='fill' className={styles.bg} objectFit='cover' />
        </div>
        <div className={styles.navbar}>
            <div className={pos == 0 ? styles.activenav : styles.next}></div>
            <div className={pos == 1 ? styles.activenav : styles.next}></div>
            <div className={pos == 2 ? styles.activenav : styles.next}></div>
      </div>
      </div>
    </>
  )
}

const LandingText = [
  'Expand your journey towards holistic wellbeing',
  'Discover your body\'s unique needs with our TCM wellness assessments',
  'Explore dining, spa, fitness & self-care rituals, curated for your needs & goals!'
]

const LandingURL = [
  '/images/landing1.png',
  '/images/landing2.png',
  '/images/landing3.png'
]

export default function Home() {
  const [Mstate, setMstate] = useState(0);
  const [ data, setData ] = useState([]);
  const [ opa, setOpacity] = useState(0);
  
  const [ load, onFinish ] = useState(false);

  useInterval(() => setMstate(Mstate + 1), 1000);
  useEffect(() => {
    Mstate < 12 ? onFinish(true) : onFinish(false);
    Mstate <= 4 ? setData([LandingText[0], 0, LandingURL[0]]) :
    Mstate <= 8 && Mstate > 4 ? setData([LandingText[1], 1, LandingURL[1]]) :
    setData([LandingText[2], 2, LandingURL[2]]);
    Mstate == 1 ? setOpacity(1): 
    Mstate == 4 ? setOpacity(0): 
    Mstate == 5 ? setOpacity(1): 
    Mstate == 8 ? setOpacity(0): 
    Mstate == 9 ? setOpacity(1): null; 
  });
  return (
    <>
      {load ? <Landing text={data[0]} opacity={opa} pos={data[1]} imgUrl={data[2]} />: Mstate >= 12 ? 
      <Main /> : null}
    </>
  );
}
