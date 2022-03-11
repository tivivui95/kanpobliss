import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import styles from '../styles/6p.module.css'

export default function Content9() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className="container mx-auto mt-8 mb-8 grid justify-items-center relative ">
                    
                    <div className={styles.contain}>
                        <div className={styles.head2}>Tell us more about you </div>
                        <div className="grid grid-cols-2">
                            <div className={styles.inputBox}></div>
                        </div>
                        
                    </div>
                    <div className="md:mt-4">
                    <Image src='/images/6/next.png' alt="" width={420} height={40} />
                    </div>
                    
                </div>
                <Footer />
                <MBFooter />
            </div>
        </>
    )
}