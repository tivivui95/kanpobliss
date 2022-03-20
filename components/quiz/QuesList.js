import React, { useState, useEffect } from 'react';
import styles from '../../styles/6p.module.css';

export const Answer = ({ onChangeResult, data, ind, arrInd }) => {
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

export const RenderQuestion = ({ questionJs, handlePrev, handleNext }) => {
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
            <div className="grid md:grid-cols-2 gap-2 md:gap-4 pt-2 pb-2 md:pb-10">
                {questionJs.answer.map((answers, index) => (
                    <div key={index}>
                        <Answer data={answers.data} ind={answers.ind} arrInd={index} onChangeResult={HandleAns} />
                    </div>
                ))}
            </div>
            <a onClick={() => handleNext(ans, questionJs.answer)} className={styles.nextbtn}><div className={styles.nextsign}></div></a>
            <a onClick={() => handlePrev(ans, questionJs.answer)} className={styles.prevbtn}><div className={styles.prevsign}></div></a>
        </>
    )
}

export const RenderBonus = ({ data, onSub}) => {
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
            <h2 className={styles.head2}>Choose 3 options: </h2>
            <div className="grid md:grid-cols-2 gap-4 p-6 md:pb-10">
                {data.map((answers, index) => (
                    <div key={index}>
                        <Answer data={answers.content} ind={answers.ind} arrInd={index} onChangeResult={HandleAns} />
                    </div>
                ))}
            </div>
            <button className='greenbtn' onClick={() => onSub(ans)}>Submit</button>
        </>
    )
}