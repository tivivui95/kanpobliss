import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import styles from '../styles/6p.module.css';
import { useState, useEffect } from 'react';
import Content10 from "./views/10";
import {Allquestion, MantraList} from '../components/quiz/quiz1data';
import { RenderQuestion, RenderBonus } from "../components/quiz/QuesList";
import App from '../components/quiz/dragItems';

export default function Main() {
    const [curPage, onChangePage] = useState(0);
    const [result, onChangeResult] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [showItem, onChangeShow] = useState(false);
    const [anslists, onChangeAnsLists] = useState([]);
    const [mantra, onChangeMantra] = useState(0);
    const [dragl, setDragL] = useState([]);
    const [showMantra, onShowMantra] = useState(false);

    const [winReady, setwinReady] = useState(false);

    const [ resultTie, onResultTie ] = useState(false);

    useEffect(() => {
        setwinReady(true);
    }, []);

    const onSubmit = (lastresult) => {        
        let resSorted = [];
        result.map((el, indx) => indx < 11 ? resSorted.push(el): null);
        resSorted[0] = 0;
        onChangePage(0);
        console.log('result', resSorted);
        console.log('ans List: ', anslists);
        let mantraList = [];
        resSorted.map((el, index) => {
            el == Math.max(...resSorted) ? mantraList.push(index) : null;
        })
        let res = [];
        if (mantraList.length == 1) {
            onChangeMantra(mantraList[0]);
            onShowMantra(true);
            onResultTie(false);
        } else if (mantraList.length <= 3) {
            mantraList.map((matraEl) => {
                let checkStop = true;
                let i = 0;
                while (checkStop) {
                    anslists[i][1] == matraEl ? checkStop = false: i++
                }
                res.push(anslists[i]);
            })
            console.log('res',res);
            onResultTie(false);
            onChangeShow(true);
        } else {
            
            mantraList.map((matraEl) => {
                let i = 0;
                if (anslists) {
                    while (i < anslists.length) {
                        if (anslists[i])
                        anslists[i][1] == matraEl ? res.push(anslists[i]): null;
                        i++;
                    }
                }
                
            })
            onResultTie(true);
            onChangeShow(true);
        }
        // console.log('drag1: ', dragList);
        let convertDrag = [];
        res.map((cont, idx) => {
            convertDrag.push({
                content: cont[0],
                ind: cont[1],
                id: `item-${idx}`
            })
        })
        console.log('convert Drag: ', convertDrag);
        setDragL(convertDrag);
        console.log(dragl);
    }

    const onSecondSubmit = (anss) => {
        let resSorted = [];
        anss.map((el, indx) => indx < 11 ? resSorted.push(el): null);
        onChangePage(0);
        console.log('result', resSorted);
        console.log('ans List: ', anslists);
        let res = [];
        for (let inx = 0; inx < resSorted.length; inx++) {
            const matraEl = resSorted[inx];
                let i = 0;
                while (true) {
                    if (anslists[i])
                    if (anslists[i][1] == matraEl) {
                        res.push(anslists[i]);
                        i++;
                        break;
                    } else i++;
                    else break;
                }
                
        }
        console.log('res',res);
        onResultTie(false);
        onChangeShow(true);
        
        let convertDrag = [];
        res.map((cont, idx) => {
            convertDrag.push({
                content: cont[0],
                ind: cont[1],
                id: `item-${idx}`
            })
        })
        console.log('convert Drag: ', convertDrag);
        setDragL(convertDrag);
        console.log(dragl);
    }

    const showResultMantra = (Mantra) => {
        onChangeMantra(Mantra[0].ind);
        onShowMantra(true);
        console.log(mantra);
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
                {showMantra ? <div><Content10 Mantra={MantraList[mantra]} /></div> : <div className={!showMantra ? '' : 'hidden'}>
                <div className="container mx-auto md:mt-8 mb-8 grid justify-items-center relative ">
                    <div className={styles.contain}>
                        
                        <div className="container mx-auto">
                            {resultTie ? <RenderBonus data={dragl} onSub={onSecondSubmit} />: 
                            <>
                            <div className={showItem && !showMantra ? 'block' : 'hidden'}>
                            <div className={styles.head2}>Drag & re-order the symptoms you selected previously. </div>
                            <div className={styles.head3}>Tap and hold the symptom before dragging it. 1 being most relevant:</div>
                                {winReady && showItem && !showMantra ? <App allItems={dragl} onSub={showResultMantra} /> : null}
                            </div>
                            <div className={!showItem ? 'block' : 'hidden'}>
                                {Allquestion.map((content, index) => (
                                    <div className={curPage == index ? 'block' : 'hidden'} key={index * 100}>
                                        <RenderQuestion questionJs={content} handlePrev={handlePrevPage} handleNext={handleNextPage} />
                                    </div>
                                ))}                                
                                
                            </div>
                            </>
                            }
                            
                        </div>
                    </div>
                    <div className="mt-4"></div>
                    <div className={!showItem ? 'block' : 'hidden'}>
                        <div className={styles.graybar}>
                            <div className={styles.greenbar} style={{ width: 25 + curPage * 25 }}></div>
                        </div>
                    </div>
                    
                    <button className={curPage == 9 ? 'block greenbtn mt-4' : 'hidden'} onClick={onSubmit}>Submit</button>
                </div>


                <MBFooter />
                <Footer />
                </div>}
                
                
            </div>
        </>
    )
}