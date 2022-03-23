import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import styles from '../../styles/6p.module.css';
import MainStyles from '../../styles/Main.module.css';
import { useState } from "react";

const InputData = ( {text} ) => {
    const [check, setChecked] = useState(false);
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setChecked(value);
    }
    return (
        <label className="checkbox text-xs -ml-4">
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={check}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                <span className="labelcheck text-sm">&#160; &#160; &#160;
                                {text}</span>
                            </label>
    )
}

const Q1 = [
    'Stress management',
    'Diet & weight management',
    'Improve immunity',
    'Healthy sleep habits ',
    'Others'
]

const Q2 = [
    'Breathwork & meditation',
    'Fitness workout',
    'Diet detox',
    'Spa massage & treatment',
    'Yoga',
    'Others'
]

const Q3 = [
    'Movement meditation',
    'Self massage',
    'Sound healing',
    'Plant medicine',
    'Others'
]

export default function Content9({ onChange }) {
    const [age, onChangeAge] = useState('Choose your age range:');
    const [gender, onChangeGender] = useState(0);
    const [check1st, on1stChecked] = useState("Please write down in details.");

    const handleAge = (event) => {
        onChangeAge(event.target.value)
    }
    const handleGender = (event) => {
        onChangeGender(event.target.value)
    }
    const handleInputChange = (event) => {
        const target = event.target;
        // const value = target.type === 'textarea' ? target.checked : target.value;
        on1stChecked(target.value);
    }

    return (
        <>
        <Navbar />
            <div className={styles.container}>

                
                <div className="container mx-auto mt-8 mb-8 grid justify-items-center relative ">

                    <div className={styles.contain}>
                        <div className={styles.head2}>Tell us more about you </div>
                        <div className={styles.onmb}>
                        <div className="grid md:grid-cols-2 gap-2 w-full">
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Age.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select value={age} onChange={handleAge}>
                                            <option value="0">Choose your age range:</option>
                                            <option value="grapefruit">18-25</option>
                                            <option value="lime">25-35</option>
                                            <option value="coconut">35-55</option>
                                            <option value="mango">55+</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Gender.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select value={gender} onChange={handleGender}>
                                            <option value={0}>Choose your gender:</option>
                                            <option value={1}>Male</option>
                                            <option value={2}>Female</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="ml-4 test-base brown">*What are your current wellbeing goals?</div>
                            {Q1.map((cont, ind) => <div key={ind}><InputData text={cont} /></div>)}
                            <textarea className="ml-4 w-5/6" value={check1st} onChange={handleInputChange} />
                            <div className="ml-4 test-base brown">What are your current wellness practices?</div>
                            {Q2.map((cont, ind) => <div key={ind}><InputData text={cont} /></div>)}
                            <div className="ml-4 test-base brown">Which of these wellness practices interest you?</div>
                            {Q3.map((cont, ind) => <div key={ind}><InputData text={cont} /></div>)}
                        </div>
                        <div onClick={() => onChange(false)} className={styles.submit}>Submit Answers</div>
                        <br />
                    </div>
                        </div>
                        
                    {/* <div className="md:mt-4">
                        <Image src='/images/6/next.png' alt="" width={420} height={40} />
                    </div> */}

                </div>

                <Footer />
                <MBFooter />
            </div>
        </>
    )
}