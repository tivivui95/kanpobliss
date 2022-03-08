import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/11.module.css'

const Content11 = () => {

    const onChangeThing = () => {

    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.TextBox}><Image src="/images/11/Bigtext.png" alt='' width={300} height={80} /></div>
                    <div className={styles.CenterBox}>
                        <h1 className={styles.TextHello}>Hello Friend!</h1>
                        <div className={styles.inputBox}>
                            <div className={styles.Icon}><Image src="/images/11/Group 2.png" alt='' layout="fill" objectFit="scale-down" /></div>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={styles.inputBox}>
                            <div className={styles.Icon}><Image src="/images/11/Group 50.png" alt=''layout="fill" objectFit="scale-down" /></div>
                            <input type="text" placeholder="Email" />
                        </div><div className={styles.inputBox}>
                            <div className={styles.Icon}><Image src="/images/11/Password.png" alt=''layout="fill" objectFit="scale-down" /></div>
                            <input type="password" placeholder="Password" />
                        </div><div className={styles.inputBox}>
                            <div className={styles.Icon}><Image src="/images/11/Password.png" alt=''layout="fill" objectFit="scale-down" /></div>
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div className={styles.checking}>
                            <div>
                                <input className={styles.checkboxs} type="checkbox" checked="checked" onChange={() => onChangeThing()} />
                                <label className={styles.label}>&nbsp; Remember me for Login</label>
                            </div>
                            <div>
                                <input className={styles.checkboxs} type="checkbox" />
                                <label className={styles.label}>&nbsp; I agree to the Kanpobliss <a>Terms & Condtion</a> and <a>Privacy Policy</a></label>
                            </div>
                        </div>
                        <Image className={styles.signbtn} src="/images/11/Buttons.png" alt='' width={260} height={40} />
                    </div>
                    <div className={styles.footer}>
                        <div>or Sign Up Using</div>
                        <div className={styles.socialSpan}>
                            <Image src="/images/11/Facebook.png" alt='' width={46} height={46} />
                            <Image src="/images/11/Twitter.png" alt=''  width={46} height={46} />
                            <Image src="/images/11/Gmail.png" alt='' width={46} height={46} />
                        </div>
                        <div>Already has an account? <Link href='/11_2'><a className={styles.a} >Sign In</a></Link></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content11;