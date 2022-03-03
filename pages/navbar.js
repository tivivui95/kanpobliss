import Link from "next/link";
import Image from "next/image";
import MainStyles from '../styles/Main.module.css'

export function MBFooter() {
    return (
        <>
        <div className={MainStyles.mbfooter}>
            <div className='absolute bottom-4 flex justify-self-center w-screen'>
                <div className='text-center w-screen'>©2022 Copyright all reserved by Kanpobliss</div>
            </div>
        </div>
        </>
    )
}

export default function Navbar() {
    return (
        <>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href='/'>
                        <a className="flex items-center">
                            <Image src="/images/Logo.svg" height={45} width={145} />
                        </a>
                    </Link>
                    
                    <div className="w-auto inline-block" id="mobile-menu">
                        <ul className="flex flex-col pt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className={MainStyles.lighttext}>
                            <Link href='/'>
                                <a  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Type Assessment</a>
                                </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='/'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Recovery Assessmemt</a>
                                </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='/'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Wellbeing Toolkit</a>
                                </Link>
                            </li>
                            <li>
                                <button data-collapse-toggle="mobile-menu" type="button" className="inline-block" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <Image src='/images/BurgerMenu.svg' width={16} height={16} />
                                </button>
                            </li>
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </>
    )
}