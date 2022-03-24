import Content16 from "./views/16";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Content14 from "./views/14";

export default function({ Mantra }) {
    const [ next, onNext ] = useState(false);
    const router = useRouter();
    return (
        <>
        {!next ? <Content14 Mantra={router.query.Mantra} onNext={onNext} /> : <Content16 Mantra={router.query.Mantra} />}
        
        </>
    )
}