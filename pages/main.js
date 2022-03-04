import Navbar, { MBFooter } from "./navbar";
import MainStyles from '../styles/Main.module.css'
import Image from "next/image";

const FirstContent = () => {
    return (
        <>
            <div>
                <Image src='/images/4/Body Type.png' alt='' width={100} height={100} />
            </div>
            
        </>
    )
}

function MainImageSlider() {
    return (
        <>
        <div className="">
            <FirstContent />
        </div>
        </>
    )
}

function Content() {
    return (
        <>
        <div className="ml-12 mt-6">
            <Image src='/images/image 14.png' className={MainStyles.moonimg} width={148} height={148} />
            <div className={MainStyles.head1}>Hello, &nbsp;<h1>friend!</h1></div>
            <div className={MainStyles.head2}>How would you like to get started?</div>
            <div className={MainStyles.space}></div>
            <div className={MainStyles.head2}>Choose from one of the following</div>
            <MainImageSlider />
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