import Image from "next/image";
import Link from "next/link";

import styles from '../styles/11.module.css'
import { useState } from "react";

export default function SocialLogin({ Mantra }) {
    return (
        <>
        <div className={styles.footer}>
                        <div className={styles.signUpUsing}>or sign in using</div>
                        <div className={styles.socialSpan}>
                            <span className={styles.spaceRight}>
                                <Image src="/images/11/Facebook.png" alt='' width={46} height={46} />
                            </span>
                            <span className={styles.spaceLeft}>
                                <Image src="/images/11/Gmail.png" alt='' width={46} height={46} />
                            </span>
                        </div>
                        <div className="nearwhite">Don’t have an account yet, <Link href={'/signup?Mantra=' + Mantra}><a className={styles.a}>Sign Up</a></Link></div>
                    </div>
        </>
    )
}