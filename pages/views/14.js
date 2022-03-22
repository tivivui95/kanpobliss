import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { NeedsData } from "../../components/quiz/needdata";
import MantraList from "../../components/quiz/quiz1data";

import styles from '../../styles/14.module.css'

const indx = (Mantra) => {
    MantraList.map((cont, ind) => {
        if (cont == Mantra) return ind;
    })
}

const Content14 = ({ Mantra, onNext }) => {
    return (
        <>
            <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>            
                <div className={styles.box}>
                    <h3>Your body needs</h3>
                    <h1 className="text-3xl">&#123;{Mantra}&#125;</h1>
                    <div className={styles.icontop}>
                        <Image src={"/images/icon/"+ Mantra +".png"} layout='fill' objectFit="scale-down" alt="" />
                        </div>
                    <div className={styles.CenterBox}>
                        
                        
                        <div className="text-sm p-4 md:pl-20 md:pr-20">{NeedsData[indx(Mantra)]}</div>
                        
                    </div>
                    <button onClick={()=>onNext(true)} className={styles.sign_btn1}>WELLNES TIPS</button>
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