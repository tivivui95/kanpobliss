import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import styles from '../../styles/6p.module.css';
import MainStyles from '../../styles/Main.module.css';
import { useState } from "react";

const InputData = ({ text, onChange, isChecked }) => {
    const [check, setChecked] = useState(false);
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (onChange) {
            onChange(value);
        }
        setChecked(value);
    }
    return (
        <label className="checkbox text-xs -ml-4">
            <input
                name="isGoing"
                type="checkbox"
                checked={isChecked !== null || isChecked !== undefined ? isChecked : check}
                onChange={handleInputChange}
            />
            <span className="checkmark"></span>
            <span className="labelcheck text-sm onmb">&#160; &#160; &#160;
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

const Q1CheckBoxInit = [
    {
        id: 0,
        label: 'Stress management',
        value: false,
    },
    {
        id: 1,
        label: 'Diet & weight management',
        value: false,
    },
    {
        id: 2,
        label: 'Improve immunity',
        value: false,
    },
    {
        id: 3,
        label: 'Healthy sleep habits ',
        value: false,
    },
    {
        id: 4,
        label: 'Others',
        value: false,
    }
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
    const [q1CheckBox, setQ1CheckBox] = useState(Q1CheckBoxInit);

    const _setQ1CheckBox = ({ id, value }) => {
        const _q1CheckBox = q1CheckBox.map(item => {
            if (item.id === id) {
                item.value = value;
            }
            return item;
        })
        console.log(_q1CheckBox);
        setQ1CheckBox(_q1CheckBox);
    }

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

                        <div className="grid md:grid-cols-2 gap-2 w-full onmb">
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Age.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select className="onmb" value={age} onChange={handleAge}>
                                            <option className="brown" value="0">Choose your age range:</option>
                                            <option className="brown" value="grapefruit">18-25</option>
                                            <option className="brown" value="lime">25-35</option>
                                            <option className="brown" value="coconut">35-55</option>
                                            <option className="brown" value="mango">55+</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Gender.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select className="onmb" value={gender} onChange={handleGender}>
                                            <option className="brown" value={0}>Choose your gender:</option>
                                            <option className="brown" value={1}>Male</option>
                                            <option className="brown" value={2}>Female</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="ml-4 test-base brown onmb">*What are your current wellbeing goals?</div>
                            {q1CheckBox.map((item) => (
                                <div key={item.id}>
                                    <InputData
                                        isChecked={item.value}
                                        text={item.label}
                                        onChange={(value) => _setQ1CheckBox({ id: item.id, value })}
                                    />
                                </div>
                            ))}
                            {q1CheckBox.find((item) => item.id === 4).value && (
                                <textarea
                                    className="ml-4 w-5/6 onmb"
                                    value={check1st}
                                    onChange={handleInputChange}
                                />
                            )}

                            <div className="ml-4 test-base brown onmb">What are your current wellness practices?</div>
                            {Q2.map((cont, ind) => <div key={ind}><InputData text={cont} /></div>)}
                            <div className="ml-4 test-base brown onmb">Which of these wellness practices interest you?</div>
                            {Q3.map((cont, ind) => <div key={ind}><InputData text={cont} /></div>)}
                        </div>
                        <div onClick={() => onChange(false)} className={styles.submit}>Submit Answers</div>
                        <br />

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