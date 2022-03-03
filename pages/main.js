import Navbar, { MBFooter } from "./navbar";
import MainStyles from '../styles/Main.module.css'
import Image from "next/image";

function Content() {
    return (
        <>
        <div className="ml-12 mt-6">
            <Image src='/images/image 14.png' className={MainStyles.moonimg} width={148} height={148} />
            <div className={MainStyles.head1}>Hello, friend!</div>
            <div className={MainStyles.head2}>How would you like to get started?</div>
            <div className={MainStyles.space}></div>
            <div className={MainStyles.head2}>Choose from one of the following</div>
        </div>
            
        </>
    )
}

export default function Main() {
    return (
        <>
        <div className={MainStyles.container}>
            <Navbar />
            <Content />
            <MBFooter />
        </div>
        </>
        
    )
}