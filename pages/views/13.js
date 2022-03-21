import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";

import styles from '../../styles/13.module.css'

const Content13 = ({ Mantra }) => {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={styles.selection}>
                    <h3>Term & Condition</h3>
                    <h3>Privacy Agreement</h3>
                    <h3 className={styles.selected}>Disclaimer</h3>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.headertext}>Disclainmer</h1>
                    <p className={styles.paragraph}>THIS WEB APP DOES NOT PROVIDE MEDICAL ADVICE NOR PURPORTS TO DO SO. The contents of this website are meant purely for informational and educational purposes only. The website is not a substitute for medical advice, diagnosis, treatment or professional care. If you have or suspect you have a health problem, you should consult a doctor or a qualified healthcare provider. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.
                        <br></br>
                        Any reliance by you on the information contained in this website shall be at your own risk. Kanpobliss makes no express or implied representation or warranty regarding the completeness, accuracy, reliability or currency of the information contained in the Materials. To the fullest extent permitted by law, Kanpobliss disclaims all express or implied warranties, including but not limited to, warranties of satisfactory quality, merchantability, and fitness for a particular purpose. Kanpobliss shall not be liable for any damage or loss of any kind directly or indirectly arising from or in connection with your use or inability to access www.website.com and/or use the Materials.
                        <br></br>
                        The provision of access to other external websites is solely for your convenience and does not imply Kanpobliss&apos;s endorsement of, or affiliation or association to, the linked web sites or their operators. Kanpobliss is not responsible for the availability, accuracy or content of these external sites. Your access of any linked web site shall be at your sole risk. Kanpobliss shall not be responsible for any damage or loss to you arising from or in connection with your use of such web sites.</p>
                    <Link href={'/home?Mantra=' + Mantra}><a className={styles.resultbtn}>SEE RESULT (10S)</a></Link>
                </div>
            </div>
        </div>
        <MBFooter />
        <Footer />
        </>
        
    )
}

export default Content13;