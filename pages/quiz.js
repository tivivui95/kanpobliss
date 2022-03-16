import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import styles from '../styles/6p.module.css';
import { useState, useEffect } from 'react';
import Content10 from "./10";
const Allquestion = [
    {
        question: 'Which of the following describes your usual appetite and digestion?',
        answer: [
            {
                data: 'Poor digestion',
                ind: 4
            },
            {
                data: 'Poor appetite',
                ind: 4
            },
            {
                data: 'Frequent bloating',
                ind: 5,
            },
            {
                data: 'Prefer hot food and drinks',
                ind: 2,
            },
            {
                data: 'Easily nauseous',
                ind: 8,
            },
            {
                data: 'Burp often',
                ind: 5,
            },
            {
                data: 'Feeling of lump in the throat',
                ind: 5,
            },
            {
                data: 'Healthy appetite',
                ind: 1,
            },
            {
                data: 'Not applicable',
                ind: 0,
            },
        ]
    },
    {
        question: 'Which of the following describes your usual bowel movement?',
        answer: [
            {
                data: 'Profuse clear urination',
                ind: 2,
            },
            {
                data: 'Prone to diarrhoea or loose stools',
                ind: 2,
            },
            {
                data: 'Prone to constipation',
                ind: 3,
            },
            {
                data: 'Scanty urination',
                ind: 3,
            },
            {
                data: 'Often feel like uncleared stools',
                ind: 9,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Which of the following describes your usual mental and emotional state?',
        answer: [
            {
                data: 'Emotionally stable',
                ind: 1,
            },
            {
                data: 'Easily irritable',
                ind: 5,
            },
            {
                data: 'Poor memory',
                ind: 6,
            },
            {
                data: 'Sleepy and tired',
                ind: 2,
            },
            {
                data: 'Sluggish and heavy',
                ind: 8,
            },
            {
                data: 'Optimistic',
                ind: 1,
            },
            {
                data: 'Alert and focused',
                ind: 1,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Which of the following describes your usual physical appearance?',
        answer: [
            {
                data: 'Dark eye bags',
                ind: 7,
            },
            {
                data: 'Visible varicose veins',
                ind: 7,
            },
            {
                data: 'Puffy eyes',
                ind: 8,
            },
            {
                data: 'Prone to swelling ankles',
                ind: 8,
            },
            {
                data: 'Purplish lips and nails',
                ind: 7,
            },
            {
                data: 'Pale lips',
                ind: 6,
            },
            {
                data: 'Plump body type',
                ind: 8,
            },
            {
                data: 'Physcially fit',
                ind: 1,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Which of the following describes your skin complexion?',
        answer: [
            {
                data: 'Sallow complexion',
                ind: 6,
            },
            {
                data: 'Dark and dull complexion',
                ind: 7,
            },
            {
                data: 'Pale complexion',
                ind: 2,
            },
            {
                data: 'Oily skin and prone to acne',
                ind: 9,
            },
            {
                data: 'Scarring takes a long time to heal',
                ind: 7,
            },
            {
                data: 'Dry skin and hair',
                ind: 6,
            },
            {
                data: 'Prone to skin allergies, e.g., eczema, rashes, hives',
                ind: 10,
            },
            {
                data: 'Radiant complexion',
                ind: 1,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Do / did you commonly exhibit any of these characteristics?',
        answer: [
            {
                data: 'Weak and soft voice',
                ind: 4,
            },
            {
                data: 'Shallow or shortness of breath',
                ind: 4,
            },
            {
                data: 'Fall sick easily',
                ind: 4,
            },
            {
                data: 'Often fell sick as a child',
                ind: 10,
            },
            {
                data: 'Often affected by pollens during spring',
                ind: 10,
            },
            {
                data: 'Respiratory allergies e.g., asthma, panting, sneezing',
                ind: 10,
            },
            {
                data: 'Prone to blocked or running nose',
                ind: 10,
            },
            {
                data: 'Very sensitive to certain medications, foods, scents, or other allergens',
                ind: 10,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Which of the following describes how your body feels from changes in weather or environment? ',
        answer: [
            {
                data: 'Body is hot to touch, frequent low grade fever',
                ind: 9,
            },
            {
                data: 'Feel uncomfortable especially in damp and hot environments',
                ind: 9,
            },
            {
                data: 'Prone to night sweats',
                ind: 3,
            },
            {
                data: 'Hot palms and feet, which worsen in the evenings',
                ind: 3,
            },
            {
                data: 'Sensitive to the change in temperature or seasons',
                ind: 10,
            },
            {
                data: 'Cold hands and feet',
                ind: 2,
            },
            {
                data: 'Spontaneous sweating, even in cool temperature',
                ind: 4,
            },
            {
                data: 'Adaptable to enviromental changes',
                ind: 1,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Do you often experience any of these symptoms?',
        answer: [
            {
                data: 'Bodyache across differents areas of the body',
                ind: 5,
            },
            {
                data: 'Stuffiness in chest',
                ind: 5,
            },
            {
                data: 'Stabbing pain at a certain spot',
                ind: 7,
            },
            {
                data: 'Physical pain or discomforts that worsen in cold temperature',
                ind: 2,
            },
            {
                data: 'Heart palpitations',
                ind: 4,
            },
            {
                data: 'Numbness in the extremities',
                ind: 6,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: 'Do you often experience any of these symptoms?',
        answer: [
            {
                data: 'Thick yellowish tongue coating',
                ind: 9,
            },
            {
                data: 'Bitter sticky feeling in the mouth',
                ind: 9,
            },
            {
                data: 'Excessive thirst and dry mouth',
                ind: 3,
            },
            {
                data: 'Rarely thirsty',
                ind: 8,
            },
            {
                data: 'Blurred vision',
                ind: 6,
            },
            {
                data: 'Dry eyes',
                ind: 3,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
    {
        question: '(Optional) Do you often experience any of these women\'s health conditions?',
        answer: [
            {
                data: 'Severe PMS and tender breasts before periods',
                ind: 5,
            },
            {
                data: 'Scanty and pale coloured period',
                ind: 6,
            },
            {
                data: 'Dark blood clots during period',
                ind: 7,
            },
            {
                data: 'Hot flushes',
                ind: 3,
            },
            {
                data: 'Excessive clear discharge',
                ind: 8,
            },
            {
                data: 'Prone to thrush or urinary tract infection',
                ind: 10,
            },
            {
                data: 'Not applicable',
                ind: 100,
            },
        ]
    },
]
const MantraList = [
    'HARMONY',
    'WARMTH',
    'NOURISHMENT',
    'ENERGY',
    'EASE',
    'FLOW',
    'BOOST',
    'REJUVENATION',
    'CALM',
    'BALANCE'

]

const Answer = ({ onChangeResult, data, ind, arrInd }) => {
    const [check, onChecked] = useState(false);
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        onChecked(value);
        onChangeResult(value, ind, arrInd);
    }
    return (
        <>
            <label className={styles.cardcover}>
                
                <input type="checkbox" value={check} onChange={handleChange} />
                <div className={styles.card}>
                {data}
                </div>
            </label>
        </>
    )
}

const RenderQuestion = ({ questionJs, handlePrev, handleNext }) => {
    const [ans, onChangeAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const updateData = (value, ind) => {
        let new_arr = ans;
        ind != 100 ? new_arr[ind] = value: new_arr[0] = value
        onChangeAns(new_arr);
        console.log(value, ' and ', ind);
        console.log(ans);
    }
    const HandleAns = (value, ind, arrInd) => {
        console.log(value);
        if (value == true) {
            updateData(ind, arrInd);
        } else {
            updateData(0, arrInd);
        }
    }

    return (
        <>
            <h2 className={styles.head2}>{questionJs.question}</h2>
            {/* <div>{ans}</div> */}
            <div className="grid md:grid-cols-2 gap-4 p-6 md:pb-10">
                {questionJs.answer.map((answers, index) => (
                    <div key={index}>
                        <Answer data={answers.data} ind={answers.ind} arrInd={index} onChangeResult={HandleAns} />
                        {/* <h3>{ans.ind}</h3> */}
                    </div>
                ))}
            </div>
            <a onClick={() => handleNext(ans, questionJs.answer)} className={styles.nextbtn}><div className={styles.nextsign}></div></a>
            <a onClick={() => handlePrev(ans, questionJs.answer)} className={styles.prevbtn}><div className={styles.prevsign}></div></a>
        </>
    )
}

const DragResult = ({ top3, allAns, showResult }) => {
    const [mantra, onChangeMantra] = useState(0);
    let res = [];
    top3.map((element) => {
        let i = 0;
        allAns.map((el) => {
            el[1] == element ? i = el[1] : null
        })
        res.push([allAns[i][0], allAns[i][1]]);
    })
    return (
        <>
            <ul>
                {res.map((el, index) => (<li key={index} onClick={onChangeMantra(el[1])}>{el[0]}</li>))}
            </ul>
            <a onClick={showResult(mantra)}>Submit</a>
        </>
    )
}

export default function Main() {
    const [curPage, onChangePage] = useState(0);
    const [result, onChangeResult] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [showItem, onChangeShow] = useState(false);
    const [sortedArr, onChangeSortedArr] = useState([]);
    const [anslists, onChangeAnsLists] = useState([]);
    const [mantra, onChangeMantra] = useState(0);
    const [dragList, onChangeDragList] = useState([]);
    const [showMantra, onShowMantra] = useState(false);

    const onSubmit = () => {
        let resSorted = result;
        resSorted[0] = 0;
        onChangePage(0);
        console.log('before: ', resSorted);
        // resSorted.sort(function(a, b){return b - a});        
        console.log('after', resSorted);
        console.log('result', result);
        let mantraList = [];
        for (let i = 0; i < 3; i++) {
            result.map((el, index) => {
                el == Math.max(...resSorted) ? mantraList.push(index) : null;
                el == Math.max(...resSorted) ? resSorted[index] = 0 : null
            })
        }
        onChangeShow(true);
        let newmantra = [];
        newmantra.push(mantraList[0]);
        newmantra.push(mantraList[1]);
        newmantra.push(mantraList[2]);
        onChangeSortedArr(newmantra);
        let res = [];
        newmantra.map((element) => {
            let i = 0;
            anslists.map((el) => {
                el[1] == element ? i = el[1] : null
            })
            anslists[i] != null ? res.push([anslists[i][0], anslists[i][1]]): null
        })
        onChangeDragList(res);
    }

    const DragResult = ({ top3, allAns }) => {

        let res = [];
        top3.map((element) => {
            let i = 0;
            allAns.map((el) => {
                el[1] == element ? i = el[1] : null
            })
            res.push([allAns[i][0], allAns[i][1]]);
        })
        onChangeDragList(res);
    }

    const showResultMantra = (Mantra) => {

    }

    const handleNextPage = (resArr, ansList) => {
        if (resArr.reduce((a, b) => a + b, 0) > 0) {
            curPage < 9 ? onChangePage(curPage + 1) : onChangePage(curPage);
            if (curPage < 9) {
                let new_arr = result;
                let temp_ans_list = anslists;
                resArr.map((resInd, index) => {
                    new_arr[resInd]++;
                    resInd > 0 ? temp_ans_list.push([ansList[index].data, ansList[index].ind]) : null;
                });
                onChangeResult(new_arr);
                onChangeAnsLists(temp_ans_list);
            }
        }
    }

    const handlePrevPage = (resArr, ansList) => {
        if (resArr.reduce((a, b) => a + b, 0) > 0) {
            curPage > 0 ? onChangePage(curPage - 1) : onChangePage(curPage);
            if (curPage > 0) {
                let new_arr = result;
                let temp_ans_list = anslists;
                resArr.map((resInd, index) => {
                    new_arr[resInd]--;
                    resInd > 0 ? temp_ans_list.push([ansList[index].data, ansList[index].ind]) : null;
                });
                onChangeResult(new_arr);
                onChangeAnsLists(temp_ans_list);
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={!showMantra ? '' : 'hidden'}><Navbar /></div>
                
                <div className={showMantra ? 'block' : 'hidden'}><Content10 Mantra={MantraList[mantra]} /></div>
                <div className={!showMantra ? '' : 'hidden'}>
                <div className="container mx-auto mt-8 mb-8 grid justify-items-center relative ">
                    <div className={styles.contain}>
                        
                        <div className="container mx-auto">
                            <div className={showItem && !showMantra ? 'block' : 'hidden'}>
                            <div className={styles.head2}>Drag & re-order the symptoms you selected previously. </div>
                            <div className={styles.head3}>Tap and hold the symptom before dragging it. 1 being most relevant:</div>
                                <ul className="grid gap-2">
                                    {dragList.map((element, index) => (
                                    <li className={styles.card} key={index} onClick={() => onChangeMantra(element[1])}>
                                        {element[0]}
                                    </li>
                                    ))}
                                </ul>
                                <button className='block greenbtn mt-4' onClick={() => onShowMantra(true)}>Submit</button>
                            </div>
                            <div className={!showItem ? 'block' : 'hidden'}>
                                {Allquestion.map((content, index) => (
                                    <div className={curPage == index ? 'block' : 'hidden'} key={index * 100}>
                                        <RenderQuestion questionJs={content} handlePrev={handlePrevPage} handleNext={handleNextPage} />
                                    </div>

                                ))}                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                    <div className={!showItem ? 'block' : 'hidden'}>
                        <div className={styles.graybar}>
                            <div className={styles.greenbar} style={{ marginLeft: curPage * 25 }}></div>
                        </div>
                    </div>
                    
                    <button className={curPage == 9 ? 'block greenbtn mt-4' : 'hidden'} onClick={onSubmit}>Submit</button>
                </div>


                <MBFooter />
                <Footer />
                </div>
            </div>
        </>
    )
}