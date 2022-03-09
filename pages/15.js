import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/15.module.css'

const Content15 = ({Mantra}) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <h3 className={styles.h3}>Your body needs</h3>
                    <h1 className={styles.h1}>{Mantra}</h1>
                    <div className={styles.CenterBox}>
                        {/* <img className={styles.symbol" src="/images/14/Group 214.png}> */}
                        <Image src="/images/14/Group 214.png" width={116} height={116} alt="" />
                        <div className={styles.note}>Your yin and yang are well balanced and your vital energy, qi, is flowing harmoniously throughout your body! In TCM, your body type is called Neutral. However, yin and yang are in constant flux and can be affected by your changing lifestyle and external environment. Keep up the good work and continuously ensure the balance of yin and yang. If one becomes unbalanced in the body, illness occurs...  
                        <a className={styles.learn}>Learn More</a> 
                            <br/>
                            Click on our lifestyle tips and recommendations for preventative self-care practices to help you maintain the harmony in your body!</div>
                            <button className={styles.sign_btn1}>WELLNES TIPS</button>
                        </div>
                    <button className={styles.sign_btn2}>GET RECOMMENDATIONS</button>
                </div>
                <div className={styles.blur}></div>
                <div className={styles.caution}>
                    <div className={styles.text}>According to TCM, our body is a microcosm of the universe, where all phenomena are composed of two opposite, but mutually interconnected yin and yang energies that exist in harmony.
                        <br/>
                        Yin refers to the cold, damp, passive, material, and formational aspects of qi. Yin is associated with the lower parts of the body.
                        <br/>
                        Yang refers to the hot, warm, active, immaterial, and functional aspects of qi. Yang is associated with the upper body and back. 
                        <br/>
                        Given yin and yang’s interconnectivity, the state of health is understood as states of balance or imbalance of yin and yang.</div>
                    <Image className={styles.exit_btn} src="/images/14/Group 113.png" alt="" width={24} height={24} />
                </div>
            </div>
            </div>
        </>
    )
}

export default Content15;