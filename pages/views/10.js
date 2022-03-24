import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import Disclaimer from './29';
import Content9 from "./9";

import React, { useState } from "react";


import styles from '../../styles/11.module.css';


const Content10 = ({ Mantra }) => {

    const [ disclaim, onShowDisclaim ] = useState(false);
    const [ info, onGetInfo ] = useState(true);

    const onChangeThing = () => {

    }

    return (
        <>
        {!disclaim && !info ?
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                        <div className={styles.icontop}>
                            <Image src={'/images/icon/' + Mantra + '.png'} alt='' layout="fill" objectFit="scale-down" />
                        </div>
                    <div className={styles.CenterBox}>
                        
                        <div className="mt-12 text-xl mb-4">Your body needs</div>
                        <h1 className="text-3xl">&#123;{Mantra}&#125;</h1>
                        <p className="text-center p-10">
                        Sign up to learn more about your unique body type. Get personalized wellness tips and recommendations!
                        </p>
                    </div>
                    <Link href={'/signup?Mantra=' + Mantra}><a className="greenbtn -mt-9">Sign up</a></Link>

                </div>
            </div>
        </div>
        <a onClick={() => onShowDisclaim(true)} className="absolute bottom-3 nearwhite text-center w-full">Disclaimer</a>
        </>: info ? <Content9 onChange={onGetInfo} /> : <Disclaimer onNav={onShowDisclaim} /> }
        
        
        </>
    )
}

export default Content10;