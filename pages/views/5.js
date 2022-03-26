import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import styles from '../../styles/5p.module.css';


export default function Content5({ onNav }) {
    return (
        <>
            <div className={styles.contain}>
                <div className={styles.content}>
                    <Navbar />
                    <div className="container mx-auto px-4 sm:mt-12 md:mt-0">
                        <h1 className={styles.head1}>About Body Constitution Assessment</h1>
                        <div className="text-sm md:text-base">
                            <p className="nearwhite mt-4">
                                {`TCM (Traditional Chinese Medicine) is an individualized health and wellbeing system, based on the principle that different body constitutions, i.e., types, respond differently to the same lifestyle choices or environmental factors. Your body constitution is made up of your body's structural and functional characteristics, your temperament, your body's adaptability to environmental changes and susceptibility to disease. It is partly genetically determined and partly acquired based on your lifestyle and environment. In TCM, your body constitution forms the foundation of diagnosis, disease treatment and prevention.`}
                            </p>
                            <p className="nearwhite mt-4">
                                By understanding your body constitution, you can learn how to make the right lifestyle choices for your own body, to restore balance within and with the surrounding environment. Depending on whether your body constitution is stable or not, you may be more or less affected by lifestyle, environmental changes and/or major life events.
                            </p>
                            <p className="nearwhite mt-4">
                                Our personalized wellness tips and recommendations offered in at the end of this assessment are not prescriptive but are intended to guide you in making daily choices more wisely for the unique needs of your body. We encourage you to develop greater awareness of your body as a whole, and hope to empower you to build lasting positive habits.
                            </p>
                        </div>
                        <Link href={onNav}>
                            <div className={styles.startbtn}>
                                Start Assessment
                                </div>
                        </Link>


                        <div className="divider"></div>
                        <div className="nearwhite text-base mt-3">Explore more</div>
                        <div className="grid md:grid-cols-2 md:gap-8 gap-4 pt-4 pb-4">
                            <div className="relative flex items-center justify-center" style={{ maxHeight: '185.12px' }}>
                                <h1 className={styles.cardtitle}>Body Recovery</h1>
                                <Image src='/images/5/image 2.png' layout="fill" objectFit="cover" className={styles.imgcover} />
                            </div>
                            <div className="relative flex items-center justify-center" style={{ maxHeight: '185.12px' }}>
                                <h1 className={styles.cardtitle}>Guided Practices</h1>
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