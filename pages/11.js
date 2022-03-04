import Image from "next/image";
import { MBFooter } from "./navbar";
import styles from '../styles/11.module.css'

export default function Content11() {
    return (
        <>
            <div className={styles.container}>
                <Image src='/images/4/Logo.png' alt='' width={200} height={200} />
                <div>Hello friend</div>
                <MBFooter />
            </div>
        </>
    )
}