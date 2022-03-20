import Content112 from './views/11_2';
import Content16 from './views/16';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function({ Mantra }) {
    const [ login, onLogin ] = useState(false);
    const router = useRouter()
    console.log(router.query);
    return (
        <>
        {!login ? <Content112 onLogin={onLogin} /> : <Content16 Mantra={router.query.Mantra} />}
        </>
    )
}