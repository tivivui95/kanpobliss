import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/17.module.css'

const Content17 = ({ Name }) => {
    return (
        <>
        <Navbar />
        <div className={styles.contain}>
            
        <div class={styles.box}>
            <div class={styles.heading}>
                {/* <img class={styles.logo" src="assets17/logo.png}> */}
                <Image src="/images/17/logo.png" width={140} height={140} objectFit="scale-down" alt="" />
                <div class={styles.infor}>
                    <h1 class={styles.hello}>Hello, {Name}!</h1>
                    <h1 class={styles.bio}>Here're the recomnendations for you to live your wellness mantra</h1>
                </div>
            </div>
            <div class={styles.choose}>Choose from one of the following</div>
            <div class={styles.container}>
                {/* <img src="assets17/image 7.png" alt="" class={styles.image}>
                <img src="assets17/image 8.png" alt="" class={styles.image}>
                <img src="assets17/image 6.png" alt="" class={styles.image}>
                <img src="assets17/image 5.png" alt="" class={styles.image}> */}
                <Image src="/images/17/image 7.png" width={360} height={405} alt="" objectFit="scale-down" />
                <Image src="/images/17/image 8.png" width={360} height={405} alt="" objectFit="scale-down" />
                <Image src="/images/17/image 6.png" width={360} height={405} alt="" objectFit="scale-down" />
                <Image src="/images/17/image 5.png" width={360} height={405} alt="" objectFit="scale-down" />
            </div>
            <div class={styles.slider}>
                <div class={styles.green}></div>
                <div class={styles.white}></div>
            </div>
        </div>
        </div>
        <MBFooter />
        <Footer />
        </>
    )
}

export default Content17;