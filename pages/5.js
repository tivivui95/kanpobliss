import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import styles from '../styles/5p.module.css'

export default function Content5() {
    return (
        <>
            <div className={styles.contain}>
                <div className={styles.content}>
                    <Navbar />
                    <div class="container mx-auto px-4 mt-12">
                        <h1 className={styles.head1}>What is TCM Body Constitution?</h1>
                        <div className="text-sm">
                            <p className="nearwhite mt-4">
                            TCM (Traditional Chinese Medicine) is an individualized health and wellbeing system. The same food or treatment may have different effects on different body types. The TCM body type (formally known as body constitution) forms the foundation of diagnosis, disease treatment and prevention. Your body type is made up of structural and functional characteristics, temperament, adaptability to environmental changes and susceptibility to disease. It is partly genetically determined and partly acquired. 
                            </p>
                            <p className="nearwhite mt-4">
                            Your TCM body type teaches you how to make the right lifestyle choices for your own body, to restore balance within and with the surrounding environment.Though your body type is relatively stable, it can be affected by lifestyle or environmental changes and/or major life events.
                            </p>
                            <p className="nearwhite mt-4">
                            Recommendations provided in our body type assessment are not prescriptive but are intended to guide you to make daily choices more wisely for your unique body. We encourage you to embrace the change and empower you to build lasting positive habits.
                            </p>
                        </div>
                        
                        <div className={styles.startbtn}>
                        Start Assessment
                        </div>

                        <div className={styles.divider}></div>
                        <div className="nearwhite text-base">Explore more</div>
                        <div className="grid md:grid-cols-2 gap-8 pt-4 pb-4">
                            <div className="relative">
                                <h1 className={styles.cardtitle}>Body Recovery Assessment</h1>
                                <Image src='/images/5/image 2.png' layout="fill" objectFit="cover" className={styles.imgcover} />                            
                            </div>
                            <div className="relative">
                                <h1 className={styles.cardtitle}>Wellbeing Toolkit</h1>
                                <Image src='/images/5/Rectangle 15.png' layout="fill" objectFit="cover" className={styles.imgcover} />                            
                            </div>
                        </div>
                    </div>
                    <MBFooter />
                    <Footer />
                </div>
                
            </div>
        </>
    )
}