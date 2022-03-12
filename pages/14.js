import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/14.module.css'

const Content14 = ({ Mantra }) => {
    return (
        <>
            <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>            
                <div className={styles.box}>
                    <h3>Your body needs</h3>
                    <h1>{Mantra}</h1>
                    <div className={styles.CenterBox}>
                        {/* <img className={styles.symbol} src="/images/14/Group 214.png}> */}
                        <Image src="/images/14/Group 214.png" width={116} height={116} alt="" />
                        <div className="text-sm p-4 mb-20 md:pl-20 md:pr-20 md:mb-24">Your yin and yang are well balanced and your vital energy, qi, is flowing harmoniously throughout your body! In TCM, your body type is called Neutral. However, yin and yang are in constant flux and can be affected by your changing lifestyle and external environment. Keep up the good work and continuously ensure the balance of yin and yang. If one becomes unbalanced in the body, illness occurs...  
                        <a className={styles.learn}>Learn More</a> 
                            <br/>
                            Click on our lifestyle tips and recommendations for preventative self-care practices to help you maintain the harmony in your body!</div>
                        
                    </div>
                    <button className={styles.sign_btn1}>WELLNES TIPS</button>
                    <button className={styles.sign_btn2}>GET RECOMMENDATIONS</button>
                </div>
            </div>
            <MBFooter />
            </div>
            
            <Footer />
        </>
    )
}
const Mantra = 'Mantra';
export default Content14;