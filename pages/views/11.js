import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import Term from './29';
import styles from '../../styles/11.module.css'
import { useState } from "react";
import SocialLogin from "../../components/socialLogin";

const Content11 = ({ Mantra }) => {
    const [ remember, onChangeRemember ] = useState(true);
    const [ disclaim, onShowDisclaim ] = useState(false);

    const handleRemember = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        onChangeRemember(value);
    }

    return (
        <>
        {disclaim ?
        <Term onNav={onShowDisclaim} />:
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
                                    I agree to the Kanpobliss <a onClick={() => onShowDisclaim(true)}>Terms & Condtion</a> and <a>Privacy Policy</a></span></label>
                            </div>
                        </div>
                    </div>
                    <Link href={'/disclaimer?Mantra=' + Mantra}><a className="graybtn -mt-7">Sign up</a></Link>
                    <SocialLogin Mantra={Mantra} />
                </div>
            </div>
        </div> }
        </>
    )
}

export default Content11;