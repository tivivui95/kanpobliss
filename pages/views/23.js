import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";

import styles from '../../styles/18.module.css'

const Content18 = ({Mantra}) => {
    return (
        <>
        <div className={styles.containbox}>
        
        <Navbar />
            <div className={styles.contain}>
                <div className={styles.header}>
                    <Image src="/images/18/logo.png" width={106} height={106} objectFit="scale-down" alt="" />
                    <h1 className={styles.text}>Welcome back, Name!</h1>
                </div>

                <div className={styles.content}>
                    <div className={styles.selection}>
                        <button className={styles.button}>All</button>
                        <button className={styles.button}>Mindfulness</button>
                        <button className={styles.button}>Acupressure</button>
                        <button className={styles.button}>Qigo</button>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.block}>
                            <div>
                                <h3 className={styles.heading}>Mindfulness</h3>
                                <h3 className={styles.text}>Morning Affirmation Meditation</h3>
                            </div>
                            <h3 className={styles.price}>Jane Doe</h3>
                        </div>
                        <div className={styles.block}>
                            <div>
                                <h3 className={styles.heading}>Mindfulness</h3>
                                <h3 className={styles.text}>Morning Affirmation Meditation</h3>
                            </div>
                            <h3 className={styles.price}>Jane Doe</h3>
                        </div>
                        <div className={styles.block}>
                            <div>
                                <h3 className={styles.heading}>Mindfulness</h3>
                                <h3 className={styles.text}>Morning Affirmation Meditation</h3>
                            </div>
                            <h3 className={styles.price}>Jane Doe</h3>
                        </div>
                        <div className={styles.block}>
                            <div>
                                <h3 className={styles.heading}>Mindfulness</h3>
                                <h3 className={styles.text}>Morning Affirmation Meditation</h3>
                            </div>
                            <h3 className={styles.price}>Jane Doe</h3>
                        </div>
                    </div>
                </div>

                <span className={styles.readmore}>
                    <a className={styles.loadmore}>Load More</a>
                </span>
                <MBFooter />
                
            </div>
            
            <div className="relative">
            <Footer />
            </div>
        </div>
        
        
        </>
    )
}

export default Content18;