import Content13 from './views/13';
import { useRouter } from 'next/router';

export default function Main() {
    const router = useRouter();
    return (
        <>
        <Content13 onNav='/' />
        </>
    )
}