import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/12.module.css'

const Content12 = () => {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.TextBox}><Image src="/images/12/Bigtext.png" alt='' width={300} height={80} /></div>
                    <div className={styles.CenterBox}>
                        <h1 className={styles.TextHello}>Forget password</h1>
                        <div className={styles.note}>Enter the email address associated with your account and we'll verify your profile to reset your password</div>
                        <div className={styles.inputBox}>
                            <div className={styles.Icon}>
                                <Image src="/images/12/Group 50.png" alt=''layout="fill" objectFit="scale-down" />
                            </div>
                            <input type="text" placeholder="Email" />
                        </div>

                        <Image className={styles.signbtn} src="/images/12/Buttons.png" alt='' width={260} height={40} />
                    </div>
                    <div className={styles.footer}>
                        <div>or Sign Up Using</div>
                        <div className={styles.socialSpan}>
                            <Image src="/images/11/Facebook.png" alt='' width={46} height={46} />
                            <Image src="/images/11/Twitter.png" alt=''  width={46} height={46} />
                            <Image src="/images/11/Gmail.png" alt='' width={46} height={46} />
                        </div>
                        <div>Already has an account? <a>Sign In</a></div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Content12;