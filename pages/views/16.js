import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";

import styles from '../../styles/16.module.css'

const Content16 = ({ Mantra }) => {
    return (
        <>
        
        <div className={styles.container}>
            <Navbar />
        <div className={styles.logo}>
            <Image src="/images/16/logo.png" layout="fill" objectFit="scale-down" alt="" />
        </div>
        
        <div className={styles.box}>
            <h1 className={styles.headerText}>Wellness Tips for {Mantra}</h1>
            <div className={styles.block}>
                <div className={styles.heading}>
                    {/* <img src="/images/16/Diet.png" alt="" className={styles.icon}> */}
                    <Image src="/images/16/Diet.png" width={22} height={24} alt="" />
                    <h3 className={styles.header}>&nbsp; Diet & Nutrition</h3>
                </div>
                <p className={styles.paragraph}>You can enjoy all kinds of food in moderation! Opt for nutrient-filled vegetables, good quality meat, some good fats. Limit sugar for occasional treats only! We recommend eating well 80% of the time and leave the 20% for indulgence foods like pasta or glazed donuts.  
                    <br/>
                    Superfoods and trendy food doesn&apos;t mean that it can be taken in large quantities every single day. A little a day will suffice... <div className={styles.readmore} id="readmore">Learn More</div> </p>
            </div>
            <div className={styles.block}>
                <div className={styles.heading}>
                    {/* <img src="/images/16/LifeStyle.png" alt="" className={styles.icon}> */}
                    <Image src="/images/16/LifeStyle.png" width={23.65} height={25.17} alt="" />
                    <h3 className={styles.header}>&nbsp; Lifestyle & habits</h3>
                </div>
                <p className={styles.paragraph}>Go for a walk after dinner instead of binging on Netflix. Opt for LIIT (Light Intensity Interval Training) when you&apos;re tired. Join that HIIT class you&apos;ve always wanted to try. 
                    <br/>
                    Be in touch with your energy level and do the movements you feel like. Exercise should make you refreshed (and a little tired!) but not exhausted... <div className={styles.readmore} id="readmore">Learn More</div> </p>
            </div>
            <button className={styles.recommend}>Get Recommendation</button>
        </div>
        <MBFooter />
        <Footer />
        </div>
        </>
    )
}

export default Content16;