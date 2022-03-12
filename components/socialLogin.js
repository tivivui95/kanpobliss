import Image from "next/image";
import Link from "next/link";

import styles from '../styles/11.module.css'
import { useState } from "react";

export default function SocialLogin() {
    return (
        <>
        <div className={styles.footer}>
                        <div>or Sign Up Using</div>
                        <div className={styles.socialSpan}>
                            <Image src="/images/11/Facebook.png" alt='' width={46} height={46} />
                            <Image src="/images/11/Twitter.png" alt=''  width={46} height={46} />
                            <Image src="/images/11/Gmail.png" alt='' width={46} height={46} />
                        </div>
                        <div>Already has an account? <a className={styles.a}>Sign In</a></div>
                    </div>
        </>
    )
}