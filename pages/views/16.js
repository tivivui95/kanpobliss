import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { MantraList } from "../../components/quiz/quiz1data";
import { diet, lifestyle } from "../../components/welltipsdata";

import styles from '../../styles/16.module.css'

const Content16 = ({ Mantra }) => {

    const getMantraInd = () => {
        let i = 0;
        while (MantraList[i] != Mantra) i++;
        return i;
    }

    return (
        <>
        
        <div className={styles.container}>
            <Navbar />
        <div className={styles.logo}>
            <Image src={"/images/icon/" + Mantra + ".png"} layout="fill" objectFit="scale-down" alt="" />
        </div>
        
        <div className={styles.box}>
            <h1 className={styles.headerText}>Wellness Tips for</h1>
            <h1 className="nearwhite text-3xl mt-4"> &#123; {Mantra} &#125;</h1>
            <div className={styles.block}>
                <div className={styles.heading}>
                    <Image src="/images/16/Diet.png" width={22} height={24} alt="" />
                    <h3 className={styles.header}>&nbsp; Diet & Nutrition</h3>
                </div>
                <p className={styles.paragraph}>
                    {diet[getMantraInd()]}
                    <div className={styles.readmore} id="readmore">Learn More</div> </p>
            </div>
            <div className={styles.block}>
                <div className={styles.heading}>
                    {/* <img src="/images/16/LifeStyle.png" alt="" className={styles.icon}> */}
                    <Image src="/images/16/LifeStyle.png" width={23.65} height={25.17} alt="" />
                    <h3 className={styles.header}>&nbsp; Lifestyle & habits</h3>
                </div>
                <p className={styles.paragraph}>
                {lifestyle[getMantraInd()]}
                    <div className={styles.readmore} id="readmore">Learn More</div> </p>
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