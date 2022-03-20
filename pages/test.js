import App from '../components/quiz/dragItems'
import React, { useState, useEffect } from 'react';

const data = [
    {
        content: 'Poor appetite',
        id: 'item-1'
    },
    {
        content: 'Frequent bloating',
        id: 'item-2',
    },
    {
        content: 'Prefer hot food and drinks',
        id: 'item-3',
    }
];

export default function Demo() {
    const [winReady, setwinReady] = useState(false);

    const onSubmitBtn = (datalist) => {
        console.log(datalist);
    }

    useEffect(() => {
        setwinReady(true);
    }, []);
    return (
        <div className="pl-4 pr-4 pt-3">
           ` <h5>Frontend Board</h5>`
            {winReady ? <App allItems={data} onSub={onSubmitBtn} /> : null}
        </div>
    );
} 