import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";
import styles from '../styles/12.module.css'
import SocialLogin from "../components/socialLogin";

const Content12 = () => {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.TextBox}><Image src="/images/12/Bigtext.png" alt='' width={300} height={80} /></div>
                    <div className="CenterBox">
                        <h1 className={styles.TextHello}>Forget password</h1>
                        <div className={styles.note}>Enter the email address associated with your account and we&apos;ll verify your profile to reset your password</div>
                        <div className={styles.inputBox}>
                            <div className={styles.Icon}>
                                <Image src="/images/12/Group 50.png" alt=''layout="fill" objectFit="scale-down" />
                            </div>
                            <input type="text" placeholder="Email" />
                        </div>

                        
                    </div>
                    <Link href='#'><a className="greenbtn -mt-7">continue</a></Link>
                    <SocialLogin />
                </div>
            </div>
            </div>
        </>
    )
}

export default Content12;