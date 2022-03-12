import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";

import styles from '../styles/11.module.css';
import { useState } from "react";
import SocialLogin from "../components/socialLogin";

const Content11_2 = () => {
    const [ remember, onChangeRemember ] = useState(true);

    const handleRemember = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        onChangeRemember(value);
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                <div className={styles.TextBox}><Image src="/images/11/Bigtext.png" alt='' width={300} height={80} /></div>
                    <div className="CenterBox">
                        <h1 className={styles.TextHello}>Welcome Back!</h1>
                        <div className={styles.inputBox}>
                        <div className={styles.Icon}><Image src="/images/11/Group 2.png" alt='' layout="fill" objectFit="scale-down" /></div>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={styles.inputBox}>
                            <div className={styles.Icon}><Image src="/images/11/Password.png" alt=''layout="fill" objectFit="scale-down" /></div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="grid grid-cols-2 w-5/6 -mt-2 mb-2 gap-2 text-xs">
                            <div className="text-left darkred">
                                Password is incorrect.
                            </div>
                            <div className="flow-root">
                                <div className="float-right nearblack">
                                    Forget Password
                                </div>
                            
                            </div>
                        </div>
                        <div className={styles.checking}>
                            <div>
                                <label className="scheckbox text-xs -ml-5">
                                    <input className={styles.checkboxs} type="checkbox" checked={remember} onChange={handleRemember} />
                                    <span className="scheckmark"></span>
                                    <span className="pl-6 text-sm nearblack">Remember me for login</span></label>
                            </div>
                            <div>
                                
                                <label className="scheckbox text-xs -ml-5">
                                <input className={styles.checkboxs} type="checkbox" />    
                                <span className="scheckmark"></span>
                                <span className="pl-6 text-sm nearblack">
                                    I agree to the Kanpobliss <a>Terms & Condtion</a> and <a>Privacy Policy</a></span></label>
                            </div>
                        </div>
                    </div>
                    <Link href='#'><a className="greenbtn -mt-7">Sign in</a></Link>
                    <SocialLogin />
                </div>
            </div>
            </div>
        </>
    )
}

export default Content11_2;