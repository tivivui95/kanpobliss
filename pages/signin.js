import Content112 from './views/11_2';
import Content13 from './views/13';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function({ Mantra }) {
    const [ login, onLogin ] = useState(false);
    const router = useRouter()
    console.log(router.query);
    return (
        <>
        {!login ? <Content112 Mantra={router.query.Mantra} onLogin={onLogin} /> : <Content13 Mantra={router.query.Mantra} />}
        </>
    )
}